import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
function App() {
  const [firstValue, setFirstValue] = useState([]);
  const [secondValue, setSecondValue] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(false);
  const [symbals, setSymbals] = useState('');

  const handlerFun = (value) => {
    console.log(value);
    if (status) {
      secondValue.push(value);
    } else {
      firstValue.push(value);
    }
  };

  const subit = (e) => {
    e.preventDefault();
    var fTotal = firstValue.join('');
    var sTotal = secondValue.join('');
    console.log(fTotal);
    console.log(sTotal);

    if (symbals == '+') {
      setTotal(Number(fTotal) + Number(sTotal));
    } else if (symbals == '-') {
      setTotal(Number(fTotal) - Number(sTotal));
    } else if (symbals == '*') {
      setTotal(Number(fTotal) * Number(sTotal));
    } else if (symbals == '/') {
      setTotal(Number(fTotal) / Number(sTotal));
    } else if (symbals == '%') {
      setTotal(Number(fTotal) % Number(sTotal));
    }
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  console.log('total', total);

  return (
    <div className="col-md-6 mx-auto main ">
      <div className="card secDev">
        <h1 className="heading">CALCULATOR</h1>
        <div>
          {' '}
          <button
            className="m-4"
            value={'0'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            0
          </button>
        </div>
        <div>
          <button
            value={'1'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            1
          </button>
          <button
            value={'2'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            2
          </button>
          <button
            value={'3'}
            onClick={(e) => {
              console.log(e);
              handlerFun(e.target.value);
            }}
          >
            3
          </button>
        </div>
        <div>
          <button
            value={'4'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            4
          </button>
          <button
            value={'5'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            5
          </button>
          <button
            value={'6'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            6
          </button>
        </div>
        <div>
          <button
            value={'7'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            7
          </button>
          <button
            value={'8'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            8
          </button>
          <button
            value={'9'}
            onClick={(e) => {
              handlerFun(e.target.value);
            }}
          >
            9
          </button>
        </div>
        <div>
          <button
            value="+"
            onClick={(e) => {
              setStatus(true);
              console.log(e.target.value);
              setSymbals(e.target.value);
            }}
          >
            +
          </button>
          <button
            value="-"
            onClick={(e) => {
              setStatus(true);
              console.log(e.target.value);
              setSymbals(e.target.value);
            }}
          >
            -
          </button>
          <button
            value="*"
            onClick={(e) => {
              setStatus(true);
              console.log(e.target.value);
              setSymbals(e.target.value);
            }}
          >
            *
          </button>
          <button
            value="/"
            onClick={(e) => {
              setStatus(true);
              console.log(e.target.value);
              setSymbals(e.target.value);
            }}
          >
            /
          </button>
          <button
            value="%"
            onClick={(e) => {
              setStatus(true);
              console.log(e.target.value);
              setSymbals(e.target.value);
            }}
          >
            %
          </button>
        </div>
        <div>
          <button onClick={subit}>OK</button>
        </div>
        <h1>Total:{total}</h1>
      </div>
    </div>
  );
}
render(<App />, document.getElementById('root'));
