import React from "react";
import "./Title.css";
export const Title = (props) => {
  return (
    <div>
      <header>
        <h1 className="title">{props.title}</h1>
      </header>
    </div>
  );
};
