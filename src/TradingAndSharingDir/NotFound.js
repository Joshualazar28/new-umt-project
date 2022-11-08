import { Link } from "react-router-dom"
import NavBarHome from '../RegistrationDir/NavbarHome';
import MiniNavBar from './MiniNavbar';

const NotFound = () => {
  return (
    <div className="not-found">
    <NavBarHome/>
    <MiniNavBar/>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;