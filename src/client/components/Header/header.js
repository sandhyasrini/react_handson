import React from 'react';
import '../../styles/App.css'
import '../../styles/Header.css'
import mainLogo from '../../img/trans.png'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { FaShoppingCart} from "react-icons/fa";
import { withRouter } from 'react-router-dom';


class headerComponent extends React.Component

{


    componentDidMount()
    {
        this.setState({
            cartState : this.props.cartState
            
        })
    }

    handleCheck = (val) => {
        this.props.history.push( {pathname: '/' +val , state: {cartItems : this.props.cartState}}) 
    }
    gotoCart = () => {
        this.props.history.push({pathname : '/cart' , state: {cartItems : this.props.cartState}})
    }


    
    render(){


    return (
        
        <StickyHeader
        header={
            <header style={{ position: "sticky"}}>
         <ul style={{width:"100%"}}>
             <li onClick ={() => this.handleCheck("home")}>
                 <div>
                     <a href="#home" className="page-scroll img-responsive" style={{padding: 0}}> 
                     <img src={mainLogo} alt="Icon" style={{height:"3em"}}/>
                     </a>
                 </div>
             </li>
             <li className="li-style" onClick ={() => this.handleCheck("kaptain")}>Kaptain</li>
             <li className="li-style" onClick ={() => this.handleCheck("pop")}>Pop</li>
             <li className="li-style" onClick ={() => this.handleCheck("nordik")}>Nordik</li>
             <li className="li-style" onClick ={() => this.handleCheck("stax")}>Stax</li>
             <li className = {this.props.hasCart ? "hide" : "show"} style={{float:"right" , marginTop:"1.5%" , marginRight:"2%" , color:"white",cursor:"pointer"}}>
             <FaShoppingCart  onClick ={() => this.gotoCart()}/>
             <span style ={this.props.cartState.length > 0 ? { display:'inline-block'} : {display : 'none'}}>
             <span style={ { backgroundColor:"red" , color:"#fff" ,borderRadius:"50%" , fontSize:"60%" , padding:"10%" , paddingLeft:"25%" , paddingRight:"25%"}}>{this.props.cartState.length > 0 ? this.props.cartState.length : null}</span>
             </span>
             </li> 
         </ul>
     </header>
        }
      >
      </StickyHeader>
    )
}
}

export default withRouter(headerComponent)