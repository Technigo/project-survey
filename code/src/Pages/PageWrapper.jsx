import React, { useState } from "react"
import Intro from "Components/Intro"
import FirstQuestion from "Components/FirstQuestion"
import SecondQuestion from "Components/SecondQuestion"
import ThirdQuestion from "Components/ThirdQuestion"
import Summary from "Components/Summary"
import Navbar from "Components/Navbar"

const PageWrapper = () => {
  const [cityToUseInSummary, setCityWhenChangeInDropdownFunction] =
    useState("Select location")
  const [genderToUseInSummary, setGenderWhenChangeInRadioButtonFunction] =
    useState("")
  const [username, setUsername] = useState("")
  const [pageNumber, setPageNumber] = useState(0)

  const triggerUsernameFunction = (event) => {
    setUsername(event.target.value)
  }
  const triggerCityFunction = (event) => {
    setCityWhenChangeInDropdownFunction(event.target.value)
  }
  const triggerGenderFunction = (event) => {
    setGenderWhenChangeInRadioButtonFunction(event.target.value)
  }

  return (
    <>
      <div className="container">
        {pageNumber === 0 && <Intro />}
        {pageNumber === 1 && (
          <FirstQuestion
            triggerGender={triggerGenderFunction}
            stateGender={genderToUseInSummary}
          />
        )}
        {pageNumber === 2 && (
          <SecondQuestion
            triggerCity={triggerCityFunction}
            stateCity={cityToUseInSummary}
          />
        )}
        {pageNumber === 3 && (
          <>
            <ThirdQuestion
              triggerUsername={triggerUsernameFunction}
              stateUsername={username}
            />
          </>
        )}

        {pageNumber === 4 && (
          <>
            <Summary
              gender={genderToUseInSummary}
              city={cityToUseInSummary}
              username={username}
            />
          </>
        )}

        <Navbar pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  )
}

export default PageWrapper
