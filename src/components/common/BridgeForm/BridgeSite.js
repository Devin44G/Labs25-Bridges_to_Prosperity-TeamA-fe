import React from 'react';

function BridgeSite(props) {
  return (
    <>
      <h3 style={{ cursor: 'pointer' }}>{props.bridge.name}</h3>
      <button onClick={() => props.bridgeToEdit(props.bridge)}>Edit</button>
    </>
  );
}

export default BridgeSite;