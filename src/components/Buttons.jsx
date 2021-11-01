const Buttons = props => {
  const { incNum, decNum } = props.counter

  return (
    <div className="buttons-container">
      <button onClick={decNum}>-</button>
      <button onClick={incNum}>+</button>
    </div>
  )
}

export default Buttons