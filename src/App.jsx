import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <div>
          <ul>
          <li>Login</li>
          <li>Logout</li>
          <li>Home</li>
          </ul>
          
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Last number displayer</h1>
      <p>Welcome to this fantastic app. Write a string or give me an array, and I will
        give you the last letter or last item ;)
      </p>
      <div className="card">
        <input type='text' />
        <button onClick={() => setCount((count) => count + 1)}>
          Submit The Data
        </button>
        
      </div>
    
    </>
  )
}

export default App
