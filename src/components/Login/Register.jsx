"use client"
import React, { useState } from 'react' 
import "./Login.css"
import user_icon from '../Assests/user.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/lock.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




const Register = () => {
    const navigate = useNavigate()
   const [RegData , setData]= useState({
      username:"",
      email:"",
      password:""

   })

   const handelChangee = (e)=>{
      const {name , value} = e.target;
        setData({
            ...RegData,
            [name]:value,
        })
    }

        const handelSubmitt = async(e) =>{
            e.preventDefault();
           try{
            console.log("FormData",RegData);

            const response = await axios.post('http://localhost:5005/users', RegData);

           console.log(response.data);

           navigate("/log");
            // console.log("submitted",RegData);

            // if(RegData.username === "hemanth" && RegData.email==="hemanthrshemu@gmail.com" && RegData.password==="123"){
            // alert("register sucessfully")
            // navigate("/log");
            // }
        // else 
        // {
        // alert("invalied")
        // }
         }
        
    catch(err){
        console.error('Error:', err.response.data)
        alert(`Error: ${err.response.data.error}`);

    }
}
   
  return (
  
    <div className='logbgm'> 
        {/* <img src={require("../Assests/bgm1 (2).jpg")} className='bgm' alt="" /> */}
        <div className='container' id='reg'>
      <div className='header'>
            <div className='text'>Register</div>
      </div>        
        <form className='inputs' onSubmit={handelSubmitt}>
                <div className='input'>
                    <img src={user_icon} alt='' />
                    <input type='text' name='username' value={RegData.username} onChange={handelChangee} placeholder='Username'/>
                </div>

                <div className='input'>
                    <img src={email_icon} alt='' />
                    <input type='email' name='email' value={RegData.email} placeholder='email' onChange={handelChangee} />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' name='password' value={RegData.password} onChange={handelChangee} placeholder='Password'/>
                </div>  
             <div className='submit-con'>
                <button className='btn'>Submit</button>
             </div>
        </form>
    </div>
          
    </div>
    

    
  );
};

export default Register;