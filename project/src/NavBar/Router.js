import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./../inscription/Form"
import Message from "./../Home/Message"
import Nav from "./Nav"
import Show from './../Home/Show'
import Update from './../Home/Update'

export default function Router() {
  return (
  <BrowserRouter>
  <Nav />
  <Routes>       
     <Route exact  path="/"  element={<Message />}/>
     <Route exact  path="/inscription"  element={<Form/>} />
     <Route exact  path="/show/:id"  element={<Show />} />
     <Route exact  path="/update/:id"  element={<Update />} />
  </Routes>
  </BrowserRouter>
  )
}
