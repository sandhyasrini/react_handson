import React from 'react';
import './App.css'
import mainLogo from './trans.png';



function headerComponent ()
{
    return (
        <header>
            <div>
                <ul>
                    <li>
                        <div>
                            <a href="#home" className="page-scroll img-responsive" style={{padding: 0}}> 
                            <img src={mainLogo} alt="Icon" width="100" height="50" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default headerComponent