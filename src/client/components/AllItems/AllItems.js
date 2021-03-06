//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import '../../styles/Landing.css'
import { Card ,Image ,Icon  , Grid } from 'semantic-ui-react'
import path from "path"
import { FaPlus} from "react-icons/fa";
import {ToastsContainer, ToastsStore} from 'react-toasts';


class AllItems extends React.Component
{ 

  state = {
    hover: false,
  };


  toggleHover = () =>{
    this.setState({hover: !this.state.hover})
  }
render()
{
  var linkStyle;
  if (this.state.hover) {
    linkStyle = { float:"right" , cursor:"pointer"}
  } else {
    linkStyle = { float:"right" , cursor:"pointer"}
  }
    return (
        <Grid  className="segment centered" centered columns = {3} style={{border:"none" , backgroundColor:"transparent",marginLeft:"5%" ,boxShadow:"none"}} >
        <Grid.Row centered style={{margin:"3% 0% 6% 6%"}}>
        {map(this.props.product, (product)=> (
            <Grid.Column key={product.id}  style={{border:"none", boxShadow:"none"}}>
    <Card key={product.id} style={{marginTop:"4%" , width:"65%",boxShadow:"none"}}>
        <Image src= {require('../../img/' + product.img)} style={{height:"32vh" }} />
        <Card.Content>
          <Card.Header style = {{fontSize : "150%"}}>{product.name}</Card.Header>
          <Card.Description style = {{fontSize : "120%"}}>{product.color}
          <FaPlus style={linkStyle}  onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={() => this.props.moveToCart(product)} /></Card.Description>
          <ToastsContainer store={ToastsStore} position= "bottom_center" />
          <Card.Meta style = {{fontSize : "150%" , fontWeight: "bold"}}>${product.price}</Card.Meta>
        </Card.Content>
        
      </Card>
    </Grid.Column>
        ))}
        </Grid.Row>
      </Grid>
    )
}

 

}

export default AllItems;
