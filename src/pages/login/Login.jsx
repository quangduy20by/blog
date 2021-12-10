import {Link} from "react-router-dom";
import "./login.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const apidt = 'https://61a9984633e9df0017ea3e6d.mockapi.io/api/v1/login'
    const Login =() => {
        const [api, setapi] = useState('')
        useEffect(() => { 
            axios.get(apidt).then((res)=>
            setapi(res.data)
        
            )
        },[])
        console.log(api)
    
    const [userName, setUserName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const changeUsername = (e) => {
          const { value } = e ?.target;
          setUserName(value);
        };
      
        const changePassword = (e) => {
          const { value } = e?.target;
          setPassword(value);
        };
      
        const changeEmail = (e) => {
          const { value } = e?.target;
          setEmail(value);
        };

    const submit = (event) => {
        axios.post(apidt,{
            userName,
            email,
            password
        })
        event.preventDefault();
        alert('okokokokokok')
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
            <label>UserName</label>
                <input 
                type="text" 
                className="loginInput" 
                placeholder="Enter your usename..."
                value={userName}
                onChange={changeUsername}
                />
                <label>Email</label>
                <input 
                type="text" 
                className="loginInput" 
                placeholder="Enter your email..."
                value={email}
                onChange={changeEmail}
                />
                <label>Password</label>
                <input 
                type="password" 
                className="loginInput" 
                placeholder="Enter your password..."
                value={password}
                onChange={changePassword}
                />
                <button className="loginButton" onClick={submit} type="submit">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}


export default Login;


// const submit = async () => {
//     try {
//       const response = await axios.get(
//         `https://61a9984633e9df0017ea3e6d.mockapi.io/api/v1/blog`,
//         {
//           userName,
//           email,
//           password,
//         }
//       );
//       if (response) {
//           console.log(response);
//         const { status } = response;
//         if (status === 201 || status === 200) {
//           setPassword("");
//           setUserName("");
//           setEmail("");
//           alert("Login success");
//           return;
//         }
//         alert("Error");
//       }
//       alert("Error");
//     } catch (error) {
//       alert(error);
//     }
//   };