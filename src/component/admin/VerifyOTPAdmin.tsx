import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { SiThreema } from 'react-icons/si';
import * as yup from "yup"
import { verifyOTPAdminURL } from '../../services/apiFetch';
import {  swalFire } from '../../utils';
import {  useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa6';

const VerifyOTPAdmin = () => {
  const navigate = useNavigate()
const schema = yup.object().shape({
    email:yup.string().required("Email is Required").email().max(30),
    otp:yup.string().required("OTP is Required").max(6),
    newPassword:yup.string().min(2).max(20).required("Password is Required").matches(/^(?=.*[a-zA-Z])(?=.*\d)/,"Password should be contain number and letters"),
})
const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const onSubmit =async (data:any)=>{
        try{
          const res= await verifyOTPAdminURL(data);
        if(res?.success){
           swalFire(res,"Reset Password",res?.message,"success")
           reset()
           navigate(`/admin-login`)
        }else{
           swalFire(res,"Reset Password",res?.message,"error")
           
        }
      }catch(err){
           console.log(err)
      }
    }
  return (
    <>
    
      <div className="container-fluid"  style={{height:"550px"}}>
        <div className="row" style={{height:"100%"}}>
            <div className="col-sm-6" style={{background:"rgba(6, 107, 201, 0.31)"}}>
                <div className='container position-relative  d-flex justify-content-center align-items-center flex-wrap ' style={{height:"100%",width:"80%"}}>
                    <img src="download.png" alt="" className='img-fliud mt-5' style={{height:"70%",width:"100%"}}/>
                    <div className='container position-absolute  d-flex justify-content-between align-items-center flex-wrap flex-column ' style={{height:"100%",width:"100%"}}>
                       <div> <h1 className='text-light text-center mb-2'>Welcome to our largest community</h1>
                        <p  className='text-light text-center mb-2'>Let's learn something new today!</p></div>
                        <p className='text-light text-center mb-2'>4k+ Students joined us, now it's your turn.</p>
                    </div>
                </div>  
            </div>
            <div className="col-sm-6">
                <div className="container mx-auto my-5" style={{width:"60%"}}>
                    <h1 className='text-light'>Reset Admin Password</h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className='form-color'>Email address*</label>
                        <div className='position-relative mb-1'>
                            <input type="email"  className='form-control  form-input' placeholder='Email'
                             {...register("email")}/>
                            <span className='position-absolute form-color from-icon'><MdEmail /></span>
                        {errors?.email?.message??<p className='text-danger'>{errors?.email?.message}</p>}
                        </div>
                        <label htmlFor="" className='form-color'>OTP*</label>
                        <div className='position-relative mb-1'>
                            <input type="text"  className='form-control  form-input' placeholder='Enter OTP'
                             {...register("otp")}/>
                            <span className='position-absolute form-color from-icon'><SiThreema /></span>
                        {errors?.otp?.message??<p className='text-danger'>{errors?.otp?.message}</p>}
                        </div>
                        <label htmlFor="" className='form-color'>New Password*</label>
                        <div className='position-relative mb-1'>
                            <input type="password"  className='form-control  form-input' placeholder='Enter new password'
                             {...register("newPassword")}/>
                            <span className='position-absolute form-color from-icon'><FaLock /></span>
                        {errors?.newPassword?.message??<p className='text-danger'>{errors?.newPassword?.message}</p>}
                        </div>
                       <div className="row">
                        <div className="col-sm-6"> <button className='btn form-control bg-primary text-light'
                        onClick={()=>navigate("/admin-get-otp")}>Resend OTP</button></div>
                        <div className="col-sm-6"> <button className='btn form-control bg-primary text-light'>Submit</button></div>
                       </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
        
    </>
  );
}

export default VerifyOTPAdmin;
