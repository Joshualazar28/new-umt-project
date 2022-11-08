import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import NavBar from './NavBar'
import Axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../App";
const LoginForm = () => {
    const { state, dispatch } = useContext(UserContext);
    const [formData, setFormData] = useState({
    email: "",
    password: "",
    });

    const { email, password } = formData;

    const onChangeLogin = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
    // const [emailErr, setemailErr] = useState("");
    // const [passErr, setpassErr] = useState("");
    const history = useHistory();
    
//    const checkUser = (e) =>{
//        e.preventDefault();
//        setemailErr("");
//         setpassErr("");
//        history.push("/notice-board");
//        // history.push("/admin");
//       // history.push("/staffHome");
//     // Axios.post("http://localhost:3001/userLogin",{email,password})
//     // .then((Response) =>{
//     //     if(Response.data.user != null)
//     //     {
//     //         if(Response.data.usertype == "student")
//     //         {
//     //             history.push("/notice-board");
//     //         }
//     //         else if(Response.data.usertype == "Admin")
//     //         {
//     //             history.push("/admin");
//     //         }
//     //         else if(Response.data.usertype == "Staff")
//     //         {
//     //             history.push("/staffHome");
//     //         }
//     //     }
//     //     if(Response.data.errors != null)
//     //     {
//     //         setemailErr(Response.data.errors.email);
//     //         setpassErr(Response.data.errors.password);
//     //     }
//     // })
//     // .catch((err) => {

//     // });

//    }

    const onSubmit = (e) => {
    e.preventDefault();

    if(!email || !password)
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
      console.log(`https://mamas.quest/userLogin`, 'dddd')
      fetch(`https://mamas.quest/userLogin`, {
  
      method: "post",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      email,
      password
      }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data,'data...')
          if (!data.success) {
            toast.error(data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            localStorage.setItem("jwt", data.token); // saving jwt Token in localStorage
            localStorage.setItem("user", JSON.stringify(data.user)); // // saving manager in localStorage
            dispatch({ type: "USER", payload: data.user }); // mangager data
            toast.success("sign in successful!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              history.push("/Home");
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }


  };
    return ( 
        <div className="form-content">
            <NavBar></NavBar>

            <form onSubmit={onSubmit} className="form">
             <div className="form-headings">
             <h2>Welcome to </h2>
            <h2>Student Assistance</h2>
                 </div>   
           
             <div className="form-inputs">
                 <label className="form-label" >Email</label>
                 <br></br>
                <input className="my-forminputs"
                type="email"
                name='email'
                value={email}
                placeholder ='Enter your email here'
                onChange = {onChangeLogin}
                 ></input>
             </div>
                {/* <div className="error">{emailErr}</div> */}
             <div className="form-inputs">
                 <label className="form-label" >Password</label>
                <input className="my-forminputs"
                type="password"
                name='password'
                value={password}
                placeholder='Password'
                onChange = {onChangeLogin}
                 ></input>
             </div>
             {/* <div className="error">{passErr}</div> */}
        <button className='Signup-butn'>
          Log In
        </button>
        
        <br></br>
            </form>
            <ToastContainer/>
        </div>

     );
}
 
export default LoginForm;   