import React,{ Component } from 'react';
import '../../styles/App.css'
import { withRouter } from 'react-router-dom';



class loginComponent extends Component {
    constructor(){
        super()
        this.state = {
            username :localStorage.userName || "" ,
            password:localStorage.password|| "",
            rememberMe: localStorage.checkBoxValidation || false
    }
    }

handleChange = (event) => {
    const {name , value , checked , type} = event.target;

    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}

handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.rememberMe )
    {
        localStorage.userName = this.state.username;
        localStorage.password =this.state.password;
        localStorage.checkBoxValidation = this.state.rememberMe;
    }
    else{
        localStorage.removeItem("userName");
        localStorage.removeItem("password");
        localStorage.removeItem("checkBoxValidation");
        
    }
    (this.state.username === "user@wipro.com" && this.state.password === "wipro@123" ) ?this.props.history.push('/subscribe') : alert("Unable to log in")
}

    render(){    
            return ( <main style = {{ margin: "15%"}} >
            {}
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
                <button className = "button" onClick={this.handleSubmit}> SIGN IN </button> 
                </form> 
                </main>
            )
}
}

export default withRouter(loginComponent)