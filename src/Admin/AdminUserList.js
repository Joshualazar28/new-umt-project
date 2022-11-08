import { Link } from 'react-router-dom';
import AdminUserCreate from './AdminUserCreate';

const AdminUserList = ({ User, title }) => { 

  return (
    <div className="post-list">
      <nav className="navbarUser">
        <h1>{ title }</h1>
        <div className="links">
          <Link to="/insertUserByAdmin" style={{ 
            color: 'white', 
            backgroundColor: '#2F9DC6',
            borderRadius: '8px' 
          }}>Add New User</Link>
        </div>
      </nav>


      {User.map(user => ( 
        <div className="user-preview" key={user._id} >
         <Link to={`/user/${user._id}`}><h2>{ user.email }</h2>
         </Link> 
          <Link to={`/updateUser/${user._id}`}>
          <button className="SH-Admin-Noticebtn" >Edit</button>
          </Link>
          <Link to={`/deleteUser/${user._id}`}>
          <button className="SH-Admin-Noticebtn" >Delete</button>
          </Link>
          
        </div>
      ))}
    </div>
  );
}
 
export default AdminUserList;