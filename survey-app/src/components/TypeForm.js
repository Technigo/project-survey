import React, { useState } from "react";

import Welcome from "./Welcome";
import AgeInput from "./Form1";
import WorkHoursInput from "./Form2";
import PreferredHoursInput from "./Form3";
import ProductivityRange from "./Form4";
import StressRange from "./Form5";
import Closing from "./Closing";

export const TypeForm = () => {
  const [page, setPage] = useState(0);

  const changePage = () => setPage(page + 1);

  return (
    <main>
      {page === 0 && <Welcome changePage={changePage} />}
      {page === 1 && <AgeInput changePage={changePage} />}
      {page === 2 && <WorkHoursInput changePage={changePage} />}
      {page === 3 && <PreferredHoursInput changePage={changePage} />}
      {page === 4 && <ProductivityRange changePage={changePage} />}
      {page === 5 && <StressRange changePage={changePage} />}
      {page === 6 && <Closing />}
    </main>
  )
};

export default TypeForm;