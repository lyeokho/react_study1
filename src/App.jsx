import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';
import App2 from './App2';

        //컨포넌트명
function App() {
  // const[변수명,변경함수]=useState(초기값); 리액트 전용변수//화면 변경 시 제목 변경되게 
  //uesXXX :리액트 내장함수 리액트훅 이라고도 부른다.

  const[title,setTitle]=useState('알림창');  

  const[boardTitle,setBoardTitle]=useState(['react', 'html', 'css']);

  const[like, setLike]=useState([0,0,0]);
  const[show,setShow]=useState(false);

  const[titleIndex,setTitleIndex]=useState(0);

  const[newTitle, setNewTitle]=useState('');  //새로운 글 작성 제목을 기억하는 스테이트

  function change(){   //좋아요 수 늘리기
    setLike(like+1);

  }

  return (
    
    <div className='APP'>
      <App2 />

      <div className='nav'>
        <h2>{title}</h2>
      </div>
      <button onClick={()=>{
        setTitle('게시판');
      }}>제목 변경</button>

      {               //변수명
        boardTitle.map((title,i)=>{
          return(                  //key설정해야 콘솔에 오류가 안난다       
            <div className='list' key={i}> 
            <h3 onClick={()=>{
              setShow(!show);
              setTitleIndex(i);
            }}>{title}<button onClick={(event)=>{   //좋아요 늘리기
              event.stopPropagation();   //부모세대 작업까지 작업되는 버블링 방지용 이벤트
              let _like=[...like];  
              _like[i]=_like[i]+1;
              setLike(_like);
            }}>좋아요</button>{like[i]}</h3>
            <p>2025-7-16</p> 

            <button onClick={()=>{     //타이틀, 좋아요 삭제 같이  //삭제 메서드:splice(배열방종류, 삭제할 개수)
              let _boardTitle=[...boardTitle]
              _boardTitle.splice(i,1);
              setBoardTitle(_boardTitle)

              let _like=[...like];
              _like.splice(i,1);
              setLike(_like);
            }}
            >삭제하기</button>   
            </div>
          )
        })
      }

    {/* <div className='list'>       
      <h3>{bordTitle[0]}<button onClick={change}>좋아요</button>{like}</h3>
      <p>2025-7-16</p>    
    </div> */}

          
      <button onClick={()=>{    //누르면 첫번째 게시물 제목 변경하기
        let _changeTitle=[...boardTitle];  //...은 배열방을 깨주는 기능
        _changeTitle[0]='java';           //그리고 0번을 변경
        setBoardTitle(_changeTitle);
      }}>첫번째 게시물 제목 바꾸기</button>

                               {/* 변수명={실제값} */}
      { show ? <Detail   
      boardTitle={boardTitle} setBoardTitle={setBoardTitle} setTitleIndex={setTitleIndex} />:''}  
        {/* 이건 자식쪽에 보내주는곳 */}
   
 
        {/*  글작성 후 추가하기 */}
        <input type="text" value={newTitle} onInput={(event)=>{
          setNewTitle(event.target.value);
        }} />
        <button onClick={()=>{
          if(newTitle===''){        //비어있으면 등록 안되는 알림
            alert('새로운 제목을 입력하세요');
            return;
          }           
          let _boardTitle=[...boardTitle];
          _boardTitle.push(newTitle);
          setBoardTitle(_boardTitle)

          let _like=[...like];
          _like.push(0);
          setLike(_like)

          setNewTitle('');



        }}
        >글작성</button>




    </div>

  )
}

export default App
