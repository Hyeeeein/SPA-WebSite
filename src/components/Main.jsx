import React from "react";
import "./../style/main.css";
import { useState, useEffect, useRef } from "react";

const Main = () => {
  const listData = ["content01", "content02", "content03", "content04"];
  // 배열 앞에 하나 더 넣어주기 listData.unshift('more')
  listData.unshift(listData[listData.length - 1]);

  const [num, setNum] = useState(0);
  const [check, setCheck] = useState("next");
  const checkRef = useRef("next");
  console.log(checkRef); // {current: 'next'} 객체 타입으로 값을 저장하고 사용할 수 있다. 컴포턴트함수를 재 랜더링 하는 기능은 없다

  const fncClassAdd = (i) => {
    // 블록해서 나타나도록 하느라 on 으로 준거고 슬라이드할 때는 다 보이고 부모를 overflow:hidden 해서 옆으로 가도록 하기 위해 on으로
    const on = i === num ? " on" : " on";

    // 숫자가 길어지는 경우 뒤에 것만 받아오고 싶을 때
    const view = "view_";
    const textNum = "00000" + (i + 1);
    const viewText = view + textNum.slice(-2); // 스트링 객체로 슬라이스 쓰기 => view_01
    return viewText + on;
  };

  // 옆으로 슬라이드, css 오브젝트를 넣어서 만든것, css로 해도 되지만 ???
  const initialStyle = {
    position: "relative",
    left: "-100%",
    marginLeft: `${num * -100}%`,
    /* transition: (num !== 0) ? 'margin 500ms ease' : 'none',
        // transition: 'margin 500ms ease'
        animation: (num === 0) ? 'firstSlidehh 500ms ease 1' : 'none' */
  };
  const [slideStyle, setslideStyle] = useState(initialStyle);

  const fncPrevStyle = () => {
    setslideStyle({
      ...initialStyle,
      transition: num !== 3 ? "margin 500ms ease" : "none",
      animation: num === 3 ? "lastSlide 500ms ease 1" : "none",
    });
  };

  const fncNextStyle = () => {
    setslideStyle({
      ...initialStyle,
      transition: num !== 0 ? "margin 500ms ease" : "none",
      animation: num === 0 ? "firstSlide 500ms ease 1" : "none",
    });
  };
  const fncPrevSlide = () => {
    setNum(num <= 0 ? 3 : num - 1);
    checkRef.current = "prev";
  };

  const fncNextSlide = () => {
    setNum(num >= 3 ? 0 : num + 1);
    checkRef.current = "next";
  };

  // 넥스트 버튼 클릭하면 fncNextSlide 호출
  // Num => +1 check=next
  // useEffect 을 사용해서 num 변화를 감지해서 체크상태 감지 next 가 들어가 있으면
  // fncNextStyle 함수를 호출해서 ul fncNextStyle 안의 스타일을 적용
  useEffect(() => {
    checkRef.current === "next" ? fncNextStyle() : fncPrevStyle();
  }, [num]);

  /*  const setStyle = {
         position: `relative`,
         left: '-100%',
         marginLeft: `${num * -100}%`,
         transition: (num !== 0) ? 'margin 500ms ease' : 'none',
        // transition: 'margin 500ms ease'
         animation: (num === 0) ? 'firstSlidehh 500ms ease 1' : 'none'
     } */

  return (
    <div className="mainContainer">
      <h2>메인페이지</h2>
      <div className="viewBox">
        <div className="slideBtn">
          <button type="button" onClick={fncPrevSlide}>
            이전
          </button>
          <button type="button" onClick={fncNextSlide}>
            이후
          </button>
          {/* <button type='button' onClick={() => { setNum(num <= 0 ? 3 : num - 1) }}>이전</button>
                    <button type='button' onClick={() => { setNum(num >= 3 ? 0 : num + 1) }}>이후</button> */}
        </div>
      </div>

      <div className="viewContents">
        <ul style={slideStyle}>
          {listData.map((list, index) => {
            return <li className={fncClassAdd(index)}>{list}</li>;
          })}

          {/* <li className='view_01 on'>01</li>
                    <li className='view_02'>02</li>
                    <li className='view_03'>03</li>
                    <li className='view_04'>04</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Main;

/* 
const box = {a : 0}

useState 의 경우
const useState [box, setBox] = useState(0)
setBox(10)
매개변수 다시 넣어서 컴포넌트 함수를 재실행
컴포넌트 함수는 콜백함수
즉, useState 는 콜백함수

useRef 의 경우
const box = {a : 0}
값이 아예 바껴버림
*/
