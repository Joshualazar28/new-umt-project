import { Link } from "react-router-dom";

const TSMiniNavbar = ({title}) => {
  return (
    <div className="minnavbar">
     
    <nav className="psnavbar">
      <h1>{title}</h1>
      <div className="links">
     <Link to="/CreateTSPost" style={{ 
           color: 'white', 
          backgroundColor: '#2F9DC6',
          borderRadius: '8px' 
        }}>New Post</Link>
      </div>
    </nav>
    </div>
  );
}
 
export default TSMiniNavbar;