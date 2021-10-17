import React from "react";
import { useState } from "react";
import Name from "./components/Name";
import CatType from "./components/CatType";
import CatFeel from "./components/CatFeel";
import Newsletter from "./components/Newsletter";

export const App = () => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  return (
    <>
      <Name />
      <CatType />
      <CatFeel />
      <Newsletter />
    </>
  );
};
