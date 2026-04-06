import withoutAuth from "../../HOC/withoutAuth";
import AdminRegisterForm from "./AdminRegisterForm";

const AdminRegister = () => {
  
  return (
    <>
      <div className="container-fluid"  style={{height:"550px"}}>
        <div className="row" style={{height:"100%"}}>
            <div className="col-sm-6" style={{background:"rgba(6, 107, 201, 0.31)"}}>
                <div className='container position-relative  d-flex justify-content-center align-items-center flex-wrap ' style={{height:"100%",width:"80%"}}>
                    <img src="registrationpng.jpg" alt="" className='img-fliud mt-5' style={{height:"90%",width:"100%"}}/>
                    <div className='container position-absolute  d-flex justify-content-between align-items-center flex-wrap flex-column ' style={{height:"100%",width:"100%"}}>
                       <div> <h1 className='text-light text-center mb-2'>Welcome to our largest community</h1>
                        <p  className='text-light text-center mb-2'>Let's learn something new today!</p></div>
                        <p className='text-light text-center mb-2'>4k+ Students joined us, now it's your turn.</p>
                    </div>
                </div>  
            </div>
            <div className="col-sm-6">
                <div className="container mx-auto my-5" style={{width:"60%"}}>
                    <h1 className='text-light'>Regisration into Eduport!</h1>
                   <AdminRegisterForm/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default withoutAuth(AdminRegister);
