import React from 'react'

const Micomponente = () => {

  const manejarClick = () => {
    console.log('Hiciste click');
  }
  return (
    <div>
      <button onClick={manejarClick}>Click</button>
    </div>
  );
}

export default Micomponente