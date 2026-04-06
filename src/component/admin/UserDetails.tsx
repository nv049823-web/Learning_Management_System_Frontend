import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "../../layout/Layout";
import { getUserProfileDetails } from '../../services/apiFetch';
// Import your API fetchers here
// import { getUserByIdUrl } from "../../services/apiFetch";

interface User {
  id: any;
  name: any;
  email: any;
  mobile: any;
  profile: any;
  adress: any;
  credit: any;
  status: any;
  created_at: any;
  // Course/Plan details (Added for this view)
  planName?: any[];
  planExpiry?: string;
  enrolledCourses?: any[];
}

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [plans, setPlans] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getUserDetailsHandler = async ()=>{
    setLoading(true)
    const res = await getUserProfileDetails(id);
    setUser(res?.result?.userDetails)
    setPlans(res?.result?.userPlans)
    setCourses(res?.result?.userCourses)
    setLoading(false)
  }
  useEffect(() => {
    getUserDetailsHandler()
  }, []); 

  if (loading) return  <Layout> <div className="text-white text-center pt-5"
  style={{ backgroundColor: '#0f111a', minHeight: '100vh' }}>Loading User Data...
  </div>
  </Layout>;
  if (!user) return  <Layout><div className="text-white text-center pt-5"
  style={{ backgroundColor: '#0f111a', minHeight: '100vh' }}>User Not Found
   </div>
  </Layout>;
  return (
    <Layout>
      <div className="container-fluid py-4 px-4" style={{ backgroundColor: '#0f111a', minHeight: '100vh' }}>
        
        {/* Top Header with Back Button */}
        <div className="d-flex align-items-center mb-4">
          <button onClick={() => navigate(-1)} className="btn btn-outline-secondary btn-sm rounded-circle me-3">
             ←
          </button>
          <h2 className="text-white fw-bold mb-0">User Deep-Dive</h2>
        </div>

        <div className="row g-4">
          
          {/* Left Column: Personal Info Card */}
          <div className="col-lg-4">
            <div className="card bg-dark text-white border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="bg-primary py-5 text-center">
                <img 
                  src={`http://localhost:9000/uploads/user_profile/${user.profile}`} 
                  alt="Profile" 
                  className="rounded-circle border border-4 border-white shadow-lg"
                  style={{ width: '120px', height: '120px', marginTop: '20px' }}
                />
              </div>
              <div className="card-body pt-0 text-center" style={{ marginTop: '-40px' }}>
                <div className="bg-dark rounded-4 p-3 shadow-sm mx-3 mb-3">
                  <h4 className="fw-bold mb-1">{user.name}</h4>
                  <p className="text-secondary small mb-2">{user.email}</p>
                  <span className={`badge ${user.status === 1 ? 'bg-success' : 'bg-danger'} rounded-pill px-3`}>
                    {user.status === 1 ? 'Active' : 'Banned'}
                  </span>
                </div>

                <div className="text-start px-3 py-2">
                  <div className="mb-3">
                    <label className="text-secondary small d-block">Mobile</label>
                    <span className="text-white">{user.mobile || 'N/A'}</span>
                  </div>
                  <div className="mb-3">
                    <label className="text-secondary small d-block">Address</label>
                    <span className="text-white small">{user.adress || 'Not Provided'}</span>
                  </div>
                  <div className="mb-0">
                    <label className="text-secondary small d-block">Account Created</label>
                    <span className="text-white small">{user.created_at}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Courses & Credits */}
          <div className="col-lg-8">
            <div className="row g-4">
              
              {/* Plan & Subscription Card */}
              <div className="col-12">
                <div className="card bg-dark text-white border-0 shadow-lg rounded-4 p-4">
                  <h5 className="fw-bold text-primary mb-4">Current Subscription Plan</h5>
                  <div className="d-flex align-items-center justify-content-between bg-secondary bg-opacity-10 p-3 rounded-3 border border-secondary border-opacity-25">
                   {
                    plans.length!=0? 
                      plans.map((plan:any)=> <>
                       <div>
                      <h6 className="mb-1 text-warning fw-bold">{plan?.name}</h6>
                      <small className="text-secondary">Expires on: {user.planExpiry}</small>
                    </div>
                      </>
                      ): 
                      <div>
                      <h6 className="mb-1 text-warning fw-bold">Plan not avilable</h6>
                      <small className="text-secondary">Expires on: {user.planExpiry}</small>
                    </div>
                    
                   }
                    <div className="text-end">
                      <span className="h3 mb-0 text-white d-block">{user.credit}</span>
                      <small className="text-secondary text-uppercase fw-bold" style={{ fontSize: '10px' }}>Available Credits</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enrolled Courses List */}
              <div className="col-12">
                <div className="card bg-dark text-white border-0 shadow-lg rounded-4 p-4">
                  <h5 className="fw-bold text-primary mb-3">Enrolled Courses</h5>
                  <div className="list-group list-group-flush border-top border-secondary border-opacity-25">
                    {user.enrolledCourses?.map((course, index) => (
                      <div key={index} className="list-group-item bg-transparent text-white border-secondary border-opacity-25 px-0 py-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-3 me-3">
                             📚
                          </div>
                          <span>{course}</span>
                        </div>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill">View Progress</button>
                      </div>
                    ))}
                    {(!user.enrolledCourses || user.enrolledCourses.length === 0) && (
                      <p className="text-secondary mt-3">No courses found for this user.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              <div className="col-12">
                <div className="d-flex gap-3">
                   <button className="btn btn-warning flex-grow-1 fw-bold rounded-pill shadow-sm">Manage Credits</button>
                   <button className="btn btn-danger flex-grow-1 fw-bold rounded-pill shadow-sm">Suspend User</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
