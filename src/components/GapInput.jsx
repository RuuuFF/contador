const GapInput = props => {
  const { gap, changeGap, incGap, decGap } = props.counter

  return (
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
  )
}

export default GapInput