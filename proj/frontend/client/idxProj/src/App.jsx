import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './components/SignupForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Project IDX Signup</h1>
        <SignupForm />
    </div>
);
}

export default App
