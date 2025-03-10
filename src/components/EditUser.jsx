import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { API_URL } from '../App';
import axios from 'axios';

function EditUser() {

  let {id} = useParams()
  let navigate = useNavigate()


//Fetch selected user details from API when edit icon clicks
useEffect ( ()=>{
  const fetchUser = async()=>{
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      let userData = res.data
        
    //Set selected user details in edit form using state
      setName(userData.fullname)
      setUserName(userData.username)
      setEmail(userData.email)
      setStreet(userData.address.street)
      setSuite(userData.address.suite)
      setCity(userData.address.city)
      setPhone(userData.phone)
      setZipcode(userData.address.zipcode)
      setLat(userData.address.geo.lat)
      setLng(userData.address.geo.lng)
      setCompanyName(userData.company.name)
      setCatchPhrase(userData.company.catchPhrase)
      setBs(userData.company.bs)
      setWebsite(userData.website)
    } catch (error) {
      console.log(error)
    }
  }
  fetchUser()
},[id])

   
 //state created with null values.
      let [fullname,setName] = useState("")
      let [username,setUserName] = useState("")
      let [email,setEmail] = useState("")
      let [catchPhrase,setCatchPhrase] = useState("")
      let [city,setCity] = useState("")
      let [phone,setPhone] = useState("")
      let [companyName,setCompanyName] = useState("")
      let [website,setWebsite] = useState("")
      let [bs,setBs] = useState("")
      let [zipcode,setZipcode] = useState("")
      let [street,setStreet] = useState("")
      let [suite,setSuite] = useState("")
      let [lat,setLat] = useState("")
      let [lng,setLng] = useState("")


  const handleUpdate = async (e)=>{
    e.preventDefault();
    try {
      let res = await axios.put(`${API_URL}/${id}`,{
        fullname,
        username,
        email,
        phone,
        website,
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: { lat, lng },
        },
        company: {
          name: companyName,
          catchPhrase,
          bs,
        }
      })
     navigate('/')
    } catch (error) {
      console.log(error.response)
    }
    
  }

  return (
    <div className='container mt-5'>
    <h1 className='text-center fs-1'>Edit User</h1>
     <Form onSubmit={handleUpdate}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="fullname" defaultValue={fullname} onChange={(e)=>setName(e.target.value)} required/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"  name="username" defaultValue={username} onChange={(e)=>setUserName(e.target.value)} required/>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"  name="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} required/>
    </Form.Group>
    
    
    <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Street</Form.Label>
        <Form.Control name="street"  defaultValue={street} onChange={(e)=>setStreet(e.target.valuer)} required/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridSuite">
        <Form.Label>Suite</Form.Label>
        <Form.Control name="suite"  defaultValue={suite} onChange={(e)=>setSuite(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>City</Form.Label>
        <Form.Control name="city"  defaultValue={city} onChange={(e)=>setCity(e.target.value)} required/>
      </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control className='no-spinner' name="phone" defaultValue={phone} onChange={(e)=>setPhone(e.target.value)} required/>
      </Form.Group>


      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control  name="zipcode" defaultValue={zipcode} onChange={(e)=>setZipcode(e.target.value)} required/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLat">
        <Form.Label>Latitude</Form.Label>
        <Form.Control name="lat" defaultValue={lat} onChange={(e)=>setLat(e.target.value)} required/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLong">
        <Form.Label>Longitude</Form.Label>
        <Form.Control name="lng" defaultValue={lng} onChange={(e)=>setLng(e.target.value)} required/>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCompanyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control className='no-spinner' name="companyName" defaultValue={companyName} onChange={(e)=>setCompanyName(e.target.value)} required/>
      </Form.Group>


      <Form.Group as={Col} controlId="formGridCatchPhrase">
        <Form.Label>Catch Phrase</Form.Label>
        <Form.Control  name="catchPhrase" defaultValue={catchPhrase} onChange={(e)=>setCatchPhrase(e.target.value)} required/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridBs  ">
        <Form.Label>BS</Form.Label>
        <Form.Control name="bs" defaultValue={bs} onChange={(e)=>setBs(e.target.value)} required/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Control name="website" defaultValue={website} onChange={(e)=>setWebsite(e.target.value)} required/>
      </Form.Group>
    </Row>
    <div  className='d-flex justify-content-center'>
    <Button variant="primary"  type='submit'>
      Update User
    </Button>
    </div>
  </Form>
  </div>
  )
}


export default EditUser
