import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router'

import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { API_URL } from '../App';
function AddUser() {


  let navigate = useNavigate()// Hook to navigate other component

  //To set formdata with null values.
  let [formData,setFormData] = useState({
    fullname:"",
      username:"",
      email:"",
      address:{
        street:"",
        suite:"",
        city:"",
        zipcode:"",
      geo:{
        lat:"",
        lng:""
      },
    }, 
      phone:"",
      website:"",
      company:{
        name:"",
        catchPhrase:"",
        bs:""
      }
  })


  //To handle changes on form field.
  const handleChange = (e)=>{
    let {name,value} = e.target

    setFormData((prevData)=>{
      let newData = {...prevData}
      let temp = newData;
      let keys = name.split(".")

      for(let i=0; i < keys.length-1;i++){
      if(!temp[keys[i]])
        temp[keys[i]] = {}
      
        temp = temp[keys[i]]
      
      }
      temp[keys[keys.length-1]] = value;
      return newData;
    })

  }

  //To handle addition of user in API.
  const handleAdd = async(e)=>{
    e.preventDefault()
    
    try {
      const res = await axios.post(`${API_URL}`,formData) //API Post method calling to add user
    } catch (error) {
      console.log(error)
    }
    navigate('/dashboard') //Navigate to dashboard once data added
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center fs-1'>Add User</h1>
       <Form onSubmit={handleAdd}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="fullname" value={formData.fullname} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"  name="username" placeholder="Enter Username" value={formData.username} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter Email" value={formData.email} onChange={(e)=>handleChange(e)} required/>
      </Form.Group>
      
      
      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Street</Form.Label>
          <Form.Control name="address.street" placeholder="Enter street" value={formData.address.street} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSuite">
          <Form.Label>Suite</Form.Label>
          <Form.Control name="address.suite" placeholder="Enter suite" value={formData.address.suite} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>City</Form.Label>
          <Form.Control name="address.city" placeholder="Enter city" value={formData.address.city} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control className='no-spinner' name="phone" value={formData.phone} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control  name="address.zipcode" value={formData.address.zipcode} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLat">
          <Form.Label>Latitude</Form.Label>
          <Form.Control name="address.geo.lat" value={formData.address.geo.lat} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLong">
          <Form.Label>Longitude</Form.Label>
          <Form.Control name="address.geo.lng" value={formData.address.geo.lng} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control className='no-spinner' name="company.name" value={formData.company.name} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridCatchPhrase">
          <Form.Label>Catch Phrase</Form.Label>
          <Form.Control  name="company.catchPhrase" value={formData.company.catchPhrase} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBs  ">
          <Form.Label>BS</Form.Label>
          <Form.Control name="company.bs" value={formData.company.bs} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control name="website" value={formData.website} onChange={(e)=>handleChange(e)} required/>
        </Form.Group>
      </Row>
      <div  className='d-flex justify-content-center'>
      <Button variant="primary"  type='submit'>
        Add User
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default AddUser
