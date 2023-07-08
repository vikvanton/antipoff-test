import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../../pages/sign-up/sign-up";
import Users from "../../pages/users/users";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
