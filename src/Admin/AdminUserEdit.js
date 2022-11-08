import { useParams, useHistory } from 'react-router-dom';
import SHNavBarAdmin from './SH-NavBarAdmin';
import { useState, useEffect } from "react";
import Axios from 'axios';

const UpdateAdminUser = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
      Axios.get(`http://localhost:3001/getUser/${id}`).then((Response) =>{  
        setName(Response.data.name);
        setPassword(Response.data.password);
        setUserType(Response.data.userType);
      })
    }, [])
    const Update = (id) => {
      Axios.put("http://localhost:3001/updateUser", {id,name,password,userType});
      history.push("/HomeAdminHandleUser");
    }
    return (  
        <div>
            <SHNavBarAdmin></SHNavBarAdmin>
            <div className="create">
                <div className="register-inputs">
                    <h3 className="ss_heading">Update User</h3>
                    <br/>
                    <br/>
                    <form>
                        <div className="register-inputs">
                            <label className="form-label">Username</label>
                            <input className="forminputs"
                                type="text"
                                required
                                value={name}
                                placeholder='Enter your name here'
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />
                        </div>
                        <div className="register-inputs">
                            <label className="form-label">Password</label>
                            <input className="forminputs"
                                type="text"
                                minLength="8"
                                required
                                value={password}
                                onChange={(event) => {
                                setPassword(event.target.value)
                                }}
                            />
                        </div>
                        <div className="register-inputs">
                            <label className="form-label">Select user type: </label>
                            <select name={userType} value={userType} 
                                onChange={(event) => {
                                setUserType(event.target.value)
                            }}>
                                <option value="Student">Student</option>
                                <option value="Staff">Staff</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        
                        <button className='Signup-butn' onClick={() => Update(id)}>Update User</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default UpdateAdminUser;