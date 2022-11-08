import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import SHNavBarAdmin from './SH-NavBarAdmin';
import Axios from 'axios';

const DeleteAdminUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const { id } = useParams();
    let history = useHistory();
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/getUser/${id}`).then((Response) =>{  
            setName(Response.data.name);
            setEmail(Response.data.email);
            setPassword(Response.data.password);
            setUserType(Response.data.userType);
        })
    }, [])

  const DeleteNotice = (id) => {
    Axios.delete(`http://localhost:3001/deleteUser/${id}`);
    history.push("/HomeAdminHandleUser");
  }
    return (  
        <div className="deletenotice">
          <SHNavBarAdmin></SHNavBarAdmin>
          <div >
            <h3 className="ss_heading">Delete User</h3>
            <br/>
            <br/>
            <div className="ss_detailNoticeBox">
              <h3 className="ss_detailNoticeBox_body">Name: {name.toUpperCase()}</h3>
              <br/>
              <h4 className="ss_detailNoticeBox_body">Email: {email}</h4>
              <br/>
              <h4 className="ss_detailNoticeBox_body">Password: {password}</h4>
              <br/>
              <h4 className="ss_detailNoticeBox_body">User Type: {userType}</h4>
              <br/>
              <br/>
              <button className="ss_button" onClick={() => DeleteNotice(id)}>Confirm Delete</button>
            </div>
          </div>
        </div>
    );
}
 
export default DeleteAdminUser;