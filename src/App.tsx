import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('white')

  const mudaCorzinhaeNumerin = () => {
    setCount(count => count + 1)
    const colors = ['red', 'green', 'blue', 'pruple', 'pink', 'orange' ]
    const cor = colors[Math.round(Math.random() * 5)]
    console.log(cor)

    setColor(cor)
  }

  useEffect(() => {
    
  }, [count])

  return (
    <div style={{width: '100%', height: '100vh', backgroundColor: color}}>
      <p>Contando {count}</p>
      <button onClick={mudaCorzinhaeNumerin}>Clica</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
