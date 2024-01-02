
import React from 'react';
import { useSelector } from 'react-redux';

const BinaryVisualizer = () => {
  const result = useSelector((state) => state.binary.result);
  const array = useSelector((state) => state.binary.array);
  const left = useSelector((state) => state.binary.left);
  const right = useSelector((state) => state.binary.right);

  return (
    <div >
      <h2 style={{color:"gray"}}>Binary Search Visualization</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {array?.map((num, index) => (
      <div
        key={index}
        style={{
          border: '3px solid black',
          padding: '10px',
          margin: '4px',
          opacity: index < left || index > right ? '1' : '1',
          backgroundColor: (left !== null && right !== null && index >= left && index <= right) ? 'blue' : 'violet',
          cursor: index < left || index > right ? 'not-allowed' : 'pointer',
      
        }}
      >
        {num}
      </div>
    ))}
  </div>
  {result === -1 ? (
    <div style={{ color: 'green'}}>Not Found</div>
  ) : (
    <div style={{ color: 'green'}}>
      Element found at {result + 1}
    </div>
  )}
</div>
</div>
  );
};
export default BinaryVisualizer;




