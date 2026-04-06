
import Layout from "../../layout/Layout";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { swalFire } from "../../utils";
import {  getUserProfileData, updateUserProfile } from "../../services/apiFetch";
import { useEffect, useState } from "react";

interface UserProfile {
    id?:number;
    name?: string;
    email?: string;
    mobile?: string;
    adress?: string;
    profile?:string
}


//Profile 

const FILE_SIZE = 60 * 1024 * 1024; // 60MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/webp"];


const UserUpdateProfile = () => {

    const [userProfile, setUserProfile] = useState<UserProfile>({});
    const getUser = async()=>{
        const result = await getUserProfileData();
        setUserProfile(result?.result)
    }
    useEffect(()=>{
    getUser()
  },[])
    const schema = yup.object().shape({
        name:yup.string().min(2).max(255),
        email:yup.string().email(),
        mobile:yup.string().matches(/^[0-9]{10}$/, "Mobile must be a 10-digit number"),
        adress:yup.string().max(255),
        profile: yup
        .mixed()
        .test("fileSize", "Max size is 2MB", (value: any) => {
          return value && value[0] && value[0].size <= FILE_SIZE;
        })
        .test("fileFormat", "Only images allowed", (value: any) => {
          return (
            value &&
            value[0] &&
            SUPPORTED_FORMATS.includes(value[0].type)
          );
        }),
    })
    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
        const onSubmit =async (data:any)=>{
            try{
                const formData = new FormData();
                 formData.append("name", data.name);
                 formData.append("email", data.email);
                 formData.append("mobile", data.mobile);
                 formData.append("adress", data.adress);
                 formData.append("profile",  data.profile[0]);
                const res = await updateUserProfile(formData)
            if(res?.success){
               swalFire(res,"Update Profile",res?.message,"success")
               getUser()
              }else{
                swalFire(res,"Update Profile",res?.message,"error")
            }
          }catch(err){
               swalFire({},"Update Profile",(err as Error)?.message,"error")
          }
        }
  return ( 
    <>
    <Layout>
      <div className="conatiner-fluid min-vh-100" style={{backgroundColor:"#121212"}}>
        <div className="row h-100">
              <div className="col-sm-6 mx-auto my-5">
                 <div className="container w-100  rounded shadow  p-3 bg-dark ">
                       <p className="text-light">Edit Profile.</p>
                       <div className="row mb-2">
                        <div className="col-sm-2">
                            <div className="border rounded-circle d-flex justify-content-center flex-wrap align-content-center" 
                             style={{height:"80px",width:"80px",backgroundColor:"#d308dec6"}}>
                                    {userProfile?.profile===null?
                                     <h2 className="text-light mt-1 ">NV</h2>:
                                    <img src={`http://localhost:9000/uploads/user_profile/${userProfile.profile}`} alt="Profile" className="img-fluid rounded-circle max-h-100 max-w-100"/>
                                    }
                            </div>
                        </div>
                        <div className="col-sm-10 d-flex justify-content-center flex-wrap align-content-center">
                            <h3 className="text-light m-0 w-100">{userProfile?.name}</h3>
                            <small className="text-secondary w-100">ID:{userProfile?.id}</small>
                        </div>
                       </div>
                        <hr className="text-secondary"/>
                          <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
                                <div className="mb-2">
                                    <label  className="text-light">Name*</label>
                                    <input type="text" placeholder="Name" className="form-control"{...register("name")} defaultValue={userProfile?.name}/>
                                    {errors?.name?.message && <small className="text-danger mt-1">{errors?.name?.message}</small>}
                                </div>
                                <div className="mb-2">
                                    <label  className="text-light">Email*</label>
                                    <input type="email" placeholder="Email" className="form-control"{...register("email")} defaultValue={userProfile?.email}/>
                                    {errors?.email?.message && <small className="text-danger mt-1">{errors?.email?.message}</small>}
                                </div>
                                <div className="mb-2">
                                    <label  className="text-light">Address*</label>
                                    <input type="text" placeholder="Address" className="form-control"{...register("adress")} defaultValue={userProfile?.adress}/>
                                    {errors?.email?.message && <small className="text-danger mt-1">{errors?.email?.message}</small>}
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                    <label  className="text-light">Mobile*</label>
                                    <input type="text" placeholder="Mobile" className="form-control" {...register("mobile")} defaultValue={userProfile?.mobile}/>
                                    {errors?.mobile?.message && <small className="text-danger mt-1">{errors?.mobile?.message}</small>}
                                    </div>
                                    <div className="col-sm-6">
                                    <label className="text-light">Profile*</label>
                                    <input type="file" placeholder="Profile" className="form-control"{...register("profile")}/>
                                    {errors?.profile?.message && <small className="text-danger mt-1">{errors?.profile?.message}</small>}
                                    </div>
                                </div>
                                <div className="">
                                    <input type="submit" value="Save Change" className="form-control btn btn-warning text-dark"/>
                                </div>
                          </form>
                 </div>
              </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
export default UserUpdateProfile;
