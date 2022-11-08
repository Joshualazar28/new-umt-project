import { Link } from "react-router-dom";
const NoticeList = ({ Notices, title,user}) => {
 
    return (
      <div className="notice-list">
     {/*All notices little nav */}
        <nav className="navbar-notice">
        <h1>{ title }</h1>
      <div className="links">
        <Link to="/CreateNoticeAdmin" style={{ 
          color: 'white', 
          backgroundColor: '#2F9DC6',
          borderRadius: '8px' 
        }}>Add New Notice</Link>
      </div>
    </nav>


        {Notices.map(notice => (
          <div className="SH-notice-preview" key={notice._id} >
           <Link to={`/notices/${notice._id}/${user}`}><h2>{ notice.title }</h2>
           </Link> 
            <Link to={`/editNotice/${notice._id}`}>
            <button className="SH-Admin-Noticebtn" >Edit</button>
            </Link>
            <Link to={`/deleteNotice/${notice._id}`}>
            <button className="SH-Admin-Noticebtn" >Delete</button>
            </Link>
            
          </div>
        ))}
      </div>
    );
  }
   
  export default NoticeList;