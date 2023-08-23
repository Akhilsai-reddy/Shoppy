import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import ProductsApi from './DATA/ProductsApi';
import { cartActions } from './REDUX/cartSlice';
import { userContext } from './USERCONTEXT/UserContext';

const ProductPage = () => {
 const [product,setProduct]=useState([])

 const {user}=useContext(userContext);
 const dispatch=useDispatch()

   const {id}=useParams();
   useEffect(()=>{
      ProductsApi.getProductById(id).then(data=>setProduct(data))
      },[id])

      const handleClick=(id,name,price)=>{
        if(user){
         dispatch(
          cartActions.addToCart({
            id,
            name,
            price,
          })
         )
         alert('the item is added to the cart')
        }
        else{
          alert('please Login')
        }
       }

   if(product){
  return (
    <Container className='mt-5'>
        <Row>
         <Col/>
         <Col>
         <Card>
            <Card.Img variant='top' src={product.url} height='250px'/>
            <Card.Body className='text-center'>
                <Card.Title> <b>Name : </b>{product.name}</Card.Title>
                <Card.Text><b>Category : {product.category}</b></Card.Text>
                <Card.Text><b>Price : Rs. {product.price} /-</b></Card.Text>
            </Card.Body>
            <button className='btn btn-warning' onClick={()=>handleClick(product.id,product.name,product.price)}>Add To Cart</button>
            <Link to='/' className='text-center'>Back to home</Link>
         </Card>
         </Col>
         <Col/>
        </Row>
    </Container>
  )}
  else{
    return(
        <h1>getting the product please wait...</h1>
    )
  }
}

export default ProductPage