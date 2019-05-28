import React, { Fragment } from "react";

export const Title = props => {
  const { color } = props;
  return (
    <Fragment>
      <h2 style={{ color: color }}>Select a color</h2>
      <hr />
    </Fragment>
  );
};
