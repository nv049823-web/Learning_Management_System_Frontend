import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fliud bg-dark mt-5">
            <div className="container py-5">
            <div className="row h-100">
                <div className="col-sm-3">
                    <div>
                        <h1 className="text-light"><span className='text-warning w-100'>E</span>duport</h1>
                        <p className="text-secondary w-100">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
                    </div>
                </div>
                <div className="col-sm-2">
                    <h4 className="text-light mt-3 fw-bold">Company</h4>
                    <ul className="m-0 p-0 ps-3 mt-5" style={{listStyle:"none"}}>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-2">
                <h4 className="text-light mt-3 fw-bold">Community</h4>
                    <ul className="m-0 p-0 ps-3 mt-5" style={{listStyle:"none"}}>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-2">
                <h4 className="text-light mt-3 fw-bold">Teaching</h4>
                    <ul className="m-0 p-0 ps-3 mt-5" style={{listStyle:"none"}}>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-3">
                <h4 className="text-light mt-3 fw-bold">Contact</h4>
                
                </div>
             </div>
            </div>
      </div>

    </>
  );
}

export default Footer;
