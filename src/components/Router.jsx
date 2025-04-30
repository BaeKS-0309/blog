import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/login";
import SignupPage from "../pages/signup/signup";

export default function Router() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/signup' element={<SignupPage />}></Route>
    </Routes>
  );
}
