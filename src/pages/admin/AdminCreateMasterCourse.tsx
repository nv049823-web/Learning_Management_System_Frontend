import Layout from "../../layout/Layout";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { useNavigate } from 'react-router-dom';
import { swalFire } from "../../utils";
import { masterCourseCreateUrl } from "../../services/apiFetch";
const AdminCreateMasterCourse = () => {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        title:yup.string().min(2).max(255).required("Name is Required"),
        desc:yup.string().max(500),
        level:yup.string().required("Level is Required").max(255),
        rating:yup.number().required().max(5),
        price:yup.number().required(),
        offer:yup.number().required(),
        type:yup.string().min(2).max(300),
        duration:yup.number().required(),
        status:yup.string().required().max(255),
        thumbnail:yup.mixed().required("Thumbnail is required"),
        content:yup.mixed().required("Content is required"),
    })
    const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})
        const onSubmit =async (data:any)=>{
            try{
                const formData = new FormData();
                formData.append("title", data.title);
                formData.append("desc", data.desc);
                formData.append("level", data.level);
                formData.append("rating", data.rating);
                formData.append("price", data.price);
                formData.append("offer", data.offer);
                formData.append("type", data.type);
                formData.append("duration", data.duration);
                formData.append("status", data.status);
                formData.append("thumbnail", data.thumbnail[0]);
                formData.append("content", data.content[0]);
                const res = await masterCourseCreateUrl(formData)
                console.log(data)
            if(res?.success){
               swalFire(res,"Master Course",res?.message,"success")
               reset()
               navigate("/admin-master-course")
            }else{
               swalFire(res,"Master Course",res?.message,"error")
            }
          }catch(err){
               swalFire("Master Course","internal Server Error","error")
                
          }
        }
  return (
    <>
    <Layout>
      <div className="conatiner-fluid min-vh-100" style={{backgroundColor:"#121212"}}>
        <div className="row h-100">
              <div className="col-sm-6 mx-auto my-5">
                 <div className="container w-100  rounded shadow  p-3 bg-dark ">
                       <h1 className="text-warning">Create Master Course</h1>
                          <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
                                <div className="mb-2">
                                    <label htmlFor="name" className="text-light">Title*</label>
                                    <input type="text" placeholder="Course Title" className="form-control"{...register("title")}/>
                                    {errors?.title?.message && <small className="text-danger mt-1">{errors?.title?.message}</small>}
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="des" className="text-light">Description*</label>
                                    <input type="text" placeholder="Course Description" className="form-control"{...register("desc")}/>
                                    {errors?.desc?.message && <small className="text-danger mt-1">{errors?.desc?.message}</small>}
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                    <label htmlFor="Level" className="text-light">Course Level*</label>
                                    <input type="text" placeholder="Course Level (Ex.Begeiner)" className="form-control" {...register("level")}/>
                                    {errors?.level?.message && <small className="text-danger mt-1">{errors?.level?.message}</small>}
                                    </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="Rating" className="text-light">Rating*</label>
                                    <input type="number" placeholder="Course Rating" className="form-control"{...register("rating")}/>
                                    {errors?.rating?.message && <small className="text-danger mt-1">{errors?.rating?.message}</small>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                    <label htmlFor="Types" className="text-light">Course Types</label>
                                    <input type="text" placeholder="Course Types" className="form-control" {...register("type")}/>
                                    {errors?.type?.message && <small className="text-danger mt-1">{errors?.type?.message}</small>}
                                    </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="duration" className="text-light">Duration*</label>
                                    <input type="number" placeholder="Plan Duration (ex.31) day" className="form-control" {...register("duration")}/>
                                    {errors?.duration?.message && <small className="text-danger mt-1">{errors?.duration?.message}</small>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                      <div className="row">
                                        <div className="col-sm-6">
                                        <label htmlFor="price" className="text-light">Price*</label>
                                    <input type="number" placeholder="Price" className="form-control" {...register("price")}/>
                                    {errors?.price?.message && <small className="text-danger mt-1">{errors?.price?.message}</small>}
                                        </div>
                                        <div className="col-sm-6">
                                        <label htmlFor="offer" className="text-light">Offer*</label>
                                    <input type="number" placeholder="Offer (%)" className="form-control" {...register("offer")}/>
                                    {errors?.offer?.message && <small className="text-danger mt-1">{errors?.offer?.message}</small>}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="status" className="text-light">Status*</label>
                                    <select id=""className="form-control" {...register("status")}>
                                        <option value="Active">Active</option>
                                        <option value="Deactive">Deactive</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                    <label htmlFor="Content" className="text-light">Main Content*</label>
                                   <input type="file" {...register("content")} />
                                    {errors?.content?.message && <small className="text-danger mt-1">{errors?.content?.message}</small>}
                                    </div>
                                    <div className="col-sm-6">
                                   <label htmlFor="thunbnail" className="text-light">Thumbnail*</label>
                                   <input type="file" {...register("thumbnail")} />
                                    {errors?.thumbnail?.message && <small className="text-danger mt-1">{errors?.thumbnail?.message}</small>}
                                    </div>
                                </div>
                                <div className="">
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













export default AdminCreateMasterCourse;
