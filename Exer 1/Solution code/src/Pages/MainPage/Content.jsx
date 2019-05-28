import React from "react";
import "./Content.css";
import { BgImage } from "../../Components/BgImage/BgImage";
import { SimpleForm } from "../../Components/SimpleForm/SimpleForm";
import { List } from "../../Components/List/List";

export const Content = props => {
  const { component } = props;

  const homeComponent = (
    <div className={"contentContainer"}>
      <BgImage />
    </div>
  );

  const formComponent = (
    <div className={"contentContainer"}>
      <SimpleForm />
    </div>
  );

  const listComponent = (
    <div className={"contentContainer"}>
      <List />
    </div>
  );

  switch (component) {
    case "Home":
      return homeComponent;
    case "List":
      return listComponent;
    case "Form":
      return formComponent;
    default:
      return homeComponent;
  }
};
