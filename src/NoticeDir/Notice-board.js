import { useState, useEffect } from 'react';
import NoticeList from './NoticeList';
import Importants from './Importants';
import NavBarHome from '../RegistrationDir/NavbarHome';
import Axios from 'axios';

const NoticeBoard = ({username}) => {
    const [notices, setnotice] = useState([]);
    const [important, setImportant] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/getNotices").then((Response) =>{  
        setnotice(Response.data);
      })
      Axios.get("http://localhost:3001/getSLfPosts").then((Response) =>{  
        setImportant(Response.data);
      })
    }, [])

    // zeofif

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

   const [tsPost, setTsPost] = useState(null)
   useEffect(()=>{
     fetch(`https://mamas.quest/allTsPosts`,{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt")
         }
     }).then(res=>res.json())
     .then(result=>{
         //console.log(result)
       
         setTsPost(result?.posts
           )
     })
  },[])

  const [tePost, setTePost] = useState(null)
  useEffect(()=>{
    fetch(`https://mamas.quest/allTEPosts`,{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
      
        setTePost(result?.posts
          )
    })
 },[])



   
   console.log(lostFond    ,'--lostFond')
   console.log(tsPost, 'tsPost')


    return (  
        <div className="noticeboard">
        <NavBarHome username={username}/>
        <div className="flex2">
      <div className="childT 1">
        <h3>Announcments:</h3>
      </div>
      {/* <div className="childT 2">
        <h3>Importants:</h3>
      </div> */}
    </div>
    <div className="flex">
        <div className="outer"> 
        <NoticeList lostFond={lostFond} tePost={tePost} tsPost={tsPost} notices={notices} user={"student"}/>
        </div>
        {/* <Importants important={important} user={"student"}className="outer 2"/> */}
        </div>
    </div>
    );
}
 
export default NoticeBoard;