import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import SHNavBarAdmin from './SH-NavBarAdmin';
import Axios from 'axios';

const AdminUserDetails = () => { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const { id } = useParams();

  useEffect(() => {
      Axios.get(`http://localhost:3001/getUser/${id}`).then((Response) =>{  
      setName(Response.data.name);
      setEmail(Response.data.email);
      setPassword(Response.data.password);
      setUserType(Response.data.userType);
      })
    }, [])

  return (  
    <div>
      <h3 className="ss_heading">Detail of User</h3>
      <br/>
      <br/>
      <div  className="notiveDetails">
        <div className="ss_detailNoticeBox">
          <h3 className="ss_detailNoticeBox_body">Name: {name.toUpperCase()}</h3>
          <br/>
          <h4 className="ss_detailNoticeBox_body">Email: {email}</h4>
          <br/>
          <h4 className="ss_detailNoticeBox_body">Password: {password}</h4>
          <br/>
          <h4 className="ss_detailNoticeBox_body">User Type: {userType}</h4>
        </div>
      </div> 
    </div>
  );
}
 
export default AdminUserDetails;
