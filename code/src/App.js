/* eslint-disable quotes */
import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Survey from "./components/survey/survey.component";
import Main from "./pages/main/main.component";
import NotFound from "./pages/not-found/not-found.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Survey />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
