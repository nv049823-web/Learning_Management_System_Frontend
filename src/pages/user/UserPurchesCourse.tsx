import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { masterCourseUrl } from "../../services/apiFetch";
import CourseCardPremium from "../../component/common/CourseCardPremium";

const UserPurchesCourse = () => {
  const [masterCourse,setMasterCourse]=useState([]);
  const [loading,setLoading]=useState(false);

  const fetchMasterCourse = async ()=>{
    setLoading(true)
    const res = await masterCourseUrl()
    setLoading(false)
    setMasterCourse(res.result)
  }
  useEffect(()=>{
    fetchMasterCourse()
  },[])
  return (
    <>
      <Layout>
        <div className="container-fluid min-vh-100" style={{ backgroundColor: '#121212' }}>
            <div className="row">
              <h1 className="text-center text-light mb-3 mt-2"><span className="text-warning">Purchase</span> Courses</h1>
              {loading?<p className="text-light text-center mt-5">Course Loading</p>:masterCourse.map((course,ind)=><>
              <div className="col-sm-4" key={ind}>
                <CourseCardPremium course={course}/>
              </div>
              </>)}
            </div>
        </div>
      </Layout>
    </>
  );
}

export default UserPurchesCourse;
