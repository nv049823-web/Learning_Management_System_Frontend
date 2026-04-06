import Layout from "../../layout/Layout";
import { useEffect, useState } from "react";
import {  masterCourseDeleteUrl, masterCourseUrl } from "../../services/apiFetch";
import Swal from "sweetalert2";
import CourseCardAdmin from "../../component/admin/CourseCardAdmin";

const AdminMasterCourses = () => {
    const [courseData,setCourseData] = useState([]);
    const fetchCourse = async ()=>{
        const res = await masterCourseUrl();
        setCourseData(res?.result)
    }
    const deleteCourse = async (id:any)=>{
                Swal.fire({
                     title: "Are you sure?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!"
                   }).then(async(result) => {
                     if (result.isConfirmed) {
                       const res = await masterCourseDeleteUrl(id)
                       Swal.fire({
                         title: "Deleted!",
                         text: res?.message,
                         icon: "success"
                       });
                       fetchCourse()
               
                     }
                   });
      
    }
    useEffect(()=>{
        fetchCourse();
    },[])
  return (
    <>
     <Layout>
     <div className="container-fluid min-vh-100" style={{backgroundColor:"#121212"}}>
      <h1 className=" text-light text-center py-4">Master Courses</h1>
        <div className="row h-100">
           {courseData.map((ele:any,ind:any)=>{
            return(
                <>
                    <div className="col-sm-4" key={ind}>
                   <CourseCardAdmin course={ele}  action = {deleteCourse}/>
            </div>
                </>
            )
           })}
        </div>
      </div>
     </Layout>
    </>
  );
}

export default AdminMasterCourses;
