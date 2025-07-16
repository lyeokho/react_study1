import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

        //컨포넌트명
function App() {
  let title='게시판';  //화면 변경 시 제목 변경되게 


  return (
    
    <div className='APP'>
      <div className='nav'>
        <h2>{title}</h2>
      </div>

    </div>

  )
}

export default App
