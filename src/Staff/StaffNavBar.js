import { Link } from 'react-router-dom';
import logo from '../RegistrationDir/image-removebg-preview.png';

const StaffNavBar = () => {
  return (
    <div className="navbar">

      <div className="header-fixed">
        <nav className="navbar navbar-light  ">
          <Link className="navbar-brand" to="/Staffhome">
            <img src={logo} width="331" heigth="110" className="d-inline-block align top" alt="STUDENT ASSISTANCE"></img>
          </Link>
          <div className="Home-nav-content">
            <div className="navHome">
              <Link to="/StaffHome" alt="NOTICE-BOARD" >Notice-Board</Link>
              {/* <Link to="/StaffClearance" alt="CLEARANCE">Clearance</Link> */}
              <Link to="/logout" alt="LOGOUT">Logout</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StaffNavBar;