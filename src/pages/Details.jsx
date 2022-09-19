import React from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const id = useParams().id;
  const data = props.data[id - 1]; // ㅠㅠㅠㅠ
  console.log(props);
  console.log(id);
  /* const data = props.data(id-1); -> 왜 안되지..? */

  // map 으로도 해볼 것

  return (
    <div className="wrap">
      <h3 className="title">
        {id}. {data.title}
      </h3>
      <img src={data.imgUrl} alt="" />
      <div className="txt">
        <span>2022.06.22 02:09 am</span>
        <span>❤</span>
        <span>👍🏻</span>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default Details;
