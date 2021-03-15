import React from "react";
import { Header } from "./components/Header";
import { FormAdditional } from "./components/FormAdditional";
import { FormType } from "components/FormType";
import { FormSubway } from "components/FormSubway";
import { FormPrice } from "components/FormPrice";
import { FormRooms } from "components/FormRooms";
import { Button } from "components/Button";

export const App = () => {
  return (
    <>
      <Header />
      <div className="site-container">
        <FormType />
        <FormRooms />
        <FormSubway />
        <FormPrice />
        <FormAdditional />

        <Button />
      </div>
    </>
  );
};
