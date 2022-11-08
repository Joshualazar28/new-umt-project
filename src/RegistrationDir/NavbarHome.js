import React, { useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from './image-removebg-preview.png';
import { UserContext } from '../App';
const NavbarHome = ({username}) => {
  console.log(username, 'state')
  
  const { dispatch } = useContext(UserContext);
  let history = useHistory();
    return (   
        <div className="navbar">

        <div className="header-fixed">
        
        
          <nav className="navbar navbar-light  ">
            <Link className="navbar-brand" to="/notice-board">
              <img src={logo} width="331" heigth="110" className="d-inline-block align top" alt="STUDENT ASSISTANCE"></img>
            </Link>
        
            
        
        
        
        
            <div className="Home-nav-content">
            <div className="navHome">
              <Link to="/notice-board" alt="HOME" >HOME</Link>
              <Link to="/HomeLostFound" alt="LOST AND FOUND">LOST & FOUND</Link>
              <Link to="/HomeTradingSharing" alt="SELL AND BUY">TRADING & SHARING</Link>
              <Link to="/HomeTripsEvents" alt="TRIPS AND EVENTTS">TRIPS AND EVENTS</Link>
              <Link to="/knowledge" alt="TRIPS AND EVENTTS">KNOWLEDGE ZONE</Link>
               {/* <Link to="/clearance" alt="CELERANCE">CLEARANCE</Link>/ */}
               <div style={{float:'right', position:"relative", left:"300px"}}>
               <Link to="#" >{username}</Link>
              <Link  onClick={() => {
              localStorage.clear();
              dispatch({ type: 'CLEAR' });
              // window.location = '/login';
              history.push('/login')
            }} alt="Logout">LOGOUT</Link>
               </div>
              
          </div>
              
            </div>
          </nav>
        </div>
        </div>
     );
}
 
export default NavbarHome;