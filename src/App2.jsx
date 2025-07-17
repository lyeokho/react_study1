import { useState } from "react";

function App2(){
  const[newBoard,setNewBoard]=useState('');
  const[board,setBoard]=useState([
    
    {
      title: 'react',
      date: '2025-7-12',
      like: 0
    },
    {
      title: 'html',
      date: '2025-7-11',
      like: 0
    },
    {
      title: 'css',
      date: '2025-7-14',
      like: 0
    },
    
  ]);
  

  return(
    
    <div>
      {
        board.map((data, i)=>{
          return(
       <div className="info" key={i}>
        <h3>{data.title}
          <span onClick={()=>{
            let _board=[...board];
            _board[i].like=_board[i].like+1
            setBoard(_board)
          }}>🙌</span><span >{data.like}</span>
        </h3>

        <p>{data.date}</p>
        <button onClick={()=>{
          let _board=[...board]
          _board.splice(i,1);
          setBoard(_board)
        }}>삭제하기</button>
    </div>
      )
  } )
 }

  <input type="text" onInput={(e)=>{
    setNewBoard(e.target.value);
  }}/>
  <button onClick={()=>{
    let now= new Date();
    let date=now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();  //현재 날짜 보이게하기
     
    let newData={
      title:newBoard,
      date:date,
      like:0
    }
    let _board=[...board];
    _board.push(newData);
      setBoard(_board);
    


  
  
 

  }}>추가하기</button>



</div>

  );


}

export default App2