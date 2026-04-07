import StatsCard from "../../component/user/Stats";

const Dashboard = () => {
  return (
    <>
    <div className="container-fluid min-vh-100" style={{ backgroundColor: '#121212' }}>
      <div className="row">
        
        {/* Main Content */}
        <main className="col-12 p-4">
          
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="text-white">
              <h2 className="fw-bold mb-0">Overview</h2>
              <small className="text-secondary">Welcome back to your control panel</small>
            </div>
            <button className="btn btn-primary px-4 rounded-pill shadow-sm">
              Generate Report
            </button>
          </div>

          {/* Stats Row */}
          <div className="row g-4 mb-5">
            <div className="col-12 col-md-6 col-lg-3">
              <StatsCard title="Total Users" value="8,540" variant="primary" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <StatsCard title="Active Projects" value="42" variant="success" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <StatsCard title="Revenue" value="$12.4k" variant="warning" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <StatsCard title="Uptime" value="99.9%" variant="danger" />
            </div>
          </div>

          {/* Table Section */}
          <div className="card bg-dark border-0 shadow-sm rounded-4 text-white p-3">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-bold">Recent Users</h5>
              <div className="table-responsive">
                <table className="table table-dark table-hover mb-0">
                  <thead className="text-secondary border-secondary">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>City</th>
                      <th className="text-end">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aman Sharma</td>
                      <td className="text-secondary">aman@example.com</td>
                      <td>Lucknow</td>
                      <td className="text-end text-success">Active</td>
                    </tr>
                    <tr>
                      <td>Sneha Gupta</td>
                      <td className="text-secondary">sneha@example.com</td>
                      <td>Delhi</td>
                      <td className="text-end text-warning">Pending</td>
                    </tr>
                    <tr>
                      <td>Vikram Singh</td>
                      <td className="text-secondary">vikram@example.com</td>
                      <td>Mumbai</td>
                      <td className="text-end text-danger">Banned</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
