import { useState } from "react";
import { useHistory } from "react-router-dom";
import SHNavBarAdmin from './SH-NavBarAdmin';
import Axios from 'axios';

const CreateNotice = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  let history = useHistory();
  
  const handleSubmit = () => {
    Axios.post("http://localhost:3001/insertNotice", {title, body});
    history.push("/admin");

  }
    return ( 
        <div className="ss_createnotice">
         <SHNavBarAdmin></SHNavBarAdmin>
        <div className="ss_noticeForm">
      <h3 className="ss_heading">Add Notice</h3>
      <br/>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label className="ss_labelStyle">Notice title:</label>
        <input 
          type="text" 
          value={title}
          required 
          placeholder="Enter Notice Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="ss_labelStyle">Notice Content:</label>
        <textarea className="ss_textbox"
          required
          value={body}
          placeholder="Enter Notice text here..."
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Notice</button>
      </form>
    </div>
        </div>
     );
}
 
export default CreateNotice;