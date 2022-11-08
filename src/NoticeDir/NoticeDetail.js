import { useParams} from 'react-router-dom';
import { useState, useEffect, Fragment } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import StaffNavBar from '../Staff/StaffNavBar';
import SHNavBarAdmin from '../Admin/SH-NavBarAdmin';
import Axios from 'axios';
const NoticeDetail = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date,setDate] = useState('');
    const { id,user} = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:3001/getNotice/${id}`).then((Response) =>{  
        setTitle(Response.data.title);
        setBody(Response.data.content);
        setDate(Response.data.date);
        })

        


      }, [])
      const checkUsr = (user) =>{
          if(user == "admin"){
            return (
                <Fragment>
                <StaffNavBar/>
                </Fragment>)
          }
          else if(user=="adm")
          {
              return(
              <Fragment>
                  <SHNavBarAdmin></SHNavBarAdmin>
              </Fragment>)
          }
          else if(user == "student"){
            return (
                <Fragment>
                <NavBarHome/>
                </Fragment>)
          }          
      }
    return (  
        <div className="notiveDetails">
             <div className="">
                    {checkUsr(user)}
                </div>
            <br/>
            <div className="ss_detailNoticeBox">
            <h3 className="ss_detailNoticeBox_title">{title.toUpperCase()}</h3>
            <br/>
            <h5 className="ss_detailNoticeBox_body">{body}</h5>

            <br/>
            <br/>
            <h6 className="ss_detailNoticeBox_date"><b className="ss_date">Publish Date:</b> {date}</h6>
            </div>
           
        </div>
    );
}
 
export default NoticeDetail;