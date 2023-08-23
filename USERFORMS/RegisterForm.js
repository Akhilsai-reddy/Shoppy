import { ErrorMessage, Field, Form, Formik } from 'formik'
import *as yup from 'yup'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { saveUser } from '../DATA/UserApi'
// import UserApi from '../DATA/UserApi'


const RegisterForm = () => {

  return (
    
<Container className='text-center mt-5'> 
    
    <Row>
      <Col/>
      
      <Card style={{width:'25rem', boxShadow:'0px 12px 18px -6px rgba(0,0,0,0.7)'}} border='primary'>
        <Card.Title><h2>Registration Form</h2> 
        <hr/>
        </Card.Title>
          <Card.Body>
          <Formik
      initialValues={{
          FirstName:'',
          LastName: '',
          email: '',
          PhoneNumber:'',
          Password:'',
          Location:''
      }}
        validationSchema={
        yup.object().shape({
          FirstName:yup.string().required(),
          LastName:yup.string().required(),
          email:yup.string().email().required(),
          PhoneNumber:yup.string().min(10).max(10).required('Mobile number is required'),
          Password:yup.string().min(6,'password must be at least 6 characters').required(),
          Location:yup.string().required(),
        })
      }
      onSubmit={
          (values)=>{
          saveUser(values)
          alert('registration is completed please Login..');
          window.location.replace('/login')
          }
      }
      >
          <Form>
            <div className="form-group">
             <label htmlFor="FirstName"><i className='bi bi-person-fill'/> First Name  </label><br/>
             <Field type='text' name='FirstName' placeholder='Enter Product name'/>
             <span style={{color:'red'}}><ErrorMessage name="FirstName"/></span>
             </div>
             <div className="form-group">
             <label htmlFor="LastName"><i className='bi bi-person-fill'/> Last Name</label><br/>
             <Field type='text' name='LastName' placeholder='Enter LastName' min='1'/>
             <span style={{color:'red'}}><ErrorMessage name="LastName"/></span>
             </div>
             <div className="form-group">
             <label htmlFor="email">Email Id</label><br/>
             <Field type='email' name='email' placeholder='Enter email'/>
             <span style={{color:'red'}}><ErrorMessage name="email"/></span>
             </div>
             <div className="form-group">
             <label htmlFor="PhoneNumber">Phone Number</label><br/>
             <Field type='number' name='PhoneNumber' placeholder='Enter PhoneNumber'/>
             <span style={{color:'red'}}><ErrorMessage name="PhoneNumber"/></span>
             </div>
             <div className="form-group">
             <label htmlFor="Password">Password</label><br/>
             <Field type='password' name='Password' placeholder='Enter Password'/>
             <span style={{color:'red'}}><ErrorMessage name="Password"/></span>
             </div>
             <div className="form-group">
             <label htmlFor="Location">Location</label><br/>
             <Field type='text' name='Location' placeholder='Enter Location'/>
             <span style={{color:'red'}}><ErrorMessage name="Location"/></span>
             </div>
             <button className="btn btn-primary btn-sm" type='submit'>Submit</button>
          </Form>
      </Formik>
         </Card.Body>
         </Card>
         <Col/>
         </Row>
      </Container>
    )
}
  
  export default RegisterForm