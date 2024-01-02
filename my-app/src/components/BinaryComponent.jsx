
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setresult, settarget, setInputArray, setleft, setright } from '../redux/binarySearchSlice';
import BinaryVisualizer from './BinaryVisualizer';

const BinaryComponent = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [result, setResult] = useState(null);
  const [executionTime, setExecutionTime] = useState(null);
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    const value = e.target.value.split(',').map(Number)
    setArray(value)
    dispatch(setInputArray(value))

  }
  const binarySearch = async () => {
    const startTime = performance.now();
    let left = 0;
    dispatch(setleft(left))
    let right = array.length - 1;
    dispatch(setright(right))

    while (left <= right) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mid = Math.floor((left + right) / 2);


      if (array[mid] === target) {
        setResult(mid);
        dispatch(setleft(mid));
        dispatch(setright(mid));
        dispatch(setresult(mid))
        const endTime = performance.now();
        setExecutionTime(endTime - startTime);
        return;
      } else if (array[mid] < target) {
        left = mid + 1;

        dispatch(setleft(left))
      } else {
        right = mid - 1;
        dispatch(setright(right))
      }
    }

    dispatch(setresult(-1))
    const endTime = performance.now();
    setExecutionTime(endTime - startTime);
  };

  return (
    <div >
      <h1 style={{color:"brown"}}>Binary Search</h1>
      <div  style={{marginLeft:"20px"}}>
        <label>
          Enter numbers
          <input
            type="text"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <br />
      <div style={{marginLeft:"20px"}}>
        <label>
          Number to be searched:
          <input
            type="text"
            value={target}
            onChange={(e) => {
              setTarget(Number(e.target.value));
              dispatch(settarget(target))
            }}
          />
        </label>
      </div>
      <br />
      <button  style={{marginLeft:"230px"}}onClick={binarySearch}>Search</button>
      <br />
      {executionTime !== null && <p>Execution Time: {executionTime.toFixed(2)} milliseconds</p>}
    </div>
  );
};

export default BinaryComponent;


