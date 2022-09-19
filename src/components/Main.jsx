import React from "react";
import "./../style/main.css";
import { useState, useEffect, useRef } from "react";

const Main = () => {
  const listData = ["content01", "content02", "content03", "content04"];
  listData.unshift(listData[listData.length - 1]);

  const [num, setNum] = useState(0);
  const [check, setCheck] = useState("next");
  const checkRef = useRef("next");
  console.log(checkRef); 

  const fncClassAdd = (i) => {
    const on = i === num ? " on" : " on";

    const view = "view_";
    const textNum = "00000" + (i + 1);
    const viewText = view + textNum.slice(-2); 
    return viewText + on;
  };

  const initialStyle = {
    position: "relative",
    left: "-100%",
    marginLeft: `${num * -100}%`,
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

  useEffect(() => {
    checkRef.current === "next" ? fncNextStyle() : fncPrevStyle();
  }, [num]);

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
        </div>
      </div>

      <div className="viewContents">
        <ul style={slideStyle}>
          {listData.map((list, index) => {
            return <li className={fncClassAdd(index)}>{list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Main;
