import React, { useState } from 'react'

import QuestionCitySelect from './QuestionCitySelect'
import QuestionAgeRadio from './QuestionAgeRadio'
import QuestionStageArtCheckbox from './QuestionStageArtCheckbox'
import TextInputProposal from './TextInputProposal'
import QuestionProfessionRadio from './QuestionProfessionRadio'
import Summary from './Summary'

const Form = () => {
  const [page, setPage] = useState(0)
  const [showSummary, setShowSummary] = useState(false)
  const [inhabitants, setInhabitants] = useState('')
  const [ageCategory, setAgeCategory] = useState(undefined) 
  const [stageArtCategory, setStageArtCategory] = useState([])
  const [proposal, setProposal] = useState('');
  const [profession, setProfession] = useState(undefined) 

  const onPageChange = (pagenumber) => {
    setPage(pagenumber)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)
  }

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
            <QuestionStageArtCheckbox
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
          <QuestionProfessionRadio
            profession={profession}
            setProfession={setProfession}
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
              profession={profession}
              showSummary={showSummary}
            />
          </div>
        )}
      </form>
  </section>
  )
}

export default Form