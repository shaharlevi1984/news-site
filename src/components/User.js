import React, { useState } from "react";
import News from "./News";
import { news } from "../news";

function User() {
  const [state, setState] = useState();
  function Headers() {
    let i = 0;
    let allItems = [];
    for (let item in news) {
      let o = news[item];
      i++;
      allItems.push(
        <div key={i}>
          <News
            onClick={() => {
              setState(item);
            }}
            header={o.header}
            img={o.img}
          />
        </div>
      );
    }
    return allItems;
  }

  return (
    <div>
      <div className="headers">
        <h2>Users page</h2>
        <Headers></Headers>
      </div>
      <div className="content">
        {state ? <h2>{news[state].header}</h2> : ""}
        {state ? <p>{news[state].content}</p> : ""}
      </div>
    </div>
  );
}

export default User;
