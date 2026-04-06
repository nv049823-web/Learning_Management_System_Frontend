import { MdVerified } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
const HerSection = () => {
  return (
    <>
      <div className="container bg-transparent" id='hero-section'>
        <div className="row  bg-transparent " style={{height:"100%"}}>
            <div className="col-sm-6 bg-transparent">
                <div className='bg-transparent d-flex justify-content-start align-items-center flex-wrap mt-5'>
                    <h1 className='text-light mb-4 fw-bold' style={{width:"100%",fontSize:"50px",marginTop:"120px"}}>Limitless learning at your fingertips</h1>
                <p className='mb-4 fs-5' style={{width:"100%",color:"rgb(197, 198, 204)"}}>Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>
                <div className=' bg-transparent d-flex justify-content-start align-items-center'style={{width:"100%"}}>
                    <p style={{color:"rgb(197, 198, 204)"}} className="me-2"> <span className="text-light"><MdVerified />
</span>Learn with experts</p>
                    <p style={{color:"rgb(197, 198, 204)"}} className="me-2"><span className="text-light"><MdVerified />
</span>Learn with experts</p>
                    <p style={{color:"rgb(197, 198, 204)"}} className="me-2"><span className="text-light"><MdVerified />
</span>Learn with experts</p>
                    </div>
                    <a href="" className="btn" style={{background:"rgba(214, 41, 61, 0.19)",color:"rgb(214, 41, 62)"}}>Get Started</a>
                    <button className="btn text-light fw-bold d-flex justify-content-center align-items-center">
                        <div className="container circle  d-flex justify-content-center align-items-center p-0 me-1" style={{backgroundColor:"rgba(6, 107, 201, 0.31)",borderRadius:"50%",height:"60px",width:"60px"}}>
                            <span className="d-flex justify-content-center align-items-center" style={{backgroundColor:"rgba(6, 107, 201, 0.31)",borderRadius:"50%",height:"45px",width:"45px"}}><FaPlay /></span>
                        </div>
                        Watch video</button>
                    </div>
            </div>
            <div className="col-sm-6  bg-transparent position-relative">
                <img src="https://themes.stackbros.in/eduport_ng/assets/images/element/07.png" alt="" className='img-fluid'/>
                <div style={{height:"70px",width:"70px" ,borderRadius:"8px",boxSizing:"border-box", top:"25%" ,left
                    :"-5%"
                }} className='position-absolute p-2 bg-light d-flex justify-content-center align-items-center'>
                         <img src="	https://themes.stackbros.in/eduport_ng/assets/images/client/science.svg" alt="" className='img-fluid' />
                </div>
                <div style={{height:"60px",width:"60px" ,borderRadius:"8px",boxSizing:"border-box" ,top:"10%" ,left
                    :"70%"}} className='position-absolute p-2 bg-light d-flex justify-content-center align-items-center'>
                         <img src="https://themes.stackbros.in/eduport_ng/assets/images/client/angular.svg" alt="" className='img-fluid' />
                </div>
                <div style={{height:"55px",width:"40px" ,borderRadius:"8px",boxSizing:"border-box",top:"75%" ,left
                    :"85%"}} className='position-absolute p-2 bg-light d-flex justify-content-center align-items-center'>
                         <img src="https://themes.stackbros.in/eduport_ng/assets/images/client/figma.svg" alt="" className='img-fluid' />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}   

export default HerSection;
