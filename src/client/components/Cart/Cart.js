import React from 'react';
import '../../styles/App.css'
import '../../styles/Header.css'
import 'react-sticky-header/styles.css';
import { withRouter } from 'react-router-dom';
import { Item  , Table } from 'semantic-ui-react'
import map from 'lodash/map';
import Header from '../Header/header'
import groupBy from 'lodash/map';


class CartComponent extends React.Component

{

    state ={
        recievedMessage : []
    }

    componentDidMount() {
        this.setState (
            {
                recievedMessage: this.props.location.state.cartItems
            })      
    }

    render(){

            const arr =  this.props.location.state.cartItems.map((element ) => element.id )
            let counts = arr.reduce(function(r,s){
            (!r[s])? r[s] = {name: s, count: 1} : r[s]['count']+=1;
            return r;
            }, {}),
            result = Object.keys(counts).map(function(k){ return counts[k]; });
            console.log(result );


            let set = new Set(this.props.location.state.cartItems);
            let myArr = [...set];
            

          myArr =   myArr.map((element) =>
        {
            let myItem = result.find(item => item.name === element.id)
            element.inCart = myItem.count
          return element

        })
        console.log(myArr)

        let sum =0;
        this.props.location.state.cartItems.map((element ) => {
            return  sum += element.price
        })
    return (     
        <div style={{alignContent:"center" ,alignItems:"center" ,  fontFamily: 'Varela Round'
    }}>
    <div style={{textAlign:"center" ,fontSize:"200%",paddingTop:"5%"}}>CART DETAILS</div>
        <Header cartState = {this.state.recievedMessage}  hasCart = {true} />
  <Table style={{padding:"5% 11% 11% 11%" , border:"none"}} columns={5}>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell className="ui center aligned header">Name</Table.HeaderCell>
        <Table.HeaderCell className="ui center aligned header">Color</Table.HeaderCell>
        <Table.HeaderCell className="ui center aligned header">Quantity</Table.HeaderCell>
        <Table.HeaderCell className="ui center aligned header">Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {map(myArr, (product)=> (
      <Table.Row key= {product.name}>
        <Table.Cell className="ui center aligned"><img style={{display:"inline-block"}} src= {require('../../img/' + product.img)} alt="no image"  height="100" width="100" /> 
        <span style={{display:"inline-block" , marginLeft: "3%"}}>
            <p style={{fontWeight:"bold" ,fontSize:"120%"}}>{(product.name).toUpperCase()} </p>
            <p style={{color:"#777" ,fontSize:"100%" , textAlign:"left"}}>{(product.type).toUpperCase()}</p>

        </span>
         </Table.Cell >
        <Table.Cell style={{color:"#777" ,fontSize:"120%" }} className="ui center aligned">{product.color}</Table.Cell>
        <Table.Cell style={{color:"#777" ,fontSize:"120%" }} className="ui center aligned">{product.inCart}</Table.Cell>
        <Table.Cell style={{color:"#777" ,fontSize:"120%" }} className="ui center aligned">
        ${(product.price).toFixed(2)}</Table.Cell>
      </Table.Row>
    ))}
    <Table.Row>
        <Table.Cell className="ui center aligned">
            </Table.Cell>
            <Table.Cell className="ui center aligned">
            </Table.Cell>
            <Table.Cell className="ui center aligned">
            </Table.Cell>
            <Table.Cell className="ui center aligned"  style={{fontWeight:"bold" , fontSize:"200%"}}>
            TOTAL : ${sum.toFixed(2)}
            </Table.Cell>
           
        </Table.Row>
    </Table.Body>
  </Table>
  <div>
      
  </div>
  </div>
    )
}
}

export default withRouter(CartComponent)