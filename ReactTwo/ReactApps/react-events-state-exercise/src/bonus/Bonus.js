// 3a
import {useState} from 'react';

// 3b
function Bonus(){
    // 3d
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 3f
    const [nextLetter, setLetter] = useState (0);
    // 3e
    return (
        <div>
            {/* 3f */}
            <h1>{letters[nextLetter]}</h1>
            <button onClick= {() => setLetter(nextLetter +1)}>NEXT LETTER</button>
        </div>
    );
}



// 3c
export default Bonus;