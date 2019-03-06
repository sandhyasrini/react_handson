//Dependencies
import React from 'react';
import Items from '../AllItems/AllItems'
import Header from '../Header/header'
import bgImage from '../../img/kaptain-bg.png'
class Landing extends React.Component
{ 

render()
{
    return (
        <div>
              <Header/>
        <div style={{
            background:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),url(" +bgImage+")",
            backgroundRepeat:"no-repeat",
            backgroundAttachment:"fixed",
            backgroundSize:"cover",
            backgroundPosition:"center"
        }}>
      <div>
          Your everyday Livingspace is all set with Kvell
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
       
       
       </div>
       <Items style ={{margin:"4%"}} />
       </div>
    )
}

 

}

export default Landing;
