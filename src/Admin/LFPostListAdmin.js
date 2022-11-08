import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

const LFPostListAdmin = () => {
    const [posts,setposts]=useState([]);
    const [status,setStatus]=useState('true');
  let history = useHistory();
    useEffect(() => {
        Axios.get("http://localhost:3001/getLfposts").then((Response) =>{  
          setposts(Response.data);
        })        
      }, [])

    const updateStatus =(id)=>{
        Axios.put("http://localhost:3001/updateLfposts", {id});
        history.push("/lfPostListAdmin");
    }
    const deletePost =(id)=>{
        Axios.delete(`http://localhost:3001/deleteLfposts/${id}`)
    };
    return (  
        <div className="LFListAdmin">
             
            {posts.map((posts)=>(
                <div className="post-preview" key={posts._id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.content}</p>
                    <href>{posts.pic}</href>
                    <h2>{posts.date}</h2>
                    <button onClick={()=>updateStatus(posts._id)}>Approve</button>
                    <button onClick={()=>deletePost(posts._id)}>Delete</button>
                    
                    </div>
            ))}
        </div>
    );
}
 
export default LFPostListAdmin;