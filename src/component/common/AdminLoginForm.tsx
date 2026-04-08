import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import * as yup from "yup"
import { adminLoginFetchUrl } from '../../services/apiFetch';
import { localStore, localTokenStore, swalFire } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';

const AdminLoginFrom = () => {
  const navigate = useNavigate()
const schema = yup.object().shape({
    email:yup.string().required("Email is Required").email().max(30),
    password:yup.string().min(2).max(20).required("Password is Required").matches(/^(?=.*[a-zA-Z])(?=.*\d)/,"Password should be contain number and letters"),
})
const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const onSubmit =async (data:any)=>{
        try{
          const res= await adminLoginFetchUrl(data);
        if(res?.success){
           swalFire(res,"Login",res?.message,"success")
           reset()
           navigate(`/dashboard/admin`)
           localStore("admin")
           localTokenStore("token",res?.result?.token)
        }else{
           swalFire(res,"Login",res?.message,"error")

        }
      }catch(err){
           console.log(err)
      }
    }
  return (
    <>
         <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className='form-color'>Email address*</label>
                        <div className='position-relative mb-1'>
                            <input type="email"  className='form-control  form-input' placeholder='Email'
                             {...register("email")}/>
                            <span className='position-absolute form-color from-icon'><MdEmail /></span>
                        {errors?.email?.message??<p style={{color:"rgb(214, 41, 62)"}}>{errors?.email?.message}</p>}
                        </div>

                        <label htmlFor="" className='form-color form-color'>Password*</label>
                        <div className='position-relative mb-1'>
                            <input type="password"  className='form-control form-input' placeholder='Password'
                            {...register("password")}/>
                            <span className='position-absolute from-icon'><FaLock /></span>
                        {errors?.password?.message??<p style={{color:"rgb(214, 41, 62)"}}>{errors?.password?.message}</p>}
                          <Link to="/admin-get-otp">forget password</Link>
                        </div>

                        <button className='btn form-control bg-primary text-light'>Login</button>
                    </form>
    </>
  );
}

export default AdminLoginFrom;
