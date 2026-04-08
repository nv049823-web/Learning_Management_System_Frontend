import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import * as yup from "yup"
import {   getOTPAdmin } from '../../services/apiFetch';
import {  swalFire } from '../../utils';
import {  useNavigate } from 'react-router-dom';

const AdminForgetPassword = () => {
  const navigate = useNavigate()
const schema = yup.object().shape({
    email:yup.string().required("Email is Required").email().max(30),
})
const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const onSubmit =async (data:any)=>{
        try{
          const res= await getOTPAdmin(data);
        if(res?.success){
           swalFire(res,"Get OTP",res?.message,"success")
           reset()
           navigate(`/admin-forget-password`)
        }else{
           swalFire(res,"Get OTP",res?.message,"error")

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
                    <h1 className='text-light'>To get OTP</h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className='form-color'>Email address*</label>
                        <div className='position-relative mb-1'>
                            <input type="email"  className='form-control  form-input' placeholder='Email'
                             {...register("email")}/>
                            <span className='position-absolute form-color from-icon'><MdEmail /></span>
                        {errors?.email?.message??<p className='text-danger'>{errors?.email?.message}</p>}
                        </div>
                        <button className='btn form-control bg-primary text-light'>Get OTP</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
        
    </>
  );
}

export default AdminForgetPassword;
