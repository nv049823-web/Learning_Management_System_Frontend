import { useState } from 'react';
import Sidebar from './Sidebar';
import  withAuth from '../HOC/withAuth';
import Footer from '../pages/landing/Footer';
import Navbar from '../pages/landing/Navbar';
// import ".././css/tailwind.css"

const Layout = ({children}: {children: any}) => {
    const [open,setOpen]=useState(true)
  
  return (
    <>
    <Navbar/>
      <div className="container-fluid h-auto">
        <div className="row" style={{minHeight:"400px"}}>
            <div className={open?"col-sm-2 p-0":"col-sm-1 p-0"} style={{transition:"all 0.5s"}}>
                <Sidebar open={open} setOpen={setOpen}/>
            </div>
            <div className={open?"col-sm-10 bg-black":"col-sm-11 bg-black"} style={{transition:"all 0.5s"}}>
            <div className="container-fliud p-0 m-0">{children}</div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default withAuth(Layout);
