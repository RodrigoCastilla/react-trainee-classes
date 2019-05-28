import React from "react";
import "./Paper.css";

export const Paper = props => {
  const { title, children } = props;

  return (
    <div className={"paperContainer"}>
      {title ? (
        <div>
          <h2>{title} </h2>
          <hr />
        </div>
      ) : null}
      {children}
    </div>
  );
};
