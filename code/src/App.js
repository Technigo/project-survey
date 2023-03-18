import React, { useState } from 'react';
import { Button, Back, QuestionButton, StartOver } from './components/Button'
import { Flavor } from './components/Flavor'
import { Footer } from './components/Footer'
import { Holiday, Water, Land } from './components/Holiday'
import { HotSauce } from './components/HotSauce'
import { Mayo } from './components/Mayo'
import { Region } from './components/Region'
import { ResultsWrapper } from './components/ResultsWrapper'
import { Sauce } from './components/Sauce'
import { Season } from './components/Season'
import { Self } from './components/Self'
import { Summary } from './components/Summary'

export const App = () => {
  const [counter, setCounter] = useState(0)
  console.log(counter)
  const [flavor, setFlavor] = useState('')
  const [holiday, setHoliday] = useState('')
  const [hotsauce, setHotSauce] = useState('')
  const [land, setLand] = useState('')
  const [mayo, setMayo] = useState('')
  const [region, setRegion] = useState('')
  const [sauce, setSauce] = useState('')
  const [season, setSeason] = useState('')
  const [self, setSelf] = useState('')
  const [water, setWater] = useState('')

  return (
    <>
      {counter === 0 && (
        <div className="question-wrapper">
          <h1>What dish are you?</h1>
          <p>You seem like a tasty dish! But, which dish are you?</p>
          <p><span className="italics">Are you pie?  Are you cassarole?  Are you something deep fried?</span></p>
          <div className="icon-wrapper">
            <img src="./assets/asparagusi.png" alt="asparagus icon" />
            <img src="./assets/icecream.png" alt="ice cream icon" />
            <img src="./assets/corni.png" alt="corn icon" />
            <img src="./assets/pie.png" alt="pie icon" />
          </div>
          <p>Take this quiz and find out exactly which tasty dish <span className="highlight">you</span> are.</p>
          <Button counter={counter} setCounter={setCounter} />
        </div>
      )}
      {counter === 1 && (
        <div className="question-wrapper">
          <h2>How do you think of yourself?</h2>
          <Self self={self} setSelf={setSelf} />
          <div className="button-wrapper">
            <Back counter={counter} setCounter={setCounter} />
            <QuestionButton counter={counter} setCounter={setCounter} answer={self} />
          </div>
        </div>
      )}
      {counter === 2 && (
        <div className="question-wrapper">
          <h2>What is your favorite holiday spot?</h2>
          <Holiday holiday={holiday} setHoliday={setHoliday} />
          {holiday === 'at the water' && (
            <Water water={water} setWater={setWater} setLand={setLand} />
          )}
          {holiday === 'on dry land' && (
            <Land land={land} setLand={setLand} setWater={setWater} />
          )}
          <div className="button-wrapper">
            <Back counter={counter} setCounter={setCounter} />
            <QuestionButton counter={counter} setCounter={setCounter} answer={holiday} />
          </div>
        </div>
      )}
      {counter === 3 && (
        <div className="question-wrapper">
          <h2>&quot;If a man does not have sauce, then he is lost.&quot; <span className="guccimane">-Gucci Mane</span></h2>
          <Sauce sauce={sauce} setSauce={setSauce} />
          <div className="button-wrapper">
            <Back counter={counter} setCounter={setCounter} />
            <QuestionButton counter={counter} setCounter={setCounter} answer={sauce} />
          </div>
        </div>
      )}
      {counter === 4 && (
        <div className="question-wrapper">
          <h2>&quot;If a man does not have sauce, then he is lost.&quot; <span className="guccimane">-Gucci Mane</span></h2>
          {sauce === '0' && (
            <p>Not gonna answer? Alrighty. Moving right along.</p>
          )}
          {sauce === '1' && (
            <HotSauce hotsauce={hotsauce} setHotSauce={setHotSauce} />
          )}
          {sauce === '2' && (
            <Mayo mayo={mayo} setMayo={setMayo} />
          )}
          {sauce === '3' && (
            <p>Not a sauce fan?  Don&apos;t get too lost out there.</p>
          )}
          <div className="button-wrapper">
            <Back counter={counter} setCounter={setCounter} />
            <Button counter={counter} setCounter={setCounter} />
          </div>
        </div>
      )}
      {counter === 5 && (
        <div className="question-wrapper">
          <h2>What do your friends say?</h2>
          <Region region={region} setRegion={setRegion} />
          <div className="button-wrapper">
            <Back counter={counter} setCounter={setCounter} />
            <QuestionButton counter={counter} setCounter={setCounter} answer={region} />
          </div>
        </div>
      )}
      {counter === 6 && (
        <div className="question-wrapper">
          <h2>What do your not-quite-friends have to say?</h2>
          <Flavor flavor={flavor} setFlavor={setFlavor} />
          <div className="button-wrapper">
            <Back counter={counter} setCounter={setCounter} />
            <QuestionButton counter={counter} setCounter={setCounter} answer={flavor} />
          </div>
        </div>
      )}
      {counter === 7 && (
        <div className="question-wrapper">
          <h2>What season suits you best?</h2>
          <Season season={season} setSeason={setSeason} />
          <div className="button-wrapper">
            <Back counter={counter} setCounter={setCounter} />
            <QuestionButton counter={counter} setCounter={setCounter} answer={season} />
          </div>
        </div>
      )}
      {counter === 8 && (
        <div className="summary-wrapper">
          <h2>Your Summary</h2>
          <Summary
            self={self}
            holiday={holiday}
            destination={land || water}
            sauce={sauce}
            hotsauce={hotsauce}
            mayo={mayo}
            region={region}
            flavor={flavor}
            season={season} />
          <p>Does this look right?</p>
          <p>If so, click to see your results!</p>
          <Button counter={counter} setCounter={setCounter} />
          <p>If not, you can start over.</p>
          <StartOver setCounter={setCounter} />
        </div>
      )}
      {counter === 9 && (
        <div className="summary-wrapper">
          <ResultsWrapper region={region} flavor={flavor} season={season} />
          {/* <Back counter={counter} setCounter={setCounter} /> */}
        </div>
      )}
      {counter < 10 && (
        <Footer />
      )}
    </>
  );
}
