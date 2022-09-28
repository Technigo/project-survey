import React, { useState } from "react";
// import Survey from "components/Survey";
import Startpage from "components/Startpage";
import Test from "components/Test";
import Summary from "components/Summary";

const dataQuestions = [
  {
    id: "question1",
    question_text: "FIRST OF ALL, WHATS YOUR NAME?",
    input_type: "text",
    //do I need to add answer here?
  },
  {
    id: "question2",
    question_text: "ENERGYWISE, WHATS YOUR PREFERENCE TODAY?",
    input_type: "select",
    options: [
      { value: "Super high" },
      { value: "Medium" },
      { value: "Low key" },
    ],
  },
  {
    id: "question3",
    question_text: "WHAT TYPE OF MUSIC DO YOU PREFER?",
    input_type: "radio",
    options: [{ value: "Classic" }, { value: "Hiphop" }, { value: "World" }],
  },
];


export const App = () => {
  const [currentQuestion, SetcurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState("");

  function handleCurrentQuestionButtonClick() {
    SetcurrentQuestion(currentQuestion + 1);
  }

  const handleClearButtonClick = () => {
    setUserInput("");
  };

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  };

  // Du kan skicka in ett defaultväde i useState, nu använder du en tom sträng... Vad skulle du kunna skicka in istället?
  // Du behöver en funktion som kan hantera när formuläret submittas. Fundera på vad den ska innehålla och göra.

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   currentQuestion +1;

  //   console.log('form submitted ✅');

  return (
    <main>
      <div className = "helper">
        <p>my counter {currentQuestion}</p>
        <p>this is the user input {userInput}</p>
        <button type="button" onClick={() => handleCurrentQuestionButtonClick()}>Next question</button>
        <input type="text" value={userInput} onChange={handleUserInputChange} />{" "}
        <p>
        <button type="button" onClick={handleClearButtonClick}>{" "}clear input{" "}</button>
        </p>
        </div>

        {currentQuestion === 0 && (
          <div>
            <div><Startpage /></div>
            <input type="text" value={userName} onChange={handleUserNameInputChange}/>
            <button type="button" onClick={() => handleCurrentQuestionButtonClick()}>Let's begin!</button>
          </div>
        )
        }
        {currentQuestion > 0 && currentQuestion < 4 && (
          <div>
            <div><Test /></div>
            <button type="button" onClick={() => handleCurrentQuestionButtonClick()}>Next question</button>
          </div>
        )
        }
          {currentQuestion === 4 && (
          <div>
            <div><Summary /></div>

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
{dataQuestions.map((question) => { //funkar får fram tre object        
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


    
