import { MdOutlineComputer } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CounterSection = () => {
  return (
    <>
      <div className="container py-5 my-3" style={{minHeight:'250px'}}>
        <div className="row h-100 g-3 position-relative">
            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                <div className="container-fluid d-flex justify-content-start align-items-center flex-wrap rounded p-1" style={{background:" rgba(201, 159, 6, 0.37)",color:"rgb(222, 175, 5)"}}>
                      <div className="w-50"><span className="h-100 w-100 d-inline-block fs-1 fw-bold p-2" ><MdOutlineComputer className="h-100 w-100"/></span></div>
                      <div className="w-50">
                        <h4 className="w-100 m-0 text-light">10K</h4>
                        <p className="w-100 m-0 text-light">Online Course</p>
                      </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                <div className="container-fluid d-flex justify-content-start align-items-center flex-wrap rounded p-1" style={{background:" rgba(4, 107, 191, 0.37)",color:"rgb(4, 107, 191)"}}>
                      <div className="w-50"><span className="h-100 w-100 d-inline-block fs-1 fw-bold p-2" ><FaUserTie className="h-100 w-100"/></span></div>
                      <div className="w-50">
                        <h4 className="w-100 m-0 text-light">10K</h4>
                        <p className="w-100 m-0 text-light">Online Course</p>
                      </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                <div className="container-fluid d-flex justify-content-start align-items-center flex-wrap rounded p-1" style={{background:" rgba(191, 4, 7, 0.37)",color:"rgb(191, 4, 7)"}}>
                      <div className="w-50"><span className="h-100 w-100 d-inline-block fs-1 fw-bold p-2" ><FaUserGraduate className="h-100 w-100"/></span></div>
                      <div className="w-50">
                        <h4 className="w-100 m-0 text-light">10K</h4>
                        <p className="w-100 m-0 text-light">Online Course</p>
                      </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                <div className="container-fluid d-flex justify-content-start align-items-center flex-wrap rounded p-1" style={{background:" rgba(4, 172, 191, 0.37)",color:"rgb(4, 172, 191)",maxHeight:"200px"}}>
                      <div className="w-50"><span className="h-100 w-100 d-inline-block fs-1 fw-bold p-2" ><RiVerifiedBadgeFill className="h-100 w-100"/></span></div>
                      <div className="w-50">
                        <h4 className="w-100 m-0 text-light">10K</h4>
                        <p className="w-100 m-0 text-light">Online Course</p>
                      </div>
                </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default CounterSection;
