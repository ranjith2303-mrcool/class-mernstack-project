import { useState } from 'react'
function Login() {
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const formsubmit=(event)=>{
  event.preventDefault();
  console.log("print the Email for our refrence")
  console.log(Email)
  console.log("print the Password for our refrence")
  console.log(Pass)
};
  /*function print() {
  console.log("print the Email for our refrence")
  console.log(Email)
  console.log("print the Password for our refrence")
  console.log(Pass) 
}*/
return (<form onClick={formsubmit}>
    <div className="text-blue-700">HI</div>
    <input type="email" required placeholder="Enter Email" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />   
    <input type="password" required placeholder="Enter Password" name="password" value={Pass} onChange={(e) => setPass(e.target.value)} />   
    {/*<button type="submit" onClick={() => console.log({Email, Pass})}>Submit</button>*/}
    <button type="submit">Submit</button>
  </form>
  );
}
export default Login