import { useState } from 'react'
import './App.css'

// Todo - 0. Skapa en fläckt
// Todo - 1. Ha 3 hastigheter
// Todo - 2. Ha swing function
// Todo - 3. timer
// Todo - 4. on/off

const OnOff = ({ isPower, setIsPower }) => {
  const handleClick = (e) => {
    isPower ? setIsPower(false) : setIsPower(true)
  }
  return <button onClick={handleClick}>On/Off</button>
}

// This is the fan
const Fan = () => {
  const [fanSpeed, setFanSpeed] = useState(1)
  const [isPower, setIsPower] = useState(false)

  return (
    <div>
      <FanSpeedLevel fanSpeed={fanSpeed} setFanSpeed={setFanSpeed} />
      <OnOff isPower={isPower} setIsPower={setIsPower} />
    </div>
  )
}

// This is the air-speed-level of the fan
const FanSpeedLevel = ({ fanSpeed, setFanSpeed }) => {
  const handleClick = (e) => {
    fanSpeed === 3 ? setFanSpeed(1) : setFanSpeed(fanSpeed + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>Speed</button>
      <span style={fanSpeed === 1 ? { color: 'red' } : { color: 'black' }}>
        1
      </span>
      <span style={fanSpeed === 2 ? { color: 'red' } : { color: 'black' }}>
        2
      </span>
      <span style={fanSpeed === 3 ? { color: 'red' } : { color: 'black' }}>
        3
      </span>
    </div>
  )
}

function App() {
  return (
    <div>
      <Fan />
    </div>
  )
}

export default App
