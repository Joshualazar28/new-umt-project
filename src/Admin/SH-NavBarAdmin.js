import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from './image-removebg-preview.png';

//Maham's import
import TEPostListAdmin from './TEPostListAdmin';
import TSPostListAdmin from './TSPostListAdmin';

const SHNavBarAdmin = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-sm ">
                <a className="navbar-brand" href="/admin">
                    <img src={logo} width="331" heigth="110" className="d-inline-block align top" alt="STUDENT ASSISTANCE"></img>
                </a>
                <div className="adminNav-content">

                    <ul className="navbar-nav" >
                        <li className="nav-item"><Link to="/admin" className="nav-link">NOTICES</Link></li>
                        <li className="nav-item"><Link to="/HomeAdminHandleUser" className="nav-link">USERS</Link></li>
                        <li className="nav-item"><Link to="/tspostListAdmin" className="nav-link">POSTS</Link></li>
                        <li className="nav-item"><Link to="/logout" className="nav-link">LOGOUT</Link></li>

                        {/*  <li className="nav-item"><a href="#" className="nav-link">USERS</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">POSTS</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">LOG OUT</a></li> */}
                    </ul>
                </div>

            </nav>
        </div>


    );
}

export default SHNavBarAdmin;