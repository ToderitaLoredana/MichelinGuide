import { Navigate } from "react-router";

const ProtectedRoute = (props: {children: JSX.Element}) => {
    let isLoggedIn = false;

    const isLoggedInJson = localStorage.getItem("isLoggedIn");
  
    if (isLoggedInJson) {
      isLoggedIn = JSON.parse(isLoggedInJson);
    }
    
    if (!isLoggedIn) {
      return <Navigate to="/sign-in" />
    }
  
    return props.children;
}

export default ProtectedRoute;
