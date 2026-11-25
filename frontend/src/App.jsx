import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Projects from './pages/projects'
import Tasks from './pages/tasks'
function App() {
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/> 
        <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
