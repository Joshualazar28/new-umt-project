import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarUser">
      <div className="links">
        <Link to="/createUserByAdmin" style={{ 
          color: 'white', 
          backgroundColor: '#2F9DC6',
          borderRadius: '8px' 
        }}>New User</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;