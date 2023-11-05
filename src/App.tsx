import { Container } from "@mui/material";
import Menu from "./components/menu/Menu";
import {SignIn} from './components/login-form/LoginPage.tsx/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from "./components/menu/Menu";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={
        <ProtectedRoute>
          <SideMenu/>
        </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App ;
