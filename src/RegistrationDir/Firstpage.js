import { Link } from "react-router-dom";
import Navbar from './NavBar';

const Firstpage = () => {
    return (
        <div className= "bg-pic">
            <div className="body"> 
        <div className="first-page" style={{
        }}>

          <Navbar />
          <br></br>
        <h1>
            Welcome to Student Assistance
        </h1>
        

        <div className="link" style={{
            textAlign:"center"
        }}>
            
        <Link to="/register">
            <button className="Signup-butn" style={{
                backgroundColor:"green",
                
                width:"200px",
                margin:"20px",
            }}>
             Signup
            </button>
        </Link>
        <Link to="/login">
            <button className="Signup-butn"style={{ 
                width:"200px",
                margin:"30px"
            }}>
                Login
            </button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      
        
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default Firstpage;