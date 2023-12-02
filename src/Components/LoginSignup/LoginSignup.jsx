import React, { useState } from 'react'
import "./LoginSignup.css"

export const LoginSignup = () => {

    const [action,setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action==="Login"?<div/>: <div className="input">
                    <i className="fa-solid fa-user" />
                    <input type="text" placeholder='Name'required />
                </div>}

               

                <div className="input">
                    <i className="fa-solid fa-envelope" />
                    <input type="email" placeholder='Email'  required/>
                </div>

                <div className="input">
                    <i className="fa-solid fa-lock" />
                    <input type="password" placeholder='Password' required />
                </div>

            </div>
        {action==="Sign Up"? <div/> :<div className="forgot-password">Lost Password?  <span>Click Here!</span> </div>}
            

            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Log in</div>
            </div>


        </div>
    )
}
