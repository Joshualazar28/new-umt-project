import { useState, useEffect } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import TEMiniNavBar from './TEMiniNavbar';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateTEPost = ({username}) => {
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [author, setAuthor] = useState('');
  let history = useHistory();

  // useEffect( () => {
  //   Axios.get("http://localhost:3001/getUserInfo").then((Response) => {
  //         setAuthor(Response.data.email);
  //       });
  // },[]);

  // const handleSubmit = (e) => {
  //   Axios.post("http://localhost:3001/insertTePosts", {title, body, author});
  //   history.push("/HomeTripsEvents");
  // }


  const [createPost, setcreatePost] = useState({
    title:"",
    content:"",
 
  })

  const [image,setImage] = useState("")
  const [url,setUrl] = useState("")

  console.log(url, 'url.....')
  const {title,content, photo } = createPost
  const HandlePost = (e) =>  setcreatePost({ ...createPost, [e.target.name]: e.target.value });
  console.log(createPost)




  useEffect(()=>{
    if(url){
     fetch(`$https://mamas.quest/inserTEfPosts`,{
         method:"post",
         headers:{
             "Content-Type":"application/json", 
             "Authorization":"Bearer "+localStorage.getItem("jwt")
         },
         body:JSON.stringify({
          title,
          content,
          photo:url
         })
     }).then(res=>res.json())
     .then(data=>{
      console.log(data, '-data')
  
        if(data.error){
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
           
        }
        else{
            // M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
            // history.push('/')
            toast.success(data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
                history.push('/HomeTripsEvents')
            }, 3000);
        }
     }).catch(err=>{
         console.log(err)
     })
  }
  },[url])


  const handleSubmit = (e) => {

    e.preventDefault();
    if(!title || !content )
    {

      toast.error("Please fill all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else
    {
     
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","joshualazar")
      data.append("cloud_name","vvork-cloud")
      fetch("https://api.cloudinary.com/v1_1/vvork-cloud/image/upload",{
          method:"post",
          body:data
      })
      .then(res=>res.json())
      .then(data=>{
         setUrl(data.url)
      })
      .catch(err=>{
          console.log(err)
      })
    }

    // Axios.post("http://localhost:3001/insertLfPosts", {title, body, author});
    // history.push("/HomeLostFound");
  }


  return (
    <div className="createparant">
      <NavBarHome username={username}/>
      <TEMiniNavBar/>
      <div className="create">
        <h2>Add a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="register-inputs">
            <label className="form-label">Post title:</label>
            <input className="forminputs" 
              type="text" 

              // required 
            name="title"
              value={title}
              onChange={HandlePost}
              placeholder='Enter Title'
            />
          </div>
          <div className="register-inputs">
            <label className="form-label">Post Content:</label>
            <input className="forminputs"
              type="text" 
              name="content"
              value={content}
              onChange={HandlePost}
            />
          </div>
          <div className="register-inputs">
            
            <Form.Group  controlId="formFile" className="mb-3">
        <Form.Label>Uplaod image</Form.Label>
        <Form.Control onChange={(e)=>setImage(e.target.files[0])}  type="file" />
      </Form.Group>
          </div>
          <div className="register-inputs">
            <label className="form-label">Post By:</label>
            <input className="forminputs"
              type="text" 
              required
              // onChange={(e) => setAuthor(e.target.value)} 
              readOnly value={username}/>
          </div>
          <button type='submit'>
            Add Post
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
 
export default CreateTEPost;