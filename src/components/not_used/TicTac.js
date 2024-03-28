import React, { useState} from 'react'
import '../App.css'

function TicTac() {
  const [boxes, setBoxed] = useState(['', '', '', '','', '', '', '' ,''])

  return (
    <div>
      <div className="section-tictac">
        <div className="top">
          <div className="boxed"></div>
          <div className="boxed"></div>
          <div className="boxed"></div>
          <div className="boxed"></div>
          <div className="boxed"></div>
          <div className="boxed"></div>
          <div className="boxed"></div>
          <div className="boxed"></div>
        </div>
      </div>
    </div>
  );
};

export default TicTac