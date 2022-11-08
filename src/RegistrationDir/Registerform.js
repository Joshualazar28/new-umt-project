import React, { useState, useContext, useRef } from "react";
import { Link,useHistory } from "react-router-dom";
import Navbar from './NavBar';
import Form from 'react-bootstrap/Form'
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../App";
const Registerform = () => {
    const { state, dispatch } = useContext(UserContext);
// zeofix 
    const [form, setForm] = useState({
        name:"",
        email:"",
        password:"",
        confirmPass:"",
        userType:""
    
    })

    const {name, email, password, confirmPass, userType} = form
     const onChangeForm = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    
    // console.log(form.email.includes(''), '-form')
    // const [name, SetName] = useState('');
    // const [email, SetEmail] = useState('');
    // const [password, SetPassword] = useState('');
    // const [confirmPass, SetconfirmPass] = useState('');
    // const[userType,setUserType]=useState('student');
    const[error,setError]=useState('');
    const [emailErr, setemailErr] = useState('');
    const [passErr, setpassErr] = useState('');
    const [reqField, setReqField] = useState('');
    let history = useHistory();




    const HandleSubmit = (e) =>  {
    e.preventDefault();   
    console.log(name, email, password, confirmPass, userType)
    if(!name || !email || !password || !confirmPass || !userType)
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

        if(email.includes('umt.edu.pk'))
        {
           
            if(password  === confirmPass) 
            {
                console.log(`https://mamas.quest/register`,'`https://mamas.quest/register`')
                fetch(`https://mamas.quest/register`, {
                method: 'POST', // or 'PUT'
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                name, email, password, confirmPass, userType
                }),
                })
                .then((response) => response.json())
                .then((data) => {
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
                toast.success("sign up successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setTimeout(() => {
                history.push("/login");
                }, 3000);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            }
            else {
                toast.error("Password must be same");
                // setloading(false);
              }
           
          
        }
        else
        {
            toast.error("email must umt.edu.pk");
        }

  
        }
    
    }









    // const AddUserToDb=(e)=>{
    //     e.preventDefault();
    //     setUserType("student");
    //     // setError("");
    //     // setemailErr("");
    //     // setpassErr("");
    //     // setReqField("");
    //     if(name == "" || email == "" || password == "" || confirmPass =="")
    //     {
    //         setReqField("Required Field");
    //     }
    //     else if(password.length < 8 || confirmPass.length < 8)
    //     {
    //         setError("minimum password length is 8");
    //     }
    //     else if(password==confirmPass)
    //     {
    //         // history.push("/login");
    //         Axios.post("http://localhost:5000/register",
    //       {
    //         name,email,password,confirmPass,userType
           
    //       }).then((Response)=>{
    //       if(Response.data ==  true)
    //       {
    //           history.push("/login");
    //       }
          
    //       if(Response.data.errors != null)
    //         {
    //         setemailErr(Response.data.errors.email);
    //         setpassErr(Response.data.errors.password);
    //         }
    //       });

    //     }
    //     else
    //     {
            
    //         setError("Password not Matched");
    //     }
    // };

    return (

        <div className="form-content">
            <Navbar />
            <form onSubmit={HandleSubmit} className="form1">
                <div className="form-headings">
                    <h2>Let's get started today!</h2>
                </div>
                <div className="error">
                {reqField}
                </div>
                 <div className="register-inputs"> 
                    <label className="form-label">Name</label>
                    <input className="forminputs"
                        type="text"
                        // required
                        name='name'
                        placeholder='Enter your name here'
                         value={name} onChange={onChangeForm}
                        // onChange={(event) => {
                        //     SetName(event.target.value)
                        // }}
                    ></input>
                </div>
                <div className="error">
                        {emailErr}
                    </div>
                <div className="register-inputs">
                    <label className="form-label">Email</label>
                    <input className="forminputs"
                        type="email"
                        // required
                        name='email'
                        placeholder='jhon@umt.edu.pk'
                        value={email} onChange={onChangeForm}
                        // onChange={(event) => {
                        //     SetEmail(event.target.value)
                        // }}
                    ></input>
                    
                    {/* {email.includes('umt.edu.pk') ? <><p>email format @umt.edu.pk <p/></> :<><p>Invalid email</p></>} */}
                    {email.includes('umt.edu.pk') ? null  : <><p style={{color:"red"}}>email format @umt.edu.pk</p></> }
                </div>
                <div className="error">
                { passErr}
                {error}    
               </div>


                <div className="register-inputs">
                    <label className="form-label">Password</label>
                    <input className="forminputs"
                        type="password"
                        // required
                        // minLength="8"
                        name='password'
                        placeholder='Password'
                        value={password} onChange={onChangeForm}
                        // onChange={(event) => {
                        //     SetPassword(event.target.value)
                        // }}
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label"> Confirm Password</label>
                    <input className="forminputs"
                        type="password"
                        // required
                        // minLength="8"
                        name='confirmPass'
                        placeholder='Confirm Password'
                        value={confirmPass} onChange={onChangeForm}
                        // onChange={(event) => {
                        //     SetconfirmPass(event.target.value)
                        // }}
                    ></input>
                   
                </div>
                <div className="register-inputs">
                <Form.Select name="userType" className="forminputs"  style={{width:"450px", marginTop:"24px",marginLeft:"70px" }}  value={userType}  onChange={onChangeForm}  aria-label="Default select example"   >
                    <option>Role</option>
                    <option value="student">student</option>
                    <option value="Staff">Staff</option>
                    {/* <option value="Admin">Admin</option> */}
                  </Form.Select>
                  </div>
                    <button   className='Signup-butn' >
                        Sign Up
                    </button>
                <span className='form-input-login'>
                    <h5>Already have an account? Login</h5>
                    <Link to="/login"> here </Link>
                </span>
            </form>

            <ToastContainer />
        </div>
    );
}

export default Registerform;