import { useState } from 'react';
import './Contador.css'

const Contador = props => {
  const [ number, setNumber ] = useState(props.number || 0)
  const [ gap, setGap ] = useState(props.gap || 5)

  const incNum = () => setNumber(number + gap)
  const decNum = () => setNumber(number - gap)

  const incGap = () => setGap(gap + 1)
  const decGap = () => gap > 0 ? setGap(gap - 1) : ''

  const changeGap = event => {
    const key = Number(event.nativeEvent.data)
    const value = Number(event.target.value)

    if (key >= 0 && key <= 9) {
      setGap(value)
    }
  }

  return (
    <div className="container">
      <div className="counter-container">
        <h1>Contador</h1>
        <p>{ number }</p>
        
        <div className="input-container">
          <div className="input-field">
            <label htmlFor="gap">GAP:</label>
            <input value={gap} type="text" onChange={changeGap} />
          </div>

          <div className="input-buttons-container">
            <button onClick={incGap}>+</button>
            <button onClick={decGap}>-</button>
          </div>
        </div>

        <div className="buttons-container">
          <button onClick={decNum}>-</button>
          <button onClick={incNum}>+</button>
        </div>
      </div>
    </div>
    
  );
}

export default Contador
