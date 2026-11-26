import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Clients from './pages/Clients'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Calendar" element={<Calendar/>}/>
      <Route path="/Tasks" element={<Tasks/>}/>
      <Route path="/Settings" element={<Settings/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/Clients" element={<Clients/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App