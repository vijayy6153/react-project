import { Link } from 'react-router-dom';
export default function Sidebar(){
  return (
    <aside className="sidebar">
      <h3>Admin Panel</h3>
      <nav style={{marginTop:12, display:'flex', flexDirection:'column', gap:8}}>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
      </nav>
    </aside>
  )
}
