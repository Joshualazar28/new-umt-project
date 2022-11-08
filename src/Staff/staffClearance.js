//import { Button } from "react-bootstrap";
//import {Link} from "react-router-dom"
import StaffNavBar from './StaffNavBar';
import { Fragment, useEffect } from "react";
import { useState } from "react";
import  Axios  from "axios";
const StaffClearance = () => {
    const [user,setUser]=useState("");
    
    const [clearnaceStatus,setclearnceStatus] = useState([]) ;  

    useEffect( () => {
         
        Axios.get("http://localhost:3001/getclearancereq").then((response) => {
          setclearnceStatus(response.data);
        });

    },[]);

    const rejectClrearance = (id)  =>{
        Axios.delete(`http://localhost:3001/deleteClreanceReq/${id}`);

    }
    const acceptReq = (id)  =>{
        Axios.put(`http://localhost:3001/updateReq/${id}`);
    }

    return(
        <div className="im-clearnce-status">
            <StaffNavBar/>
            <div>
            {clearnaceStatus.map((val,key) => {
        return(
        
          <div className="im-card" key={key}>
              <br></br>
              <h5> Name : {val.name}</h5>
              <h5>RollNo: {val.email} </h5>
              <h6>{val.date}</h6>
              <h6>{val.form}</h6>
             
          
              <button className="im-accept" onClick={() =>acceptReq(val._id)}>Accept</button>
              <button type="submit" className="im-reject" onClick={() => rejectClrearance(val._id)}>Reject</button>
              <br></br>
              <br></br>

          </div>
        );
      })}
            </div>    
            
        </div>
    )




}
   
 
export default StaffClearance;