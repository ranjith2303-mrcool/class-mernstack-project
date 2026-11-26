import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  //const [Email, setEmail] = useState('')
  //const [Pass, setPass] = useState('')
  const [formdata,setFormdata]=useState(
    {username:'',
     password:''
  })
  const navigate=useNavigate();
  function handleChange(e) {setFormdata({
    ...formdata,[e.target.name]:e.target.value})
  }
  const handlesubmit=(event)=>{
  event.preventDefault();
  alert("Login Sucessfully")
  navigate("/Dashboard",{state:formdata})
  console.log("print the name for our refrence")
  console.log(formdata.username)
  console.log("print the Password for our refrence")
  console.log(formdata.Password)
  };
 /*function print() {
  console.log("print the Email for our refrence")
  console.log(Email)
  console.log("print the Password for our refrence")
  console.log(Pass) 
 }*/
 return (<form onClick={handlesubmit}>
    <div className="text-blue-700">HI</div>
    <input type="text" required placeholder="Enter UserName" name="username" value={formdata.username}onChange={handleChange} />   
    <input type="password" required placeholder="Enter Password" name="password" value={formdata.password}onChange={handleChange} />   
    {/*<button type="submit" onClick={() => console.log({Email, Pass})}>Submit</button>*/}
    <button type="submit">Submit</button>
  </form>
  );
}
export default Login