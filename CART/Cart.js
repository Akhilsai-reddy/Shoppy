import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { cartActions } from '../REDUX/cartSlice';

const Cart = () => {
  const itemList=useSelector((state)=>state.cart.items)
  const dispatch=useDispatch();
  let total=0;

  itemList.forEach(item => total+=item.totalPrice);
  const increment=(id,name,price)=>{
   dispatch(cartActions.addToCart({
    id,
    name,
    price
   }))
  }
  const decrement=(id)=>{
   dispatch(cartActions.removeFromCart(id))
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
        {itemList.map((item)=>
        <Card>
          <Card.Body>
          <b>{item.name}</b>&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
           <b>Price</b>: {item.price}&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;
           <b>Quantity</b> : {item.quantity}&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
           <b>Total</b>: {item.totalPrice}&emsp;&emsp;&emsp;&emsp;&emsp;
           <button className='btn btn-success btn-sm' onClick={()=>increment(item.id,item.name,item.price)}>+</button>&emsp;&emsp;&emsp;
           <button className='btn btn-warning btn-sm' onClick={()=>decrement(item.id)}>-</button>
          </Card.Body>
        </Card>)}
        <br/>
        <h4 className='text-center '> Total Bill: {total}<br/>
        <Link to='/' className='btn btn-outline-primary btn sm'>Continue shopping?</Link></h4>
        </Col>
      
      </Row>
    </Container>
  )
}

export default Cart