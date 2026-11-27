import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
function Login() {
  const [logindata,setLogindata]=useState({
    username:"",
    password:""
  })
  const navigate=useNavigate();
const location=useLocation();
    function handleChange(e){
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
    })
  }
  function handlesubmit(event) {
    event.preventDefault()
    const registerdata = location.state;
    console.log("Login Page:", logindata);
    console.log("Registration Page:", registerdata);
    if (
  registerdata &&
  logindata.username === registerdata.email &&
  logindata.password === registerdata.password
) {
  navigate("/dashboard", {
    state: logindata
  });
} else {
  alert("Invalid Email or Password");
}
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handlesubmit} className="w-full max-w-md flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-sm font-medium text-gray-700">Email</label><br/>
        <input type="text" placeholder="Enter username"  name="username" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-blue-200"/></div>
        <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
        <input type="password" placeholder="Enter password"  name="password" required onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200">Login</button>
      </form>
    </div>
  )
}
export default Login