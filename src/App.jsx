import React from 'react'
import { useEffect,useState } from 'react';


import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
export const API_URL = "https://6553a36f5449cfda0f2efc2a.mockapi.io/api/axio"

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={ <Dashboard />}/>
        <Route path='/add-user' element={ <AddUser/>}/>
        <Route path='/edit-user/:id' element={ <EditUser  />}/>
        <Route path='/*' element={ <Dashboard />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
