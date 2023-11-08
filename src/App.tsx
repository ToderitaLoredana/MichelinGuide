import {SignIn} from './components/sign-in-page/SignInPage';
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
