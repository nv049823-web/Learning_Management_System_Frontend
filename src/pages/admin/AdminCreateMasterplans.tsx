import Layout from "../../layout/Layout";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { swalFire } from "../../utils";
import { masterPlanCreateFetchUrl } from "../../services/apiFetch";
import { useNavigate } from "react-router-dom";
const AdminCreateMasterplans = () => {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        name:yup.string().min(2).required("Name is Required").max(255),
        desc:yup.string().max(300),
        credit:yup.number().required("Credit is Required"),
        price:yup.number().required(),
        offer:yup.number(),
        duration:yup.number().required(),
        is_rec:yup.string().required().max(255),
        status:yup.string().required().max(255)
    })
    const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})
        const onSubmit =async (data:any)=>{
            try{
                const res = await masterPlanCreateFetchUrl(data)
            if(res?.success){
               swalFire(res,"Master Planes",res?.message,"success")
               reset()
               navigate("/admin-master-plan")
            }else{
               swalFire(res,"Master Planes",res?.message,"error")
            }
          }catch(err){
               swalFire("Master Planes","internal Server Error","error")
                
          }
        }
  return (
    <>
    <Layout>
      <div className="conatiner-fluid min-vh-100" style={{backgroundColor:"#121212"}}>
        <div className="row h-100">
              <div className="col-sm-6 mx-auto my-5">
                 <div className="container w-100  rounded  p-3 bg-dark">
                       <h1 className="text-warning">Create Master Plans</h1>
                          <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
                                <div className="mb-2">
                                    <label htmlFor="name" className="text-light">Name*</label>
                                    <input type="text" placeholder="Plan Name" className="form-control"{...register("name")}/>
                                    {errors?.name?.message && <small className="text-danger mt-1">{errors?.name?.message}</small>}
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="des" className="text-light">Description*</label>
                                    <input type="text" placeholder="Plan Description" className="form-control"{...register("desc")}/>
                                    {errors?.desc?.message && <small className="text-danger mt-1">{errors?.desc?.message}</small>}
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                    <label htmlFor="credit" className="text-light">Credit*</label>
                                    <input type="number" placeholder="Plan Credit" className="form-control" {...register("credit")}/>
                                    {errors?.credit?.message && <small className="text-danger mt-1">{errors?.credit?.message}</small>}
                                    </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="price" className="text-light">Price*</label>
                                    <input type="number" placeholder="Plan Price" className="form-control"{...register("price")}/>
                                    {errors?.price?.message && <small className="text-danger mt-1">{errors?.price?.message}</small>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                    <label htmlFor="offer" className="text-light">Offer</label>
                                    <input type="number" placeholder="Plan Offer" className="form-control" {...register("offer")}/>
                                    {errors?.offer?.message && <small className="text-danger mt-1">{errors?.offer?.message}</small>}
                                    </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="duration" className="text-light">Duration*</label>
                                    <input type="number" placeholder="Plan Duration (ex.31) day" className="form-control" {...register("duration")}/>
                                    {errors?.duration?.message && <small className="text-danger mt-1">{errors?.duration?.message}</small>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                    <label htmlFor="is-rec" className="text-light">Recommanded</label>
                                    <select id=""className="form-control" {...register("is_rec")}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="status" className="text-light">Status*</label>
                                    <select id=""className="form-control" {...register("status")}>
                                        <option value="Active">Active</option>
                                        <option value="Deactive">Deactive</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" value="Submit" className="form-control btn btn-warning text-dark"/>
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

export default AdminCreateMasterplans;
