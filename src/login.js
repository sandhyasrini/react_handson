import React,{ Component } from 'react';
import './App.css'


class loginComponent extends Component {
    constructor(){
        super()
        this.state = {
            username :"" ,
            password:"",
            rememberMe: false
    }
    }

handleChange = (event) => {
    const {name , value , checked , type} = event.target;

    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}

    render(){    
            return ( <main style = {{ margin: "5%"}} >
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
                onChange = {this.handleChange}
                value = {this.state.username}
                name = "username"
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
                onChange = {this.handleChange}
                value = {this.state.password}
                name = "password"
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
                        color: "#aaaaaa"
                    }
                } >
                <input type = "checkbox" 
                checked = {this.state.rememberMe}
                name= "rememberMe"
                onChange = {this.handleChange}
                /> Remember me 
                </div> 
                <button className = "button" > SIGN IN </button> 
                </form> 
                </main>
            )
}
}

export default loginComponent