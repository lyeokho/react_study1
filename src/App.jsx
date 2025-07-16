import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

        //컨포넌트명
function App() {
  // const[변수명,변경함수]=useState(초기값); 리액트 전용변수//화면 변경 시 제목 변경되게 
  //uesXXX :리액트 내장함수 리액트훅 이라고도 부른다.
  const[title,setTitle]=useState('알림창');  
  const[bordTitle,setBoredTitle]=useState(['react', 'html', 'css']);

  const[like, setLike]=useState(0);

  function change(){
    setLike(like+1);

  }

  return (
    
    <div className='APP'>
      <div className='nav'>
        <h2>{title}</h2>
      </div>
      <button onClick={()=>{
        setTitle('게시판');
      }}>제목 변경</button>


    <div className='list'>
      <h3>{bordTitle[0]}<button onClick={change}>좋아요</button>{like}</h3>
      <p>2025-7-16</p>    
    </div>

    <div className='list'>
      <h3>{bordTitle[1]}</h3>
      <p>2025-7-16</p>    
    </div>

    <div className='list'>
      <h3>{bordTitle[2]}</h3>
      <p>2025-7-16</p>    
    </div>


    </div>

  )
}

export default App
