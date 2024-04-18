import React, { useState } from 'react'
import './style/Product.css'


function Product() {

  const [mode_type, setMode] = useState('light')

  const darkmode_solih = () => {
    setMode(mode_type === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`container ${mode_type}`}>
      <div className="search">
        <label htmlFor="">
          <input type="search"/>
          <button>Search</button>
        </label>
        <div className="dark-con">
          <button onClick={darkmode_solih}>Dark and white</button>
        </div>
      </div>
      <div className="dup-side">
        <div className="side-1">
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
          <img src="react.png" alt="" />
        </div>
        <div className="side-2">
          <h2>Side-2</h2>
        </div>
      </div>
    </div>
  )
}

export default Product