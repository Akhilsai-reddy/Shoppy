import React, { useContext, useEffect, useState } from 'react'
import {Card, Container } from 'react-bootstrap'
import ProductsApi from './DATA/ProductsApi'
import './CSS/Home.css'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { cartActions } from './REDUX/cartSlice'
import { userContext } from './USERCONTEXT/UserContext'

const Home = () => {
  const {user}=useContext(userContext)
  const[products,setProducts]=useState([])
  const dispatch=useDispatch()

  useEffect(()=>{
   ProductsApi.getAllProducts((data)=>setProducts(data))
  },[])

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
  if(products.length>0){
     return (
    <Container className='products mt-5 text-center'>
      {products.map((product,index)=><Card key={index} style={{width:'18rem'}}>
        <Card.Title>{product.name}</Card.Title>
         <Card.Body >
         <Link to={'/product/'+product.id}><img src={product.url} alt={product.name} width='200px' height='200px'/>
         </Link>
         <br/>
         <b> Rs. {product.price}/-</b><br/>
         </Card.Body>
         <button className='btn btn-warning' onClick={()=>handleClick(product.id,product.name,product.price)}>Add to Cart</button>
      </Card>)}
    </Container>
  )
}
else{
  return<h1 className='text-center'>Loading...........</h1>
}
}

export default Home