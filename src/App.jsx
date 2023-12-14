import { useState } from 'react'
import Homepage from './Homepage'
import Employeepage from './Employeepage';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path ="/" element = {<Homepage />} />
      <Route path ="/employeepage/:employee" element = {<Employeepage/>} /> 
    </Routes>
    
    </>
  )
}

export default App