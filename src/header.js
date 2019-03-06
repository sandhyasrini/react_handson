import React from 'react';
import './App.css'


function headerComponent ()
{
    return (
        <header style={{ position: "sticky"}}>
            <div>
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li style={{float:"right"}}><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default headerComponent