import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavBarHome from '../RegistrationDir/NavbarHome'
import Table from 'react-bootstrap/Table';
import moment from 'moment';
const LostTable = () => {
    const [lostFond, setLostFond] = useState(null)
    useEffect(()=>{
      fetch(`https://mamas.quest/allLfPosts`,{
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result=>{
          //console.log(result)
        
           setLostFond(result?.posts
            )
      })
   },[])
  return (
    <div>
        <div className="noticeboard">
        <NavBarHome />
        <div className='container'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th>Image</th>
          <th>Action</th>
          <th>Date</th>


        </tr>
      </thead>
      <tbody>
        {lostFond?.map((lost,index) => {
           console.log(lost, '-lost')
            return (
                <tr>
                <td>{index + 1}</td>
                <td>{lost?.title}</td>
                <td>{lost?.content}</td>
                <td><img src={lost?.photo} style={{height:"50px",width:"50px"}}/></td>
                <td>{lost?.postedBy?.userType}(<span>{lost?.postedBy?.name}</span>)</td>
                <td>{moment(lost?.createdAt).format('MM-DD-YYYY')}</td>
              </tr>
            )
        })}


      </tbody>
    </Table>
        </div>


    </div>
    </div>
  )
}

export default LostTable
