import { useState } from "react";
function Calendar() {
    const [date,setDate]=useState(" ")
    return ( <>
        <div className="text-violet-400">Welcome to Calander<br></br>
        <h1>Select a date!!!!!</h1>
        <input type="datetime-local" required placeholder="Enter date" value={date} onChange={(e) => setDate(e.target.value)}/> <br></br>
        <button type="submit">Submit</button>
    </div>
    </>
     );
}

export default Calendar;