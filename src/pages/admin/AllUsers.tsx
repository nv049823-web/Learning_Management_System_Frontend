import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { allUserurl, deleteUserurl } from "../../services/apiFetch";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
   const navigate = useNavigate();
    const [allUser,setAllUser] = useState([])
    const fetchAllUser = async()=>{
        const res = await allUserurl()
        setAllUser(res.result)
    }
    useEffect(()=>{
        fetchAllUser()
    },[])
const deleteUser = async (id:any)=>{
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
                       const res = await deleteUserurl(id)
                       Swal.fire({
                         title: "Deleted!",
                         text: res?.message,
                         icon: "success"
                       });
                          fetchAllUser()
                     }
                   });
      
    }
  return (
    <>  
    <Layout>
    <div className="container-fluid py-4 px-4" style={{ backgroundColor: '#0f111a', minHeight: '100vh' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white fw-bold">User Management</h2>
        <button className="btn btn-primary rounded-pill px-4">
          <i className="bi bi-person-plus-fill me-2"></i> Export CSV
        </button>
      </div>

      <div className="card bg-dark border-0 shadow-lg rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle mb-0">
            <thead className="bg-secondary bg-opacity-10 text-secondary border-secondary">
              <tr>
                <th className="ps-4 py-3">User</th>
                <th className="ps-4 py-3">Email</th>
                <th className="py-3">Contact Info</th>
                <th className="py-3 text-center">Credits</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3">Joined Date</th>
                <th className="py-3 text-center pe-4">Actions</th>
              </tr>
            </thead>

<tbody className="border-top-0">
  {allUser && allUser.map((ele: any) => (
    <tr key={ele.id} className="border-secondary border-opacity-25">
      <td className="ps-4 py-3">
        <div className="d-flex align-items-center">
            {ele?.profile===null?
                 <h2 className="text-light mt-1 ">NV</h2>:
                  <img src={`http://localhost:9000/uploads/admin_profile/${ele.profile}`} alt="Profile" className="rounded-circle me-3 border border-2 border-secondary" 
                      style={{ width: '45px', height: '45px' }} />
            }
          <div>
            <div className="fw-bold text-white">{ele.name}</div>
            <small className="text-secondary">ID: #{ele.id}</small>
          </div>
        </div>
      </td>
      <td>{ele.email}</td>
      <td>{ele.mobile}</td>
      <td className="text-center">{ele.credit}</td>
      <td className="text-center">{ele.status}</td>
      <td>{ele.created_at}</td>
     
      
      <td className="py-3 text-center pe-4">
        <div className="btn-group">
          <button className="btn btn-sm btn-outline-light border-0 opacity-75" onClick={()=>navigate(`/user-profile-details/${ele?.id}`)}>View</button>
          <button className="btn btn-sm btn-outline-primary border-0" >Edit</button>
          <button 
            className="btn btn-sm btn-outline-danger border-0" 
            onClick={() => deleteUser(ele.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
}

export default AllUsers;
