import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    //function displaydata(){
    //    setUserdata(location.state);
     //   console.log(userdata)
   // } 
   useEffect(()=>{
    setUserdata(location.state)
   },[])  
 const checkendpoint   =async()=>{
    const response=await API.get("/api/get");
    console.log(response.data);
}

    return ( 
        <>
              <h2>Dash Board</h2>
              <button>{userdata.username}</button><br/>
              <button>{userdata.password}</button><br/>
              <button onClick={checkendpoint}>Check API</button>
        </>
     );
}
export default Dashboard;