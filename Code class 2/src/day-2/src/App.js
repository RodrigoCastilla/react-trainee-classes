import React, { Fragment } from "react";
import "./App.css";
import { Button3D } from "./Components/Button3D/Button3D";
import { Card } from "./Components/Card/Card";
import { FormContainer } from "./Components/Pattern/FormContainer";
import { ColorCard } from "./Components/ColorCard/ColorCard";

function App() {
  return (
    <Fragment>
      {/* Styling components */}
      <Button3D />

      {/* Making generic components */}
      {/* <Card /> */}

      {/* Container pattern */}
      {/* {<FormContainer />} */}

      {/* Thinking in react */}

      {/* Color picker to show passing values to parnet */}
      {/* <ColorCard /> */}
    </Fragment>
  );
}

export default App;
