import { VscThreeBars } from "react-icons/vsc";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import {  FaUser, FaUsers } from "react-icons/fa6";
import { FiShoppingCart, FiLayers,  } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({open,setOpen}:{open:any,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const location = useLocation();
 const userTypes = JSON.parse(localStorage.getItem("userTypes" as string) || "[]")
 const sideBarLink = userTypes==="admin"?[
    {name:"Dashboard",logo:MdDashboard,route:`/dashboard/admin`},
    {name:"Manage Users",logo:FaUsers,route:"/all-user"},
    {name:"Create Master Plans",logo:FiLayers,route:"/admin-create-master-plan"},
    {name:"Master Plans",logo:FiLayers,route:"/admin-master-plan"},
    {name:"Create Master Course",logo:FaBook,route:"/admin-create-master-course"},
    {name:"Master Course",logo:FaBook,route:"/admin-master-course"},
    {name:"Profile",logo:FaUser,route:"/uadate-admin-profile"},
 ]: [
    { name: 'Dashboard', logo: MdDashboard, route:"/dashboard/user" },
    { name: 'Purchase Plan', logo: FiShoppingCart, route: '/user-purchase-plans' },
    { name: 'View Plans', logo: FiLayers, route: '/user-purchased-plans' },
    { name: 'Purchase Course', logo: FaBook, route: '/user-purchase-courses' },
    { name: 'View Course', logo: FaBook, route: '/user-purchased-courses' },
    { name: 'Profile', logo: FaUser, route: '/user-update' },
  ];

 const isActive = (path:any) => location.pathname === path;
  return (
 <>
 <div className="container-fluid p-0">
    <div className='row p-0'>
         <div className="col-sm-12 p-0">
            <div className="d-flex justify-content-between align-items-center px-4">
              
                <button className="btn border text-light" onClick={()=> setOpen(!open?true:false)}><span className="pb-3"><VscThreeBars /></span></button>
                </div>
            <ul className='p-0 m-0 mt-2'style={{listStyle:"none"}}>
                {
                sideBarLink.map((ele:any,ind:any)=>{
                    const IconComponent = ele.logo;
                    return(
                        <>
                          <li className="text-center side-link d-flex justify-content-start align-items-center px-3" key={ind}>
                    <Link to={ele.route} className={open?
                    isActive(ele.route) ? "active btn d-flex justify-content-start align-items-center  w-100" : 
                    "btn d-flex justify-content-start align-items-center  w-100":
                        'btn d-flex justify-content-center align-items-center px-4'} > 
                        <IconComponent/>{open?<span className="ms-2">{ele.name}</span>:<></>}
                    </Link>
                </li>
                        </>
                    )
                })
                   
              }
               <li className="text-center side-link d-flex justify-content-start align-items-center px-3">
                    <a href="" className={open?
                   
                    "btn d-flex justify-content-start align-items-center  w-100":
                        'btn d-flex justify-content-center align-items-center px-4'} onClick={()=>localStorage.removeItem("token")}> 
                        <MdOutlineLogout/>{open?<span className="ms-2">Logout</span>:<></>}
                    </a>
                </li>
            </ul>
         </div>
    </div>
 </div>
 </>
  );
}

export default Sidebar;

