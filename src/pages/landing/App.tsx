import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from '../../component/common/Login';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../../App.css"
import Register from '../../component/common/Register';
import AdminLogin from '../../component/common/AdminLogin';
import AdminRegister from '../../component/common/AdminRegister';
import LayoutChildren from '../../layout/LayoutChildren';
import AdminCreateMasterplans from '../admin/AdminCreateMasterplans';
import AdminCreateMasterCourse from '../admin/AdminCreateMasterCourse';
import AdminMasterplans from '../admin/AdminMasterplans';
import AdminMasterCourses from '../admin/AdminMasterCourses';
import AllUsers from '../admin/AllUsers';
import UserPurchasePlans from '../user/UserPurchasePlans';
import UserPurchesCourse from '../user/UserPurchesCourse';
import AdminUpdateProfile from '../admin/AdminUpdateProfile';
import UserUpdateProfile from '../user/UserUpdateProfile';
import UserDetails from '../../component/admin/userDetails';
import UserPurchasedPlans from '../user/UserPurchasedPlans';
import UserPurchasedCourses from '../user/UserPurchasedCourses';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<><Home/></>}/>
      <Route path='/login' element={<><Login/></>}/>
      <Route path='/register' element={<><Register/></>}/>
      <Route path='/admin-login' element={<><AdminLogin/></>}/>
      <Route path='/admin-register' element={<><AdminRegister/></>}/>

      {/* Admin routes */}
      <Route path='/admin-create-master-plan' element={<><AdminCreateMasterplans/></>}/>
      <Route path='/admin-master-plan' element={<><AdminMasterplans/></>}/>
      <Route path='/admin-create-master-course' element={<><AdminCreateMasterCourse/></>}/>
      <Route path='/admin-master-course' element={<><AdminMasterCourses/></>}/>
      <Route path='/all-user' element={<><AllUsers/></>}/>
      <Route path='/uadate-admin-profile' element={<><AdminUpdateProfile/></>}/>
      <Route path='/user-profile-details/:id' element={<><UserDetails/></>}/>

      
      {/* User routes */}
      <Route path='/dashboard/:id' element={<><LayoutChildren/></>}/> 
      <Route path='/user-purchase-courses' element={<><UserPurchesCourse/></>}/> 
      <Route path='/user-purchase-plans' element={<><UserPurchasePlans/></>}/> 
      <Route path='/user-update' element={<><UserUpdateProfile/></>}/> 
      <Route path='/user-purchased-plans' element={<><UserPurchasedPlans/></>}/> 
      <Route path='/user-purchased-courses' element={<><UserPurchasedCourses/></>}/> 
      
     </Routes>

     </BrowserRouter>
    </>
  );
}

export default App;
