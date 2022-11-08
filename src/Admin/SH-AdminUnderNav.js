import {useState, useEffect} from 'react';
import NoticeList from './SH-NoticeList';
import Axios from 'axios';
const SHAdminUnderNav = () => {

  const[Notices,setNotices]=useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getNotices").then((Response) =>{  
      setNotices(Response.data);
    })
    
  }, [])
    return (
        <div className="SH-AdminUnderNav">
            <NoticeList Notices={Notices} title="All Notices" user={"adm"} /> 
        </div>
      );
}
 
export default SHAdminUnderNav;