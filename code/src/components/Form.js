import React, { useState } from 'react';

import QuestionCitySelect from './QuestionCitySelect'
import QuestionAgeRadio from './QuestionAgeRadio'
import QuestionStageArtRadio from './QuestionStageArtRadio'
import TextInputProposal from './TextInputProposal'
import QuestionProfessionCheckbox from './QuestionProfessionCheckbox'

const Form = () => {
  const [page, setPage] = useState('firstQuestion');
  const [inhabitants, setInhabitants] = useState('') //should it's initial value be set to 5000 (First option) Think it is fine!
  const [ageCategory, setAgeCategory] = useState('15-25') //same here
  const [stageArtCategory, setStageArtCategory] = useState("I'm for experimental shit, I need to see something I can not immediately understand")
  const [proposal, setProposal] = useState('');
  const [professions, setProfessions] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
//    setShowSummary(true) ----> add this later when I did the summary. 
  }
  console.log(page)
  return (
    <section className="form-container">
        <form onSubmit={handleSubmit}>

        {page === 'firstQuestion' && ( 
            <div>
            <QuestionCitySelect
              inhabitants={inhabitants}
              setInhabitants={setInhabitants}
              page={page}
              setPage={setPage}
            />
            </div>
        )}

        {page === 'secondQuestion' && (
            <div>
            <QuestionAgeRadio
              ageCategory={ageCategory}
              setAgeCategory={setAgeCategory}
              page={page}
              setPage={setPage}
            />
            </div>
        )}

        {page === 'thirdQuestion' && (
            <div>
            <QuestionStageArtRadio
              stageArtCategory={stageArtCategory}
              setStageArtCategory={setStageArtCategory}
              page={page}
              setPage={setPage}
            />
            </div>
        )}

        {page === 'fourthQuestion' && (
            <div>
            <TextInputProposal
              proposal={proposal}
              setProposal={setProposal}
              page={page}
              setPage={setPage}
            />
            </div>
        )}

        {page === 'fifthQuestion' && (
            <div>
            <QuestionProfessionCheckbox
              professions={professions}
              setProfessions={setProfessions}
              page={page}
              setPage={setPage}
            />
            </div>
        )}
      </form>
    </section>
  )
}

export default Form