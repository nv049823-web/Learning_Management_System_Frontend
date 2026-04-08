import axios from "axios"

export const BASE_URL = "http://localhost:9000";
const getAuthHeaders = (ContentType:string="application/json") => {
  const token = JSON.parse(localStorage.getItem("token")||"null");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": ContentType
  };
};
 export const userRegisterFetchUrl= async (data:any)=>{
   const res = await axios.post(`${BASE_URL}/api/resiter`,data)
   return res.data
}
 export const adminRegisterFetchUrl= async (data:any)=>{
   const res = await axios.post(`${BASE_URL}/api/admin-resiter`,data)
   return res.data
}
 export const userLoginFetchUrl= async (data:any)=>{
   const res = await axios.post(`${BASE_URL}/api/login`,data)
   return res.data
}
 export const adminLoginFetchUrl= async (data:any)=>{
   const res = await axios.post(`${BASE_URL}/api/admin-login`,data)
   return res.data
}

//master plans
 export const masterPlanCreateFetchUrl= async (data:any)=>{
   const res = await axios.post(`${BASE_URL}/api/create-master-plan`,data,{headers:getAuthHeaders()})
   return res.data
}
 export const masterPlanFetchUrl= async ()=>{
   const res = await axios.get(`${BASE_URL}/api/get-master-plan`)
   return res.data
}
 export const masterPlanDeleteUrl= async (id:any)=>{
   const res = await axios.delete(`${BASE_URL}/api/delete-master-plan/${id}`,{headers:getAuthHeaders()})
   return res.data
}

//MAster Coures
export const masterCourseCreateUrl= async (data:any)=>{
  const res = await axios.post(`${BASE_URL}/api/create-master-course`,data,{headers:getAuthHeaders()})
  return res.data
}
export const masterCourseUrl= async ()=>{
  const res = await axios.get(`${BASE_URL}/api/get-master-course`)
  return res.data
}
export const masterCourseDeleteUrl= async (id:any)=>{
  const res = await axios.delete(`${BASE_URL}/api/delete-master-course/${id}`,{headers:getAuthHeaders()})
  return res.data
}
export const masterCourseUpdateUrl= async (id:any)=>{
  const res = await axios.put(`${BASE_URL}/api/update-master-course/${id}`,{headers:getAuthHeaders()})
  return res.data
}
export const allUserurl= async ()=>{
  const res = await axios.get(`${BASE_URL}/api/all-users`,{headers:getAuthHeaders()})
  return res.data
}

export const deleteUserurl= async (id:any)=>{
  const res = await axios.delete(`${BASE_URL}/api/delete-user/${id}`,{headers:getAuthHeaders()})
  return res.data 
}


export const getDashboardData= async ()=>{
  const res = await axios.get(`${BASE_URL}/api/get-dashboard`,{headers:getAuthHeaders()})
  return res.data
}


// admin 

export const updateAdminProfile = async(data:any)=>{
  try{
    const res = await axios.put(`${BASE_URL}/api/update-admin`,data,{headers:getAuthHeaders("multipart/form-data")});
    return res.data;
  }catch(err){
    console.log((err as Error)?.message,"Update admin fetching error")
  }
}
export const getAdminProfile = async()=>{
   try{
    const res = await axios.get(`${BASE_URL}/api/get-admin-profile`,{headers:getAuthHeaders()});
    return res.data;
   }catch(error){
    console.log((error as Error)?.message)
   }
}
// USer 

export const updateUserProfile = async(data:any)=>{
  try{
    const res = await axios.put(`${BASE_URL}/api/update-user`,data,{headers:getAuthHeaders("multipart/form-data")});
    console.log(res.data)
    return res.data;
  }catch(err){
    console.log((err as Error)?.message,"Update User fetching error")
  }
}
export const getUserProfileData= async ()=>{
  const res = await axios.get(`${BASE_URL}/api/user-profile`,{headers:getAuthHeaders()})
  return res?.data
}

export const getUserProfileDetails= async (id:any)=>{
  const res = await axios.get(`${BASE_URL}/api/user-details/${id}`,{headers:getAuthHeaders()})
  return res?.data
}
export const getUserPurchesdPlans= async ()=>{
  const res = await axios.get(`${BASE_URL}/api/user-purchased-plans`,{headers:getAuthHeaders()})
  return res?.data
}
export const getUserPurchesdCourse= async ()=>{
  const res = await axios.get(`${BASE_URL}/api/user-purchased-courses`,{headers:getAuthHeaders()})
  return res?.data
}
export const getOTPAdmin= async (data:any)=>{
  const res = await axios.post(`${BASE_URL}/api/admin-send-otp`,data)
  return res?.data
}

export const getOTPUser= async (data:any)=>{
  const res = await axios.post(`${BASE_URL}/api/user-send-otp`,data)
  return res?.data
}
export const verifyOTPAdminURL= async (data:any)=>{
  const res = await axios.post(`${BASE_URL}/api/admin-verify-otp`,data)
  return res?.data
}
export const verifyOTPUserURL= async (data:any)=>{
  const res = await axios.post(`${BASE_URL}/api/user-verify-otp`,data)
  return res?.data
}
export const userSeachUrl= async (data:any)=>{
  const res = await axios.get(`${BASE_URL}/api/user-search?q=${data}`,{headers:getAuthHeaders()})
  return res?.data
}
export const adminSeachUrl= async (data:any)=>{
  const res = await axios.get(`${BASE_URL}/api/admin-search?q=${data}`,{headers:getAuthHeaders()})
  return res?.data

}
