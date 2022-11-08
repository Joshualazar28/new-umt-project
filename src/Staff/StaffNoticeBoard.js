import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import Axios from 'axios';
import NoticeList from '../NoticeDir/NoticeList';
const StaffNoticeBoard = () => {
    const [noticeList, setNoticeList] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/getNotices").then((Response) =>{  
        setNoticeList(Response.data);
      })
      
    }, [])

    return ( 
        <div className="ss_staffnoticeboard">
          <div className="links">
        <Link to="/CreateNotice"style={{ 
          color: 'white', 
          backgroundColor: '#2F9DC6',
          padding: '15px',
          borderRadius: '8px', 
          marginLeft: '80%',
          marginTop: '50px'
        }}>New Notice</Link> 
      </div>
      <h3>Notices:</h3>
        <div className="outer"> 
        <NoticeList notices={noticeList}user={"admin"}/>
        </div>
       
        </div>
     );
}
 
export default StaffNoticeBoard;