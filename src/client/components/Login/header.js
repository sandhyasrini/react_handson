import React from 'react';
import '../../styles/App.css'
import mainLogo from '../../img/trans.png'



function headerComponent ()
{
    return (
        <header style={{ position: "sticky"}}>
            <div>
                <ul>
                    <li>
                        <div>
                            <a href="#home" className="page-scroll img-responsive" style={{padding: 0}}> 
                            <img src={mainLogo} alt="Icon" style={{height:"3em"}}/>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default headerComponent