import React, { useState, useEffect } from 'react'
import './Count.css'

const Count = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Voce clicou ${count} vezes`;
  }, [count]);

  return (
    <div>
      <p>Usuário clicou {count} vezes</p>
      <button type='button' onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  )
}

export default Count