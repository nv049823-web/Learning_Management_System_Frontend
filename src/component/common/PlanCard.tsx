import React from 'react';

interface PlanProps {
  name: string;
  price: string;
  duration: string;
  features: string;
  isPopular?: string;
  id:number;
  color: 'primary' | 'warning' | 'success' | 'info';
}
const PlanCard: React.FC<PlanProps> = ({ name, price, duration, features, isPopular, color}) => {
    console.log(isPopular,"bdlvhh")
  return (
    <div className={`card bg-dark text-white border-0 shadow-lg h-100 rounded-4 position-relative ${isPopular== "Yes" ? 'border border-2 border-' + color : ''}`}>
      
      {isPopular== "Yes" && (
        <span className={`position-absolute top-0 start-50 translate-middle badge rounded-pill bg-${color} px-3 py-2 shadow`}>
          MOST POPULAR
        </span>
      )}

      <div className="card-body p-4 text-center">
        <h5 className={`text-${color} text-uppercase fw-bold mb-3`}>{name}</h5>
        <div className="mb-4">
          <span className="display-4 fw-bold">₹{price}</span>
          <span className="text-secondary">/{duration}days</span>
        </div>

        <small className="list-unstyled text-start mb-4">
          {features}
        </small>

        <div className="d-grid mt-auto">
        </div>
      </div>
    </div>
  );
};

export default PlanCard;