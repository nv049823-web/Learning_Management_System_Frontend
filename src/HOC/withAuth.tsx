import { Navigate } from "react-router-dom";

const withAuth = (WrapedComponent:any) => {
  return (prop: any)=>{
    const token = JSON.parse(localStorage.getItem("token")|| "null");
    if(!token) return <Navigate to={"/"} replace/>
    return <WrapedComponent {...prop} />;
  }
}

export default withAuth;
