
const PurchasePlanCard = ({plans}:{plans:any}) => {
  return (
    <>
                         <div className="container-fluid border rounded rounded-4  p-2" style={{minHeight:"230px"}}>
                        <h2 className="text-warning text-center">{plans.name.charAt(0).toUpperCase() + plans.name.slice(1)}</h2>
                        <p className="text-center fw-bold text-light mb-0">{plans.status==="Active"?"Now Avilabel":"Currently Not Avilabel"}</p>
                        <h1 className="text-center text-light">${plans.price}/-</h1>
                        <small className="text-center text-light d-inline-block mb-2 w-100">for {plans.duration} days</small>
                        <p className="text-center text-light">{plans.desc}</p>
                       <div className="d-flex justify-content-between align-item-center ">
                    </div>
                    </div>
    </>
  );
}

export default PurchasePlanCard;
