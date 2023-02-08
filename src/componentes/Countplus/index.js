import { useState } from "react"

const CountPlus = (inicialCount) => {
  
  const [count, setCount] = useState(inicialCount)
  return (
    <>
      Count: {count}
      <button type="button" onClick={() => setCount(inicialCount)}>Reiniciar</button>
      <button type="button" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  )
}
export default CountPlus