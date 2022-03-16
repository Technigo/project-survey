import React, { useState } from "react";

const PrevBtn = ( {prevQuestion} ) => {
      return <button type='button' onClick={prevQuestion}>Back</button>
}

export default PrevBtn;