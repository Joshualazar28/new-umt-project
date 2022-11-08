import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import AdminUserList from './AdminUserList';
import Axios from 'axios';

const HomeAdminHandleUser = () => {
  //eslint-disable-next-line

  const[User,setUser]=useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((Response) =>{  
      setUser(Response.data);
    })
    
  }, [])

  return (
    <div className="home">
      <AdminUserList User={User} title="All Users" user={"adm"} /> 
    </div>
  );
}
 
export default HomeAdminHandleUser;
