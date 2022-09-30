import React, { useState } from "react";
import Startpage from "components/Startpage";
import Questions from "components/Questions";
import Summary from "components/Summary";
import "./index.css";

const questionsData = [
  {
    id: "",
  },
  {
    id: "Nice, let's do this!",
    question_text: "First of all, what's your name?",
    input_type: "text",
  },
  {
    id: "ENERGY LEVEL",
    question_text: "Energywise, how much energy do you need?",
    input_type: "select",
    options: [
      { value: "A lot" },
      { value: "Just enough to keep me going" },
      { value: "Low key, something slow" },
    ],
  },
  {
    id: "GENRE",
    question_text: "What type of music do you prefer?",
    input_type: "radio",
    options: [{ value: "Classic" }, { value: "Hiphop" }, { value: "World" }],
  },
];

// const resetForm = () => {
//   setUserChoices([]);
//   SetcurrentQuestion(0);
//   window.location.reload();
// };

export const App = () => {
  const [currentQuestion, SetcurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  // const [answers, setAnswers] = useState({}); H test
  const [answers, setAnswers] = useState([]);


  /////Keep track of which question is next////
  const handleCurrentQuestionButtonClick = () => {
    const currentQuestionNumber = currentQuestion + 1;
    SetcurrentQuestion(currentQuestionNumber);
    // setAnswers((previousAnswers) => [...previousAnswers, formatInput(inputValue)]);
    handleTest([currentQuestionNumber, userInput] ); // H fast jag har ändrat på det lite. På click skicka dessa värden till handleTest
    handleClearButtonClick();
    console.log('answershandleTest', answers);
    
  };

  const handleClearButtonClick = () => {
    setUserInput(""); //varför inte lägga till den här under handleCurrentQuestionButtonClick?
  };

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
    event.preventDefault();
  };

  const handleReset = () => { //H nollställer setAnswer när ropa den?
    setAnswers([]);
  };

  const handleTest = (answerObj) => { //H På click /se ovan/ Tar emot svaret och uppdaterar updateAnswer.
    console.log("funkar answerObj", answerObj);
    updateAnswer(answerObj); //H
  };


  const updateAnswer = (updatedAnswer) => { //H uppdaterar vaddå,funktionen setAnswers?
    console.log("funkar updatedAnswer", updatedAnswer);

    setAnswers((answers) => ([
      ...answers,
      ...updatedAnswer
  
    ]))
    
  };




  // const handleUserChoices = () => {
  //   setUserInput("");
  // };

  // const handleUserNameInputChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // Du kan skicka in ett defaultväde i useState, nu använder du en tom sträng... Vad skulle du kunna skicka in istället?
  // Du behöver en funktion som kan hantera när formuläret submittas. Fundera på vad den ska innehålla och göra.

  // const handleSubmit = event => {
  //    event.preventDefault();

  return (
    <main>
      {currentQuestion === 0 && (
        <section className="container">
            <Startpage />
          <button className="button" type="button" onClick={() => handleCurrentQuestionButtonClick()}
                // <button onClick={() => handleTest({ bajs: "Hejsan" })}>Question 1</button>

          >Let's begin!
          </button> 
         
          </section>
      )}
      {currentQuestion > 0 && currentQuestion < 4 && (
        <section className="container">
        <Questions
            {...questionsData[currentQuestion]}
            userInput={userInput}
            onChange={handleUserInputChange}
          />
      <p>
          <button 
          className="button"
            type="button"
            userInput={userInput}
            onClick={() => handleCurrentQuestionButtonClick(currentQuestion)}
          >
            Next question
          </button>
          </p>

        </section>
      )}
      {currentQuestion === 4 && (
        <div className="container">
{/* <Summary answers={answers} reset={resetForm} /> */}
          <Summary answers={answers} />
        </div>
      )}

      
    </main>
  );






  
};

/*
Forms have onSubmit to 
Present default.


      // <Startpage />
      /* Istället för att ha en onclick på knappen, överväg att ha onSubmit på formuläret istället. Det finns flera fördelar med det och är standard när du har ett formulär. */
/*
 <Survey
                id={question.id}
                question_text={question.question_text}
                input_type={question.input_type}
                options={question.options}
                /> 

//

                  //när någon skickar in formuläret submit på formuläret:
                  //lägg till funktion handle sumbit som hanterar räknaren sätt current questiion till ++
                  //använda föratt föra tt hämta rätt dataQuestions
a
                  //skcika in det i frågefo 
// import Startpage from "components/Startpage";
/*const submitForm = () =>{
                    console.log("hej")
                } */
/*
{questionsData.map((question) => { //funkar får fram tre object        
       return(
        <form>
            <Survey
                id={question.id}
                question_text={question.question_text}
                input_type={question.input_type}
                options={question.options}
                />
                
          </form>
              
              )
      })
    }
*/
/*
{/* {rData.albums.items.map((album) => {
       return (
            <Album
                key={album.id}
                coverImage={album.images[0].url}
                albumName={album.name}
                albumUrl={album.external_urls.spotify}
                albumArtists={album.artists}
                />
              )
      })
    } */


    // /*
    //  <div className="helper">
    //     <p>my counter {currentQuestion}</p>
    //     <p>this is the user input {userInput}</p>
    //     <button
    //       type="button"
    //       onClick={() => handleCurrentQuestionButtonClick()}
    //     >
    //       Next question
    //     </button>
    // //     {/* <input type="text" value={userInput} onChange={handleUserInputChange} />{" "} */}
    //     <p>
    //       <button type="button" onClick={handleClearButtonClick}>
    //         {" "}
    //         clear input{" "}
    //       </button>
    //     </p>
    //   </div>
    // */