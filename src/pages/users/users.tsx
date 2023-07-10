import { useEffect } from "react";
import UsersHeader from "./users-header/users-header";
import UsersList from "./users-list/users-list";
import ButtonPaging from "../../components/button-paging/button-paging";
import Spinner from "../../components/spinner/spinner";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";
import {
  selectPage,
  selectTotalPages,
  selectUsers,
  selectUsersError,
  selectUsersRequest,
} from "../../store/selectors/users-selectors";
import { getUsers } from "../../store/actions/users-actions";
import styles from "./users.module.scss";

function Users(): JSX.Element {
  const dispatch = useAppDispatch();
  const usersLoading = useAppSelector(selectUsersRequest);
  const usersError = useAppSelector(selectUsersError);
  const users = useAppSelector(selectUsers);
  const page = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);

  useEffect(() => {
    if (!users.length) dispatch(getUsers());
  }, [dispatch, users.length]);

  const onNextClick = () => {
    if (page < totalPages) dispatch(getUsers(page + 1));
  };

  return (
    <>
      <UsersHeader />
      <main className={styles.main}>
        {usersError ? (
          <h2 className={styles.error}>{usersError}</h2>
        ) : (
          <>
            <UsersList users={users} />
            {page < totalPages && <ButtonPaging text="Показать еще" nextPageClick={onNextClick} />}
          </>
        )}
      </main>
      {usersLoading && <Spinner />}
    </>
  );
}

export default Users;
