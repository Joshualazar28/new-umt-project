import { useParams, useHistory } from 'react-router-dom';
import StaffNavBar from '../Staff/StaffNavBar';
import { useState, useEffect } from "react";
import Axios from 'axios';

const DeleteNotice = () => {
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
    history.push("/StaffHome");
  }
    return (  
        <div className="deletenotice">
           <StaffNavBar/>
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
 
export default DeleteNotice;