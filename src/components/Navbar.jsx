import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav>
      <div className="container" style={{display:'flex', alignItems:'center', gap:12}}>
        <strong>React Demo</strong>
        <div style={{marginLeft:16}}>
          <Link to="/" style={{marginRight:12}}>Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div style={{marginLeft:'auto'}}>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  )
}
