import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";

import Paper from "@material-ui/core/Paper";

const App = () => {
  return (
    <Paper
      elevation={5}
      style={{
        marginTop: 20,
        marginLeft: "10%",
        marginRight: "10%",
        paddingTop: 25,
        paddingBottom: 25,
      }}
    >
      <Header />
      <Form />
    </Paper>
  );
};

export default App;
