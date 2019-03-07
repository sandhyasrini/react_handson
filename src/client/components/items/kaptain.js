//Dependencies
import React from 'react';
import Items from '../AllItems/AllItems'
import Header from '../Header/header'
import bgImage from '../../img/kaptainBG.png'
import scrollToComponent from 'react-scroll-to-component';
import { FaArrowCircleDown} from "react-icons/fa";
import PRODUCTS from '../../components - Copy/Data';


class Landing extends React.Component
{ 

     filterItem = PRODUCTS.filter((element) => {
        return element.type == "chair"
    })

render()
{
    return (
<div>
    <Header/>
    <div ref={(section) => { this.intro = section; }} style={{
    background:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),url(" +bgImage+")",
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"fixed",
    backgroundSize:"cover",
    backgroundPosition:"center"
    }}>
    <div style={{textAlign:"center" ,padding:"8%" ,color:"#fff" ,fontSize:"200%" }}>
    <div style={{padding:"2% 23% 2% 23%" ,margin:"8%"}}>
    <div style={{background:"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),transparent", padding:"2%"}}>
    <div style={{border:"1px solid white" , padding:"6%" ,fontFamily:"'Quicksand', sans-serif"}}>
    KAPTAIN
    <br />
    <p style={{fontSize:"60%" ,paddingTop:"4%"}}>A fresh, modern take on the traditional captain chair, Kaptain is a versatile piece suited to both living and dining spaces.
    </p>
    </div>
    </div>
    </div>
    <FaArrowCircleDown style={{cursor:"pointer" ,marginTop:"-2%"}} onClick={() => scrollToComponent(this.items, { offset: 0, align: 'top', duration: 1500})} />

    </div>

    </div>
    <Items product = {this.filterItem} ref={(section) => { this.items = section; }} style ={{margin:"5%" , marginLeft:"3%"}} />
</div>
    )
}

 

}

export default Landing;
