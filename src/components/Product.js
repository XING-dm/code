import React from 'react'
import './style/Product.css'

function Product() {
  return (
    <div className='container'>
        <div className="search">
            <label htmlFor="">
                <input type="search"/>
                <button>Search</button>
        </label>
    </div>
        <div className="dup-side">
            <div className="side-1">
                <h2>side-1</h2>
            </div>
            <div className="side-2">
                <h2>Side-2</h2>
            </div>
        </div> 
    </div>
  )
}

export default Product
