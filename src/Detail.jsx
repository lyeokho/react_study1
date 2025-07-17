//자식 컴포넌트에서는 부모쪽으로 이동이 안됨

function Detail({boardTitle, setBoardTitle, setTitleIndex}){  //함수로 변환하여 사용
  return(

    <div className='info'>
      <button onClick={()=>{
        let _boardTitle=[...boardTitle];
        _boardTitle[0]='변경된 제목';

        setBoardTitle(_boardTitle);
      }}>제목 변경 버튼</button>
        <h3>{boardTitle[setTitleIndex]}</h3>
        <p>날짜</p>
        <p>내용</p>
      </div>


  )
}


export default Detail;