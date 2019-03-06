import React from 'react';
import '../../styles/App.css'


function subscribeComponent ()
{
    return (
        <div className="main">
            <p style = { {
                fontWeight: "bold",
                fontSize: "30px",
                color:"#EDBC43"
            }}>Join Mailing List..
            </p>
            <p style = {{
                padding: "5%",
                fontWeight: "bold",
                fontSize: "17px",
                color:"#fff"
            }}>TREAT YOURSELF WITH WEEKLY PRODUCT 
RELEASES, DIGITAL LOVE, AND EXCLUSIVE DEALS.</p>

<div className = "inputStyle" style={{padding: "0" ,display : "inline-block"}}>
                <input type = "text"
                name = "username"
                required style = {
                    {
                        width: "100%",
                        margin: "2%",
                        marginLeft:"-2%"
                    }
                }
                /> 
                <span className = "floating-label" > E - MAIL ADDRESS </span>
                 </div>
                 <button className = "buttonsubscribe"  style={{display : "inline-block"}}> GO </button> 

                 

        </div>
    )
}

export default subscribeComponent