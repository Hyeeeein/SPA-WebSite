import React from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const id = useParams().id;
  const data = props.data[id - 1];
  console.log(props);
  console.log(id);

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
