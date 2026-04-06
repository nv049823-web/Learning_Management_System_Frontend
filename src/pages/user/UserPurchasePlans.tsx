import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import {  masterPlanFetchUrl } from "../../services/apiFetch";
import PlanCard from "../../component/common/PlanCard";


const UserPurchasePlans = () => {
  const [masterplans,setMasterplans]=useState([]);
  const [loading,setLoading]=useState(false);

  const fetchMasterplans = async ()=>{
    setLoading(true)
    const res = await masterPlanFetchUrl(
    )
    setLoading(false)
    setMasterplans(res.result)
  }
  useEffect(()=>{
    fetchMasterplans()
  },[])
  return (
    <>
      <Layout>
        <div className="container-fluid min-vh-100" style={{ backgroundColor: '#121212' }}>
            <div className="row h-100">
              <h1 className="text-center text-light mb-3 mt-2"><span className="text-warning">Purchase</span> Plans</h1>
              {loading?<p className="text-center text-light mt-5">Plans Loading</p>:masterplans.map((plans:any)=><>
                <div className="col-sm-3">
                        <PlanCard name={plans.name} price={plans.price} duration={plans.duration} features={plans.desc} color={"warning"} isPopular={plans.is_rec} id={0}/>
                        </div>
              </>)}
            </div>
        </div>
      </Layout>
    </>
  );
}
export default UserPurchasePlans;
