import { useState } from 'react'
import C from '../test/C/index.jsx'
import D from '../test/D/index.jsx'

export default function App() {
  const [screen, setScreen] = useState('C')

  const btnStyle = (active) => ({
    padding: '8px 20px',
    background: active ? 'rgb(233,116,81)' : '#ddd',
    color: active ? '#fff' : '#333',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: 14,
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <button style={btnStyle(screen === 'C')} onClick={() => setScreen('C')}>화면 C</button>
        <button style={btnStyle(screen === 'D')} onClick={() => setScreen('D')}>화면 D</button>
      </div>
      {screen === 'C' ? <C /> : <D />}
    </div>
  )
}
