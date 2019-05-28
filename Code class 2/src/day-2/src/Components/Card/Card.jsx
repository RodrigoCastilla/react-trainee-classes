import React from "react";
import "./Card.css";
import { BgImage } from "./BgImage/BgImage";
import { Paper } from "./Paper/Paper";
import { SimpleForm } from "./Form/SimpleForm";

export const Card = props => {
  return (
    <div className={"main"}>
      <div className={"cardConteiner"}>
        <Paper title={"Img"}>
          <BgImage />
        </Paper>
      </div>
      <div className={"cardConteiner"}>
        <Paper title={"Form"}>
          <SimpleForm />
        </Paper>
      </div>
    </div>
  );
};
