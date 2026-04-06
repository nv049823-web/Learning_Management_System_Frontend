import React from 'react';

interface StatsProps {
  title: string;
  value: string;
  variant: 'primary' | 'success' | 'warning' | 'danger';
}

const StatsCard: React.FC<StatsProps> = ({ title, value, variant }) => {
  return (
    <div className={`card bg-dark border-0 shadow-sm text-white h-100`}>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-secondary text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
          {title}
        </h6>
        <div className="d-flex align-items-center">
          <h2 className="card-title mb-0 me-3">{value}</h2>
          <span className={`badge bg-${variant} rounded-pill`}>+12%</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;