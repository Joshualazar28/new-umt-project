import TSPostList from "./TSPostList";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import TSMiniNavBar from './TSMiniNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import moment from "moment"
const HomeTradingSharing = ({username}) => {
  const [tsblogs, setBlogs] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getSTsPosts").then((Response) =>{  
      setBlogs(Response.data);
    })
  }, [])

  const [userProfile,setProfile] = useState(null)
  const ShowMyLost = () => {
    fetch(`https://mamas.quest/myTsPosts`,{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        //console.log(result)
      
         setProfile(result)
    })
  }
  useEffect(()=>{
    ShowMyLost()
 },[])
console.log(userProfile?.mypost)

const HandleDeleteMenu = (e, mypost) => {
  console.log(mypost._id, 'mypost')
  // const token  = JSON.parse(localStorage.getItem('jwt')) 
  const token  = localStorage.getItem('jwt') 
  
  console.log(token, 'token')
  const requestOptions = {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}` 
        
    }
}

fetch(`https://mamas.quest/inserTsfPosts/${mypost._id}`, requestOptions)
.then(() => {
 toast.success('Delete  successful')
 ShowMyLost()
})
.catch(error => {
  console.log(error)  
    console.error('There was an error!', error)
})


  }


  return (
    <div className="home">
    <NavBarHome username={username}/>
    <TSMiniNavBar title={"Trading & Sharing"}/>
      <TSPostList blogs={tsblogs} user={"student"} />
      <div className="container p-5">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th>Image</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userProfile?.mypost?.map((mypost,index) => {
          return (
            <tr>
            <td>{index + 1}</td>
            <td>{mypost?.title}</td>
            <td>{mypost?.content}</td>
            <td><img src={mypost?.photo} alt="img" style={{height:"30px", width:"40px"}}/></td>
            <td>{moment(mypost?.createdAt).format('MM-DD-YYYY')}</td>
            <td><Button    onClick={(e) => HandleDeleteMenu(e, mypost, index + 1)}  variant="danger">Delete  </Button>{' '}</td>
          </tr>
      
          )
        })}
       
      </tbody>
    </Table>
      </div>
    </div>
  );
}

export default HomeTradingSharing;
