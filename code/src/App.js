import React, { useState } from "react";
import { Header } from "./components/Header";
import { InputAdditional } from "./components/InputAdditional";
import { InputType } from "components/InputType";
import { InputSubway } from "components/InputSubway";
import { InputPrice } from "components/InputPrice";
import { InputRooms } from "components/InputRooms";
// import { Button } from "components/Button";

export const App = () => {
  // Set question state to move on to next question onSubmit
  const [question, setQuestion] = useState(0);
  // Set state of my input-components
  const [type, setType] = useState(" ");
  const [room, setRooms] = useState(" ");
  const [subway, setSubway] = useState(false);
  const [price, setPrice] = useState();
  const [additional, setAdditional] = useState("");
  //Set state to show summary at end of the Survey
  const [summary, setSummary] = useState(false);

  // Functions to get the input from my components lifted to the App.js
  const updateTypeState = (event) => {
    setType(event.target.value);
  };
  const updateRoomState = (event) => {
    setRooms(event.target.value);
  };
  const updateSubwayState = (event) => {
    setSubway(event.target.value);
  };
  const updatePriceState = (event) => {
    setPrice(event.target.value);
  };
  const updateAdditionalState = (event) => {
    setAdditional(event.target.value);
  };

  const onSubmit = (event) => {
    e.preventDefault();
    setQuestion(question+1);
  }
  }


  // if (setSummary === true) {
  //   return (
  //     <div className="summary-form">
  //       <div>{additional}</div>
  //       <div>{room}</div>
  //       <div>{type}</div>
  //       <div>{price}</div>
  //       <div>{subway}</div>
  //     </div>
  //   );
  // }

  return (
    <>
      {question === 0 && (
        <form className="form-container" onSubmit={onSubmit}>
          <div>
            <Header />
            <button className="start-button"
            onClick ={() => {setQuestion("type-question") }}
            >
            Start
            </button>
          </div>
      )}
      {question === 0 && (
        <InputType onTypeChange={updateTypeState} />
        )}
      {question === 2 && (
        <InputRooms onRoomChange={updateRoomState} />
        )}
      {question === 3 && (
        <InputSubway onSubwayChange={updateSubwayState} subway={subway} />
        )}
      {question === 4 && (
        <InputPrice onPriceChange={updatePriceState} price={price} />
        )}
       {question === 5 && (
        <InputAdditional onAdditionalChange={updateAdditionalState} />
        )}
      
      
          
            
              <InputAdditional onAdditionalChange={updateAdditionalState} />
          )}
          <div className="summary-button">
            <button type="submit" onClick={(event) => onSubmit()}>
              Show me possible homes!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
