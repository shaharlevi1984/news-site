import React from "react";
function News(props) {
  let date = new Date();

  return (
    <div>
      <h2 onClick={props.onClick}>{props.header}</h2>

      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default News;
