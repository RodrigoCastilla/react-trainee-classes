import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SimpleForm } from "../../Components/SimpleForm/SimpleForm";

export const Main = props => {
  return (
    <div>
      <NavBar />
      <SimpleForm />
    </div>
  );
};
