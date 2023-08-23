import React, { Component, Suspense } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './REDUX/Store';
import { Provider } from 'react-redux';
import UserContext from './USERCONTEXT/UserContext';
import RegisterForm from './USERFORMS/RegisterForm';
import ProductPage from './ProductPage';
import LoginForm from './USERFORMS/LoginForm';

const Home=React.lazy(()=>import('./Home'))
const Cart =React.lazy(()=>import('./CART/Cart'))


export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <UserContext>
        <Router>
        <Navbar/>
        <Suspense fallback={
            <h1 style={{ marginLeft: "30%", marginTop: "10%"}}>
              Getting things ready Please wait...
            </h1>
          }>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/register' element={<RegisterForm/>}/>
          <Route exact path='/Login' element={<LoginForm/>}/>
          <Route exact path='/product/:id' element={<ProductPage/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
          </Routes> 
          </Suspense> 
        </Router>
      </UserContext>
      </Provider>
    )
  }
}
