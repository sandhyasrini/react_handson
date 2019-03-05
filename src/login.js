import React from 'react';
import './App.css'


function loginComponent() {
    return ( <main style = {
            {
                margin: "5%"
            }
        } >
        <p style = {
            {
                paddingTop: "5%",
                fontWeight: "bold",
                fontSize: "25px",
                marginBottom: "0px"
            }
        } > Welcome Back </p> 
        <form style = {
            {
                padding: "5%"
            }
        } >
        <div className = "inputStyle" >
        <input type = "text"
        className = "inputText"
        required style = {
            {
                width: "90%",
                margin: "2%"
            }
        }
        /> 
        <span className = "floating-label" > E - MAIL ADDRESS </span>
         </div>

        <div className = "inputStyle" >
        <input type = "password"
        className = "inputText"
        required style = {
            {
                width: "90%",
                margin: "2%"
            }
        }
        /> 
        <span className = "floating-label" > PASSWORD </span>
        </div>

        <div style = {
            {
                float: "left",
                padding: "4%",
                color: "#666666"
            }
        } >
        <input type = "checkbox" /> Remember me 
        </div> 
        <button className = "button" > SIGN IN </button> 
        </form> 
        </main>
    )
}

export default loginComponent