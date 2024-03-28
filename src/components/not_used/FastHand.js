import React, { useState } from 'react'
import Square from './Square'
import '../App.css'
function FastHand() {
    const [touch, setTouch] = useState(0)
    const [second, setSecond] = useState(0)
    const fastHand = () => {
        if(touch === 0){
            setInterval(() => {
                setSecond(second => second + 1)
            }, 1);
        }
        setTouch(touch + 1)
    }
    const touchSec = (touch / second * 1000).toFixed(2)
  return (
    <div>
        <div className='content'>
        <Square num={second / 1000} desc={"Times"} color={'pink'} />
        <Square num={touchSec} desc={"Click/s"} color={'orange'}/>
        <Square num={touch} desc={"Score"} color={'green'}/>
        </div>
        <button className="touch" onClick={fastHand}>
            Touch here
        </button>
    </div>
  )
}

export default FastHand
