import {SignIn} from './components/sign-in-page/SignInPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={
        <ProtectedRoute>
          <HomePage/>
        </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App ;
