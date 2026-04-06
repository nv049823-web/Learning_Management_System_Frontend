import AdminDashboard from '../pages/admin/AdminDashboard';
import Dashboard from '../pages/user/Dashboard';
import Layout from './Layout';

const LayoutChildren = () => {
  const userTypes = JSON.parse(localStorage.getItem("userTypes")||"null")
  return (
    <>
      <Layout>
        {userTypes==="admin"?<AdminDashboard/>:<Dashboard/>}
      </Layout>
    </>
  );
}

export default LayoutChildren;
