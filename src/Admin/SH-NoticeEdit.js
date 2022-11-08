import { useParams, useHistory } from 'react-router-dom';
import SHNavBarAdmin from './SH-NavBarAdmin';
import { useState, useEffect } from "react";
import Axios from 'axios';
const UpdateAdminNotice = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
      Axios.get(`http://localhost:3001/getNotice/${id}`).then((Response) =>{  
      setTitle(Response.data.title);
      setBody(Response.data.content);
      })
    }, [])
    const Update = (id) => {
      Axios.put("http://localhost:3001/updateNotice", {id,title,body});
      history.push("/admin");
      }
    return (  
        <div className="updatenotice">
            <SHNavBarAdmin></SHNavBarAdmin>
           <div className="ss_noticeForm">
            <h3 className="ss_heading">Update Notice</h3>
            <br/>
            <br/>
        <form>
        <label className="ss_labelStyle">Notice title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="ss_labelStyle">Notice Content:</label>
        <textarea className="ss_textbox"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={() => Update(id)}>Update Notice</button>
      </form>
      </div>
      </div>
    );
}
 
export default UpdateAdminNotice;