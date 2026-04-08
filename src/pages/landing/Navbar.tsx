import { TbCategory } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { adminSeachUrl, userSeachUrl } from "../../services/apiFetch";
const Navbar = () => {
  const [search,setSearch]=useState<any[]>([]);
  const token = JSON.parse(localStorage.getItem("token")||"null")
  const userTypes = JSON.parse(localStorage.getItem("userTypes")||"null")
  
  const onChange = async(data:any) =>{
   try{
    const res =  userTypes=="admin"?await adminSeachUrl(data):await userSeachUrl(data);
    setSearch(res?.result?.users||res?.result?.plans||res?.result?.courses||[])
   }catch(err){
    console.log("Navbar Search Error",err)
   }
  }
  return (
   <>
  <nav className="navbar navbar-expand-lg bg-transparent pt-4">
    <div className="container-fluid px-5">
     <Link className="navbar-brand text-light fw-bold fs-3 pb-1" to="/">
         <span className='text-warning'>E</span>duport
      </Link>
      <Link className="navbar-brand text-light p-2 fs-5" id='category' to="/">
        <span><TbCategory className='pb-1' /></span> Category
      </Link>
      <button
        className="navbar-toggler text-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-light"  />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      {
        !token?<ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item px-4">
         <Link className="nav-link active  " aria-current="page" to="/" >
            Home
          </Link>
        </li>
        <li className="nav-item px-4">
         <Link className="nav-link " to="/login">
            Login
          </Link>
        </li>
       
        <li className="nav-item px-4">
         <Link className="nav-link " to="/register">
           Register
          </Link>
        </li>
       
        <li className="nav-item px-4">
         <Link className="nav-link " to="/admin-login">
            Admin login
          </Link>
        </li>
        <li className="nav-item px-4">
         <Link className="nav-link " to="/admin-register">
            Admin register
          </Link>
        </li>
      </ul>:""
      }
        <form className="d-flex" role="search">
         <div className="container-fluid position-relative">
         <input
            className="form-control me-2 bg-transparent my-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id='search'
            onChange={(e) => onChange(e.target.value)}
          />
          <button className="bg-transparent position-absolute border-none" id='search-btn' type="submit">
            <span className='me-1 mb-2'><IoSearchSharp /></span>
          </button>
          <div className="container-fluid rounded rounded-3" style={{background:"#1b1b1b00"}}>
            <ul style={{listStyle:"none"}}>
              {search ? search.map((search:any,ind:any)=>(
                <>
                <li key={ind} className="text-secondary">{search.name||search.title||search.type}</li>
                </>
              )):<li >Loading...</li>}
            </ul>
          </div>
         </div>
        </form>
      </div>
    </div>
  </nav>  
</>

  );
}

export default Navbar;
