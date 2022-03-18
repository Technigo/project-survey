import React from "react";

// Imported Components
import Form from "components/Form";
import Footer from "components/Footer";

export const App = () => {
  return (
    <>
      <section>
        <main>
          <div className="outer-box">
            <Form />
          </div>
        </main>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
