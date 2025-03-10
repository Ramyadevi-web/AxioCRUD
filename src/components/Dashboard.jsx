import React,{useState,useEffect} from 'react'
import { API_URL } from '../App';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";  

import axios from 'axios';

function Dashboard() {

  let navigate = useNavigate()
 
   
  let [data,setData] = useState([])

   // To fetch the data from API first time alone.
   useEffect(()=>{
    getData()   
  },[])

  //Function to fetch data from API and display it on Dashboard.
  const getData = async ()=>{
    try {
      let res = await axios.get(`${API_URL}`)
      setData(res.data);
      
    } catch (error) {
      console.log(error)
    }
  }

  //Function to handle delete
  const handleDelete = async(e)=>{
     try {
      setData((prevData)=>prevData.filter((user)=>user.id!=e.id)) //Delete at local first
      const res = await axios.delete(`${API_URL}/${e.id}`) //API call to delete from server
      getData()
     } catch (error) {
      console.log(error)
     }
  }

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
       <h1 className='mx-auto'>User Profile</h1>
       <Button variant="primary" className='me-5' onClick={()=>navigate('/add-user')}>+Add User</Button> 
      </div>

      <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,index)=>{
            return(
             <tr key={e.id}>
              <td>{index+1}</td>
              <td>{e.fullname}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.address.city}</td>
              <td>{e.phone}</td>
              
              <td>{e.website}</td>
              <td>{e.company.name}</td>
              <td><CiEdit style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate(`/edit-user/${e.id}`)}/>&nbsp;&nbsp;<FaTrashAlt style={{color:"red",cursor:"pointer"}} onClick={()=>handleDelete(e)}/></td>
            </tr>
          )})
        }
      </tbody>
    </Table> 
    </div>
  )
}
// navigate('/edit-user')
export default Dashboard
