import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../../pages/sign-up/sign-up";
import Users from "../../pages/users/users";
import User from "../../pages/user/user";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import Error from "../../pages/error/error";
import ProtectedRoute from "../protected-route/protected-route";

function App(): JSX.Element {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute type="auth">
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute type="auth">
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute type="unauth">
              <SignUp />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
