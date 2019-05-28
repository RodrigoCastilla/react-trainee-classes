import React from "react";
import "./Paper.css";

export const Paper = props => {
  const { children } = props;
  return <div className={"paperContainer"}>{children}</div>;
};
