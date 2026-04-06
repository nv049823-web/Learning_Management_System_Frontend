import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { masterPlanDeleteUrl, masterPlanFetchUrl } from "../../services/apiFetch";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import PlanCard from "../../component/common/PlanCard";

const AdminMasterplans = () => {
  const [masterPlan,setMasterPlan] = useState([]);
  const getPlans = async ()=>{
    const res = await masterPlanFetchUrl();
    setMasterPlan(res.result)
  }
  useEffect(()=>{
    getPlans()
  },[])
  const deletePalnHandler = async(id:any)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await masterPlanDeleteUrl(id)
        Swal.fire({
          title: "Deleted!",
          text: res?.message,
          icon: "success"
        });
        getPlans()

      }
    });
  }
  return (
    <>
      <Layout>
        <div className="container-fluid min-vh-100" style={{backgroundColor:"#121212"}}>
            <div className="row h-100 g-2">
              <h1 className="text-center text-light">Master Plans</h1>
            {
                    masterPlan.map((ele:any,ind:any)=>{
                      return(
                        <>
                        <div className="col-sm-3">
                        <PlanCard name={ele.name} price={ele.price} duration={ele.duration} features={ele.desc} color={"warning"} isPopular={ele.is_rec} id={ele.id}/>
                        </div>
                        </>
                      )
                    })
                   }
                  
            </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminMasterplans;
