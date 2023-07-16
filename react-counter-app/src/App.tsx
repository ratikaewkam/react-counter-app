import React, { useState } from 'react';
import './App.css';

function App() {
  const [point, setPoint] = useState(0);

  let increasePoint = () => {
    setPoint(point + 1);
  }

  let decreasePoint = () => {
    setPoint(point - 1);
  }

  let resetPoint = () => {
    setPoint(0);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">React Counter App</span>
      </nav>
      <div className="container-fluid mt-5">
        <div className='row d-flex justify-content-center'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Counter App</h5>
              <h6 className="card-subtitle mt-2 mb-2 text-muted">Point: {point}</h6>
              <div className="btn-group mt-3" role="group" aria-label="Button Group">
                <button type="button" className="btn btn-primary" onClick={increasePoint}>+</button>
                <button type="button" className="btn btn-danger" onClick={decreasePoint}>-</button>
                <button type="button" className="btn btn-success" onClick={resetPoint}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
