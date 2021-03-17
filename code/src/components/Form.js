import React, { useState } from 'react'

import QuestionCitySelect from './QuestionCitySelect'
import QuestionAgeRadio from './QuestionAgeRadio'
import QuestionStageArtRadio from './QuestionStageArtRadio'
import TextInputProposal from './TextInputProposal'
import QuestionProfessionCheckbox from './QuestionProfessionCheckbox'
//import NextQuestionButton from './NextQuestionButton'
import Summary from './Summary'

const Form = () => {
  const [page, setPage] = useState(0)
  const [showSummary, setShowSummary] = useState(false)
  const [inhabitants, setInhabitants] = useState('') //should it's initial value be set to 5000 (First option) Think it is fine!
  const [ageCategory, setAgeCategory] = useState('') //same here
  const [stageArtCategory, setStageArtCategory] = useState('') //what is the value of a radiobutton?
  const [proposal, setProposal] = useState('');
  const [professions, setProfessions] = useState('')

  /* const onInhabitantsChange = (event) => {
    setInhabitants(event.target.value);
  } */

  /* const onAgeChange = (event) => {
    setAgeCategory(event.target.value)
  } */

  /* const onStageArtChange = (event) => {
    setStageArtCategory(event.target.value)
  } */

  /* const onProposalChange = (event) => {
    setProposal(event.target.value)
  } */
  
/*   const onProfessionChange = (professionValue) => {
    if (professions.includes(professionValue)) {
      setProfessions(professions.filter((item) => item !== professionValue))
    } else {
      setProfessions([...professions, professionValue])
    }
  } */

//THIS MAKS CHANGED WITH ME ::: it is not listening to any user input it is simply a function internal to the code
  const onPageChange = (pagenumber) => {
    setPage(pagenumber)
  }

//  const onNextQuestion = () => setPage(page +1);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true)
  }

  console.log(page)
  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>

        {page === 0 && ( 
          <div>
            <QuestionCitySelect
              inhabitants={inhabitants}
              setInhabitants={setInhabitants}
              page={page}
              setPage={onPageChange}
            />
          </div> 
        )}

        {page === 1 && (
            <div>
              <QuestionAgeRadio
                ageCategory={ageCategory}
                setAgeCategory={setAgeCategory}
                page={page}
                setPage={onPageChange}
              />
            </div>
        )}

        {page === 2 && (
          <div>
            <QuestionStageArtRadio
              stageArtCategory={stageArtCategory}
              setStageArtCategory={setStageArtCategory}
              page={page}
              setPage={onPageChange}
            />
          </div>
        )}

        {page === 3 && (
          <div>
            <TextInputProposal
              proposal={proposal}
              setProposal={setProposal}
              page={page}
              setPage={onPageChange}
            />
          </div>
        )}

        {page === 4 && (
        <div>
          <QuestionProfessionCheckbox
            professions={professions}
            setProfessions={setProfessions}
            page={page}
            setPage={onPageChange}
          />
        </div> 
        )}

        {page === 5 && (
          <div>
            <Summary 
              inhabitants={inhabitants}
              ageCategory={ageCategory}
              stageArtCategory={stageArtCategory}
              proposal={proposal}
              professions={professions}
            />
          </div>
        )}
      </form>
  </section>
  )
}

export default Form