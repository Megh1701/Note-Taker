import React from 'react'
import Background from './component/Background'
import Add from './component/Add'
import Card from './component/Card'
import './App.css'

function App() {

  return (
    <>
    <div className='h-screen w-full bg-zinc-800 relative '>
    <Background/>
    <Add />
    </div>

    </>
  )
}

export default App
