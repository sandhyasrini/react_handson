//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import '../../styles/Landing.css'
import { Card ,Image ,Icon  , Grid } from 'semantic-ui-react'
import path from "path"
import { FaPlus} from "react-icons/fa";


class AllItems extends React.Component
{ 
render()
{
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
          <FaPlus onClick={() => this.props.moveToCart(product)} style={{float:"right" , cursor:"pointer" }}/></Card.Description>
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
