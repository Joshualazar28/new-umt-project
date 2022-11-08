import { Link } from "react-router-dom";

const TEMiniNavbar = ({title}) => {
  return (
    <div className="minnavbar">
     
    <nav className="psnavbar">
      <h1>{title}</h1>
      <div className="links">
     <Link to="/CreateTEPost" style={{ 
           color: 'white', 
          backgroundColor: '#2F9DC6',
          borderRadius: '8px' 
        }}>New Post</Link>
      </div>
    </nav>
    </div>
  );
}
 
export default TEMiniNavbar;