// 2a
import {useState} from 'react';


// 1a
function Exercise (){
    // 2c
    const [num, setNum] = useState (1);
    const addNum = () => setNum (num +1);

    // 1c
    return (
    <div>
        
        <button onClick = {()=> alert ("Congrats! You have clicked the button.")}>Click Here</button>
{/* 2b & 2e */}
        <button onClick = {addNum}>STATE</button>
        {/* 2f */}
        <h1>{num}</h1>
    </div>
    );
    }
    
    
    // 1b
    export default Exercise;