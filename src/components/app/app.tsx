import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../../pages/sign-up/sign-up";
import Users from "../../pages/users/users";
import User from "../../pages/user/user";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import Error from "../../pages/error/error";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<User />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
