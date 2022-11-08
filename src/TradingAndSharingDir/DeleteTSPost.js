import { useParams, useHistory } from 'react-router-dom';
import SHNavBarAdmin from '../Admin/SH-NavBarAdmin';
import { useState, useEffect } from "react";
import Axios from 'axios';
import TSMiniNavbar from './TSMiniNavbar';

const DeleteTSPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
  let history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:3001/getTsPost/${id}`).then((Response) =>{  
    setTitle(Response.data.title);
    setBody(Response.data.content);
    setAuthor(Response.data.author);
    })
  }, [])

  const DeletePost = (id) => {
    Axios.delete(`http://localhost:3001/deleteTsPost/${id}`);
    history.push("/SH-AdminUnderNav");
  }
    return (  
        <div className="deletePost">
           <TSMiniNavbar/>
           <div >
            <h3 className="posts_heading">Delete Post</h3>
            <br/>
            <br/>
            <div className="posts_detailPosts">
            <h3 className="posts_detailPosts_title">{title.toUpperCase()}</h3>
            <br/>
            <h5 className="posts_detailPosts_body">{body}</h5>
            <br/>
            <h6 className="posts_detailPosts_author">{author.toUpperCase()}</h6>
            <br/>
            <br/>
            <button className="posts_button" onClick={() => DeletePost(id)}>Confirm Delete</button>
            </div>
          </div>
        </div>
    );
}
 
export default DeleteTSPost;