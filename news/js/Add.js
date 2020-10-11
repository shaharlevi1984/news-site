import React, { useState } from "react";

function Add() {
  const [header, setHeader] = useState();
  const [content, setContent] = useState();

  let handleSubmit = (e) => {
    e.preventDefault();
  };
  let onChange = (e) => {
    const { name, value } = e.target;
    name === "header" ? setHeader(value) : setContent(value);
  };
  return (
    <div>
      <h2>Add Article</h2>
      <form>
        <input
          onChange={onChange}
          name="header"
          value={header}
          placeholder="article header"
          type="text"
        ></input>
        <br></br>
        <textarea
          onChange={onChange}
          name="content"
          value={content}
          placeholder="article header"
          type="text"
        ></textarea>
        <br></br>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

export default Add;
