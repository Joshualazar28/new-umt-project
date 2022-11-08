import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import MiniNavBar from './MiniNavbar';
import SHNavBarAdmin from '../Admin/SH-NavBarAdmin';
import Axios from 'axios';

const LSPostDetails = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [date,setDate] = useState('');
  const { id, user } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/getLfPost/${id}`).then((Response) =>{  
    setTitle(Response.data.title);
    setBody(Response.data.content);
    setDate(Response.data.date);
    })
  }, [])
  const checkUsr = (user) =>{
      if(user=="adm")
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
            <MiniNavBar title={"Lost & Found"}/>
            </Fragment>)
      }          
  }
  return (
    <div>
      <NavBarHome/>
      <MiniNavBar title={"Lost & Found"}/>
      {/* <div className="">
          {checkUsr(user)}
      </div> */}
      <br/> 
      <div className="post-details">
        <div className="posts_detailPosts">
          <h3 className="posts_detailPosts_title">{title.toUpperCase()}</h3>
          <br/>
          <h5 className="posts_detailPosts_body">{body}</h5>
          <br/>
          <br/>
          <br/>
          <h6 className="posts_detailPosts_date"><b className="posts_date">Publish Date:</b> {date}</h6>
        </div>
      </div>
    </div>
  );
}
 
export default LSPostDetails;
