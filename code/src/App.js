import React from "react";
import Header from "./Header";
import Footer from "Footer";
// import Test from "Test";
// import Test from "./Test";
import Form from "./Form";
import css from "./index.css";

export const App = () => {
  return (
    <>
      <Header />
      {/* <section>
        <Test />
      </section> */}
      <Form />
      <Footer />
    </>
  );
};
