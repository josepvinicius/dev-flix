import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Header from './assets/components/Header'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
      <Header></Header>
    </div>
    <div className='buscar'>
      <input type="text" placeholder='Buscar filme...' />
      <button>Buscar</button>
    </div>
    <div className='content-filmes'>

    </div>
         
    </>
  )
}

