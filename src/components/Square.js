import React from 'react'
import '../App.css'
function Square({num, desc, color}) {
  return (
    <div className={'square '+ color}>
      <h1>{num}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Square
