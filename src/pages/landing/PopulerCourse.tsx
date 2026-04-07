import { useEffect, useState } from "react";
import { masterCourseUrl } from "../../services/apiFetch";
import CourseCardPremium from "../../component/common/CourseCardPremium";

const PopulerCourse = () => {
  const [masterCourse, setMasterCourse] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeType, setActiveType] = useState<string>("All");

  const fetchMasterCourse = async () => {
    try {
      setLoading(true);
      const res = await masterCourseUrl();
      setMasterCourse(res?.result || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMasterCourse();
  }, []);

  const courseTypes = ["All", ...new Set(masterCourse.map((c) => c.type))];

  const filteredCourses =
    activeType === "All"
      ? masterCourse
      : masterCourse.filter((c) => c.type === activeType);

  return (
    <div className="container py-5">
      <div className="row px-1">

        <div className="col-12 text-center">
          <h1 className="text-light">Most Popular Courses</h1>
          <p className="text-secondary">
            Choose from hundreds of courses
          </p>
        </div>

<div className="col-sm-12 d-flex justify-content-evenly align-items-center flex-wrap rounded mt-5 p-4 gap-2" style={{background:"rgba(4, 107, 191, 0.37)"}}>
          {courseTypes.map((type, index) => (
            <button
              key={index}
              className={`btn ${
                activeType === type ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setActiveType(type)}
              style={{width:"100px"}}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="col-12 mt-4">
          <div className="row g-3 justify-content-strat">

            {loading ? (
              <p className="text-light text-center">Loading...</p>
            ) : filteredCourses.length === 0 ? (
              <p className="text-danger text-center">No Courses Found</p>
            ) : (
              filteredCourses.map((course, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-xl-3"
                  key={index}
                >
                  <CourseCardPremium course={course} />
                </div>
              ))
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default PopulerCourse;