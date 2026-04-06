import { useEffect, useState } from "react";
import { getUserPurchesdPlans } from "../../services/apiFetch";
import PlanCard from "../../component/common/PlanCard";
import Layout from "../../layout/Layout";

const UserPurchasedPlans = () => {
    const [planData,setPlansData]=useState([])
    const [loading,setLoading] = useState(true);
    const getPlans = async()=>{
        setLoading(true)
        const res = await getUserPurchesdPlans()
        setPlansData(res?.result)
        setLoading(false)
    }
    useEffect(()=>{
        getPlans()
    },[])
  if(!planData.length)return  <Layout><p className="min-vh-100 text-center text-danger pt-5" style={{ backgroundColor: '#121212' }}>No Purchased Course Avilable</p></Layout>
    
  return (
    <>
    <Layout>
      <div className="container-fluid min-vh-100" style={{ backgroundColor: '#121212' }}>
        <div className="row h-100">
            <h1 className="text-light py-4">Purchased Plans</h1>
            {loading?<p className="text-center text-light mt-5">Plans Loading</p>:planData.map((plans:any)=><>
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

export default UserPurchasedPlans;
