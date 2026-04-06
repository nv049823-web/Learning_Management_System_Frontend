import { useEffect, useState } from "react";
import { getUserPurchesdCourse } from "../../services/apiFetch";
import Layout from "../../layout/Layout";
import CourseCardPremium from "../../component/common/CourseCardPremium";

const UserPurchasedCourses = () => {
    const [coursesData,setCoursesData]=useState([])
    const [loading,setLoading] = useState(true);
    const getCourses = async()=>{
        setLoading(true)
        const res = await getUserPurchesdCourse()
        setCoursesData(res?.result)
        setLoading(false)
    }
    useEffect(()=>{
        getCourses()
    },[])
    if(!coursesData.length)return  <Layout><p className="min-vh-100 text-center text-danger">No Purchased Course Avilable</p></Layout>
  return (
    <>
    <Layout>
      <div className="container-fluid min-vh-100" style={{ backgroundColor: '#121212' }}>
        <div className="row h-100">
            <h1 className="text-light py-4">Purchased Plans</h1>
            {loading?<p className="text-center text-light mt-5">Plans Loading</p>:coursesData.map((course:any)=><>
                <div className="col-sm-3">
                        <CourseCardPremium course={course}/>
                        </div>
              </>)}
            
        </div>
      </div>
      </Layout>
    </>
  );
}

export default UserPurchasedCourses;
