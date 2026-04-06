import { Users, ClipboardList, BookOpen, CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getDashboardData } from '../../services/apiFetch';

const AdminDashboard = () => {
 const [data,setData]=useState({
  user: { totalUsers: 0, activeUsers: 0 },
  masterPlan: { totalMasterPlans: 0, activeMasterPlans: 0 },
  masterCourse: { totalCourse: 0, activeCourse: 0 }
 });
 
 const getData = async ()=>{
    const res = await getDashboardData();
    setData(res.result);
    console.log(res?.message)
 }
 useEffect(()=>{
    getData()
 },[])

  const stats = [
    {
      label: "User Management",
      total:data.user.totalUsers,
      active: data.user.activeUsers,
      icon: <Users size={24} />,
      color: "primary"
    },
    {
      label: "Master Plans",
      total: data.masterPlan.totalMasterPlans,
      active: data.masterPlan.activeMasterPlans,
      icon: <ClipboardList size={24} />,
      color: "success"
    },
    {
      label: "Master Courses",
      total: data.masterCourse.totalCourse,
      active: data.masterCourse.activeCourse,
      icon: <BookOpen size={24} />,
      color: "info"
    }
  ];

  return (
        <div className="container-fluid py-4 b min-vh-100" style={{ backgroundColor: '#121212' }}>
      <div className="row mb-4">
        <div className="col">
          <h2 className="text-center text-light"><span className='text-warning'>Admin</span> Dashboard</h2>
        </div>
      </div>

      <div className="row g-4">
        {stats.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 bg-dark">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className={`p-3 rounded bg-${item.color} bg-opacity-10 text-${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="badge rounded-pill bg-success-subtle text-success border border-success border-opacity-25">
                    <CircleCheck size={12} className="me-1" /> Active
                  </span>
                </div>
                
                <h6 className="card-subtitle mb-2  uppercase font-monospace text-light">
                  {item.label}
                </h6>
                
                <div className="d-flex align-items-end gap-2">
                  <h3 className="card-title mb-0 fw-bold text-light">{item.total}</h3>
                  <small className="text-light pb-1">Total Items</small>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-1 small">
                    <span className='text-light'>Active Status</span>
                    <span className="fw-bold text-light">{item.active} / {item.total}</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div 
                      className={`progress-bar bg-${item.color}`} 
                      role="progressbar" 
                      style={{ width: `${(item.active / item.total) * 100}%` }}
                      aria-valuenow={(item.active / item.total) * 100} 
                      aria-valuemin={0} 
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
  );
};

export default AdminDashboard;

