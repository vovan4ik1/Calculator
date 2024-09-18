import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput ]= useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Помилка');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
    <div className='calculator'>
      <div className="calculator-display">{input || '0'}</div>
      <div className="calculator-buttons">
        <button className="button-C" onClick={() => handleButtonClick('C')}>
          C
        </button>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'].map(
          (btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          )
        )}
      </div>
    </div>
    </>
  );
}

export default App
