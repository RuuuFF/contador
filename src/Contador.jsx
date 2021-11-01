import { useState } from 'react';
import './Contador.css'

import CountNumber from './components/CountNumber'
import GapInput from './components/GapInput'
import Buttons from './components/Buttons'

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
        <CountNumber number={number} />        
        <GapInput counter={{ gap, changeGap, incGap, decGap }} />
        <Buttons counter={{ incNum, decNum }} />
      </div>
    </div>
  );
}

export default Contador
