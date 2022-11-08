import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import SHNavBarAdmin from './SH-NavBarAdmin';
import Axios from 'axios';

const DeleteAdminNotice = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  let history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:3001/getNotice/${id}`).then((Response) =>{  
    setTitle(Response.data.title);
    setBody(Response.data.content);
    })
  }, [])

  const DeleteNotice = (id) => {
    Axios.delete(`http://localhost:3001/deleteNotice/${id}`);
    history.push("/admin");
  }
    return (  
        <div className="deletenotice">
         <SHNavBarAdmin></SHNavBarAdmin>
           <div >
      <h3 className="ss_heading">Delete Notice</h3>
      <br/>
      <br/>
      <div className="ss_detailNoticeBox">
            <h3 className="ss_detailNoticeBox_title">{title.toUpperCase()}</h3>
            <br/>
            <h5 className="ss_detailNoticeBox_body">{body}</h5>
            <br/>
            <br/>
            <br/>
            <button className="ss_button" onClick={() => DeleteNotice(id)}>Confirm Delete</button>
            </div>
    </div>
        </div>
    );
}
 
export default DeleteAdminNotice;