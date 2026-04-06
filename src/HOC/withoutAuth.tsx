import { Navigate } from "react-router-dom";

const withoutAuth = (WrappedComponent: any) => {
    return (props: any) => {
      const token = JSON.parse(localStorage.getItem("token") || "null");
      const userType = JSON.parse(localStorage.getItem("userTypes") || "null");
  
      if (token) {
        return <Navigate to={`/dashboard/${userType==="user"?"user":"admin"}`} replace />;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  export default withoutAuth