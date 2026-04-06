import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import * as yup from "yup"
import { adminRegisterFetchUrl } from '../../services/apiFetch';
import { useNavigate } from 'react-router-dom';
import { localStore, swalFire } from '../../utils';

const AdminRegisterForm = () => {
    const navigate = useNavigate()
const schema = yup.object().shape({
    name:yup.string().min(2).max(20).required("Name is Required"),
    email:yup.string().required("Name is Required").email().max(30),
    mobile:yup.string().required("Mobile number is Required").matches(/^[0-9]{10}$/,"Must be 10 Digit"),
    password:yup.string().min(2).max(20).required("Password is Required").matches(/^(?=.*[a-zA-Z])(?=.*\d)/,"Password should be contain number and letters"),

})
const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const onSubmit =async (data:any)=>{
        try{
          const res= await adminRegisterFetchUrl(data);
        if(res?.success){
           swalFire(res,"Registeration",res?.message,"success")
           reset()
           localStore("admin")
           navigate(`/dashboard/admin`)
        }else{
           swalFire(res,"Registeration",res?.message,"error")
        }
      }catch(err){
           swalFire("Registeration","internal Server Error","error")
            
      }
    }
  return (
    <>
         <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className='form-color'>Full Name*</label>
                        <div className='position-relative mb-1'>
                            <input type="text"  className='form-control  form-input' placeholder='Name'
                             {...register("name")}/>

                            <span className='position-absolute form-color from-icon'><MdEmail /></span>
                        {errors?.name?.message??<p  style={{color:"rgb(214, 41, 62)"}}>{errors?.name?.message}</p>}
                        </div>

                        <label htmlFor="" className='form-color'>Email address*</label>
                        <div className='position-relative mb-1'>
                            <input type="email"  className='form-control  form-input' placeholder='Email'
                             {...register("email")}/>
                            <span className='position-absolute form-color from-icon'><MdEmail /></span>
                        {errors?.email?.message??<p style={{color:"rgb(214, 41, 62)"}}>{errors?.email?.message}</p>}
                        </div>

                        <label htmlFor="" className='form-color'>Mobile Number*</label>
                        <div className='position-relative mb-1'>
                            <input type="text"  className='form-control  form-input' placeholder='Phone'
                             {...register("mobile")}/>
                            <span className='position-absolute form-color from-icon'><MdEmail /></span>
                        {errors?.mobile?.message??<p style={{color:"rgb(214, 41, 62)"}}>{errors?.mobile?.message}</p>}
                        </div>

                        <label htmlFor="" className='form-color form-color'>Password*</label>
                        <div className='position-relative mb-1'>
                            <input type="password"  className='form-control form-input' placeholder='Password'
                            {...register("password")}/>
                            <span className='position-absolute from-icon'><FaLock /></span>
                        {errors?.password?.message??<p style={{color:"rgb(214, 41, 62)"}}>{errors?.password?.message}</p>}
                        </div>

                        <button className='btn form-control bg-primary text-light'>Login</button>
                    </form>
    </>
  );
}

export default AdminRegisterForm;
