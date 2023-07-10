import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import UserHeader from "./user-header/user.header";
import styles from "./user.module.scss";
import UserDescription from "./user-description/user-description";
import UserContacts from "./user-contacts/user-contacts";
import { useAppSelector } from "../../hooks/use-app-selector";
import { selectUser, selectUserError } from "../../store/selectors/user-selectors";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { getUser } from "../../store/actions/user-actions";
import Spinner from "../../components/spinner/spinner";
import Error from "../error/error";

function User() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userError = useAppSelector(selectUserError);

  useEffect(() => {
    dispatch(getUser(Number(id)));
  }, [dispatch, id]);

  if (userError) return <Error />;

  if (!user) return <Spinner />;

  return (
    <>
      <UserHeader
        avatar={user.avatar}
        firstName={user.first_name}
        lastName={user.last_name}
        fromMain={location.state ? true : false}
      />
      <main className={styles.main}>
        <UserDescription />
        <UserContacts email={user.email} />
      </main>
    </>
  );
}

export default User;
