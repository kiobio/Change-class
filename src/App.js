
import { useState } from 'react';
import './App.css';

function App() {
  const[blue, setBlue]= useState(true)
  console.log(blue)
  return (
    <div className="Body">
      <div className={blue ? "square blue" : "square green"}
      onClick={ () => setBlue(!blue) }
      >
        {blue ? "Blue" : "Green"}
      </div>
    </div>
  );
}

export default App;
