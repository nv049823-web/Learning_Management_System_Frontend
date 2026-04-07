import { FaRegClock, FaLayerGroup } from "react-icons/fa6";

const CourseCardPremium = ({ course }: { course: any; }) => {
  return (
    <div className="card bg-dark border-0 shadow-lg rounded-4 overflow-hidden" style={{ width: "100%" }}>
      {/* Thumbnail Section with Overlay Badge */}
      <div className="position-relative">
        <img 
          src={`http://localhost:9000/uploads/thumbnail/${course.thumbnail}`} 
          className="card-img-top" 
          alt={course.title}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 end-0 m-2">
          <span className="badge bg-primary bg-opacity-75 backdrop-blur-sm rounded-pill px-3 py-2">
            {course.type || "Development"}
          </span>
        </div>
      </div>

      <div className="card-body bg-dark text-white p-3">
        {/* Level & Duration */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className="text-info d-flex align-items-center gap-1">
            <FaLayerGroup size={12} /> {course.level}
          </small>
          <small className="text-secondary d-flex align-items-center gap-1">
            <FaRegClock size={12} /> {course.duration || "12h 30m"}
          </small>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold mb-2 text-truncate">{course.title}</h5>
        
        {/* Instructor */}
        <div className="d-flex align-items-center gap-2 mb-3">
           <span className="text-secondary small">By {course.desc}</span>
        </div>

        {/* Rating & Stats */}
        <div className="d-flex align-items-center gap-1 mb-3">
          <div className="text-warning small">
            {"★".repeat(Math.floor(course.rating || 5))}
            <span className="text-secondary">({course.rating || "5.0"})</span>
          </div>
        </div>

        <hr className="border-secondary opacity-25" />

        {/* Price & Action */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <span className="h5 fw-bold text-success mb-0">₹{course.price || "Free"}</span>
            {course.oldPrice && (
              <small className="text-secondary text-decoration-line-through ms-2">₹{course.oldPrice}</small>
            )}
          </div>
          <button className="btn btn-danger btn-sm rounded-pill px-3 d-flex align-items-center gap-1" >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCardPremium;