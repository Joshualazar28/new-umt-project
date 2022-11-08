import TEPostList from "./TEPostList";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import NavBarHome from '../RegistrationDir/NavbarHome';
import TEMiniNavBar from './TEMiniNavbar';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import moment from "moment"

const HomeTripsEvents = ({username}) => {
  const [teblogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getSTePosts").then((Response) =>{  
  //     setBlogs(Response.data);
  //   })
  // }, [])
  const [userProfile,setProfile] = useState(null)
  const ShowMyLost = ()  =>  { 
    fetch(`https://mamas.quest/myTEPosts`,{
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

fetch(`https://mamas.quest/inserTEfPosts/${mypost._id}`, requestOptions)
.then(() => {
 toast.success('Delete  successful')
 ShowMyLost()
})
.catch(error => {
  console.log(error)  
    console.error('There was an error!', error)
})


  }
console.log(userProfile?.mypost)
  return (
    <div className="home">
    <NavBarHome username={username}/>

    <TEMiniNavBar title={"Trips & Events"}/>
      <TEPostList blogs={teblogs} user={"student"} />
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
 
export default HomeTripsEvents;
