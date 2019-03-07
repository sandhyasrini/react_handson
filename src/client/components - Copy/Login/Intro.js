import React, { Component } from 'react';
import '../../styles/App.css';
import Header from '../Login/header'
import Login from '../Login/login'
import bgImage from '../../img/kaptain-bg.png'
import { FaFacebookF , FaTwitter ,FaInstagram } from "react-icons/fa";



class Intro extends Component {
  render() {
    return (
        
            <div className ="col-md-6 title">
                <p style={{  fontWeight : "bold"}} >PROUDLY DESIGNED FOR EVERYDAY LIVING</p>
                <p style={{fontSize: "50%" ,padding:"2%" , margin:"2%" ,textAlign : "justify"}}>Kvell was born from the desire to make contemporary and functional design attainable to everyone. We believe your home should make you proud whether enjoyed alone, or with company. Meaningful design is not only how something looks but how you connect with it in everyday living</p>
                <p style={{fontSize: "50%" ,padding:"2%" , margin:"2%" , color:"#EDBC43" }}> FOLLOW US! <FaFacebookF style={{cursor:"pointer"}}/><FaTwitter style={{cursor:"pointer"}}/> <FaInstagram style={{cursor:"pointer"}}/></p>
            </div>
    );
  }
}

export default Intro;

