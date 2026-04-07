import { useEffect, useState } from "react";
import { masterCourseUrl } from "../../services/apiFetch";
import CourseCardPremium from "../../component/common/CourseCardPremium";

const TrendingCourse = () => {
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
     <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-sm-12">
                <h1 className="w-100 text-center text-light">Our Trending Courses</h1>
                <p className="w-100 text-center text-secondary">Check out most 🔥 courses in the market</p>
            <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="false"
  data-bs-interval="10000"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div className="row g-3">
     {loading?<p className="text-light text-center mt-5">Course Loading</p>:masterCourse.map((course,ind)=><>
              <div className="clo-12 col-sm-6 col-md-4" key={ind}>
                <CourseCardPremium course={course}/>
              </div>
              </>)}
  
    <div className="carousel-item">
    <div className="row">
     
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
     </div>
    </div>
   </div>
  </div>
</div>
    </>
  );
}

export default TrendingCourse;
