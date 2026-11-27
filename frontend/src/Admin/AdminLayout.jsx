import { Link, Outlet } from "react-router-dom";
function AdminLayout() {
    return (
        <div>
            <nav>
                <Link to="admindashboard">Admin Dashboard</Link>
                <Link to="settings">Settings</Link>
                <Link to="userdetails">User Details</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
export default AdminLayout;