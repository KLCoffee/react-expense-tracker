import MCUShows from "./mcu-shows/MCUShows";
import {useState} from 'react';


const releaseDates ={
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
}

const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
 ];

function App() {
  const [index, setIndex] = useState(mcuCharacters[0]);
  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <MCUShows dates = {releaseDates}/>
      {/* <MCUShows ranCharacters={mcuCharacters} /> */}
      <h1>Random MCU Character:</h1>
    </div>
  );
}

export default App;
