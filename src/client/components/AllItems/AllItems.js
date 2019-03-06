//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import '../../styles/Landing.css'
import { Card ,Image ,Icon  , Grid } from 'semantic-ui-react'
import path from "path"

//Internals
import PRODUCTS from '../../components - Copy/Data';

class AllItems extends React.Component
{ 

render()
{
    return (
        <Grid  className="segment centered" centered columns = {3} style={{border:"none" , backgroundColor:"transparent"}} >
        <Grid.Row centered style={{margin:"3% 0% 6% 6%"}}>
        {map(PRODUCTS, (product)=> (
            <Grid.Column >
    <Card key={product.id} style={{marginTop:"4%" , width:"65%"}}>
        <Image src= {require('../../img/' + product.img)} style={{height:"32vh" }} />
        <Card.Content >
          <Card.Header >{product.name}</Card.Header>
          <Card.Meta>{product.price}</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
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
