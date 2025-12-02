import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AdminNavbar from '../components/AdminNavbar';

export default function AdminLayout(){
  return (
    <div className="flex">
      <Sidebar />
      <div style={{flex:1}}>
        <AdminNavbar />
        <div style={{padding:16}}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
