import React, { useState } from 'react'
import QuestionWrapper from './QuestionWrapper'
import questionData from '../questionData.json'
import playbookData from '../playbookData.json'
import SubmitButton from './SubmitButton'
import NavWrapper from './NavWrapper'
import PlaybookWrapper from './PlaybookWrapper'
import Text from './Text'

//TO-DO:
//[_] Add keys to components?
//[X] Set up hooks for each question storing the user's current input
//[X] Maybe have hooks track everything live, live updating a summary paragraph,
// but there is still a submit button for the recommendation!!
//[_] Remove optionsData!
//[X] Make radio buttons functional!
//2h [X] [X] Make select dropdown functional! What is missing is how to pass
//1h [_] Add a "Eh, I don't care" option to the radio answers, setting the value to -99. This will later be picked up in the filterPlaybooks function and will simply skip that filter :))
//1h [_] Add isSubmitted hook
//1h [_] Add a "hey, that answer doesn't work" conditional that blocks UI progression (but only forwards!) have a function that returns true or false, and disable the UI forward button accordingly via the html attribute disable=function()
//4h [_] Start styling
//1h [_] Grasp what controlled inputs are again and double check mine are
//All weekend [_] Accessability test

// export const setHijinx = (value) => {
//   setHijinx(value)
//   console.log(hijinx)
// }

export const App = () => {
  const lastPage = 5 //USED!!!!!!
  const playbooks = playbookData

  const [magic, setMagic] = useState(null)
  const [tech, setTech] = useState(null)
  const [hijinx, setHijinx] = useState(null)
  const [grim, setGrim] = useState(null)
  const [spiritual, setSpiritual] = useState(null)

  //USED!!!!
  const [source, setSource] = useState("")
  const [currentPage, setCurrentPage] = useState(1) //should be 1. Set to 0 to instantly go to currently set testing state
  const [blocker, setBlocker] = useState({blocking:false,explanation:"default error! :D"})
  const [filteredPlaybooks, setFilteredPlaybooks] = useState([])
  //const [bestAtError, setBestAtError] = useState(false)

  //USED!!!!
  const [bestAt, setBestAt] = useState({stat:"STR", overlap:false})
  const [nextToBestAt, setNextToBestAt] = useState({stat:"WIS", overlap:false})
  const [worstAt, setWorstAt] = useState({stat:"CHA", overlap:false})
  // const [bestAt, setBestAt] = useState("")
  // const [nextToBestAt, setNextToBestAt] = useState("")
  // const [worstAt, setWorstAt] = useState("")
  
  //I might not need these as States after all, just one state per dropdown? Why is this? I think I'll be able to articulate it later
  const [str, setStr] = useState(2)
  const [dex, setDex] = useState(0)
  const [con, setCon] = useState(0)
  const [int, setInt] = useState(0)
  const [wis, setWis] = useState(1)
  const [cha, setCha] = useState(-2)
  //to my understanding, as long I send these arrays along as props, they will be forced to update on change
  
  //radio button states
  const onHijinxChange = (value) => {
    setHijinx (value)    
  }

  const onMagicChange = (value) => {
    setMagic (value)    
  }

  const onTechChange = (value) => {
    setTech (value)    
  }

  const onGrimChange = (value) => {
    setGrim (value)    
  }

  const onSpiritualChange = (value) => {
    setSpiritual (value)    
  }

  //actually USED:
  const onSourceChange = (value) => {
    setSource (value)
  }

  const meaninglessFunction = () => {
    console.log(`meaningless function was called! Let's see if this fixes the hook having time to update`)
    //the above doesn't change anything, which makes me think that statehooks only truly update either with some lag/delay, or intentionally waits until the END of the function which it called to change in
    //I'm going to experiment: what if I set blocker flags in a separate function altogether? Then when that function ends, the hooks should update, if it indeed is about functions needing to end first...
    //Result: 
  }

  const checkBlocker = (direction) => {
    
    //below is not a bad idea, but first I need a specific error hook...
    if (currentPage === 2 && (bestAt.overlap || nextToBestAt.overlap || worstAt.overlap) && direction === 1) { 
      setBlocker({blocking:true, explanation:"You can't have overlapping stat assignments (marked red)!"})
    }

    if (currentPage === 1 && source === "" && direction === 1) { 
      setBlocker({blocking:true, explanation:"Please select an option before continuing."})
    }

  }

  const onCurrentPageChange = (direction) => {
    console.log(`at the start of onCurrentPageChange. currentPage: ${currentPage}, blocker: ${blocker.blocking}`)
    checkBlocker(direction)

    //catching any blocker flags when advancing
    if (blocker.blocking === true && direction === 1 && source === "") {
      alert(blocker.explanation)
    } else {
      if (direction === 1 && currentPage === 2) {
        console.log(`hey I recognized that this is page 2 (currentPage: ${currentPage}) and now I'm gonna filter the playbookssss`)
        filterPlaybooks(source, playbooks)
      }
      else if (blocker.blocking === true && direction === -1) {
        console.log("blocker was on and I moved backwards so I'm gonna deactivate it")
        setBlocker({blocking:false, explanation:"Please select an option before continuing."})
      }      
      if (direction === -1 && currentPage === 1) { //Safety prec. is made redundant if I conditionally just don't render the nav buttons when pressing is a nono
        //do nothing as to never go below first page
      } else if (direction === 1 && currentPage === lastPage) {
        //do nothing as to never go beyond the last page
      } else {
        console.log(`navigated to page ${currentPage + direction}`)
        setCurrentPage (currentPage + direction)
      }
    }
  }

  //dropdown states
  const onBestAtChange = (newStat) => {
    console.log(`was best at: ${bestAt.stat}`)
    console.log(`is NOW best at: ${newStat}`)
    
    const previousStat = bestAt.stat

    //Reset the numerics of the previous stat
    switch (previousStat) {
      case "STR":
        setStr(0)
        break
      case "DEX":
        setDex(0)
        break
      case "CON":
        setCon(0)
        break
      case "INT":
        setInt(0)
        break
      case "WIS":
        setWis(0)
        break
      case "CHA":
        setCha(0)
        break
    }

    //Set the numerics of the new stat
    switch (newStat) {
      case "STR":
        setStr(2)
        break
      case "DEX":
        setDex(2)
        break
      case "CON":
        setCon(2)
        break
      case "INT":
        setInt(2)
        break
      case "WIS":
        setWis(2)
        break
      case "CHA":
        setCha(2)
        break
    }

    //remember! change the order of the hooks depending on onChange context!!
    const overlappingWith = checkStatOverlap(newStat, nextToBestAt, worstAt)
    
    if (overlappingWith === "a") {
      setWorstAt({stat:worstAt.stat, overlap:false})
      setBestAt({stat:newStat.stat, overlap:true})
      setNextToBestAt({stat:nextToBestAt.stat, overlap:true})
    } else if (overlappingWith === "b") {
      setWorstAt({stat:worstAt.stat, overlap:true})
      setBestAt({stat:newStat.stat, overlap:true})
      setNextToBestAt({stat:nextToBestAt.stat, overlap:false})
    } else if (overlappingWith === "both") {
      setWorstAt({stat:worstAt.stat, overlap:true})
      setBestAt({stat:newStat, overlap:true})
      setNextToBestAt({stat:nextToBestAt.stat, overlap:true})
    } else {
      setBestAt({stat:newStat, overlap:false})
    }
    
    //remember! change the order of the hooks depending on onChange context!!
    // if (checkStatOverlap(newStat, nextToBestAt, worstAt)) {
    //   setBestAt({stat:newStat, overlap:true})
    // } else {
    //   setBestAt({stat:newStat, overlap:false})
    // }

    // //can I make the other skillLevels restate themselves?
    // setNextToBestAt(nextToBestAt)
    // setWorstAt(worstAt)
  }

  const onNextToBestAtChange = (newStat) => {
    console.log(`was next to best at: ${nextToBestAt.stat}`)
    console.log(`is NOW next to best at: ${newStat}`)
    
    const previousStat = nextToBestAt.stat

    //Reset the numerics of the previous stat
    switch (previousStat) {
      case "STR":
        setStr(0)
        break
      case "DEX":
        setDex(0)
        break
      case "CON":
        setCon(0)
        break
      case "INT":
        setInt(0)
        break
      case "WIS":
        setWis(0)
        break
      case "CHA":
        setCha(0)
        break
    }
    
    switch (newStat) {
      case "STR":
        setStr(1)
        break
      case "DEX":
        setDex(1)
        break
      case "CON":
        setCon(1)
        break
      case "INT":
        setInt(1)
        break
      case "WIS":
        setWis(1)
        break
      case "CHA":
        setCha(1)
        break
    }

    //remember! change the order of the hooks depending on onChange context!!
    const overlappingWith = checkStatOverlap(newStat, bestAt, worstAt)
    
    if (overlappingWith === "a") {
      setWorstAt({stat:worstAt.stat, overlap:false})
      setBestAt({stat:bestAt.stat, overlap:true})
      setNextToBestAt({stat:newStat, overlap:true})
    } else if (overlappingWith === "b") {
      setWorstAt({stat:worstAt.stat, overlap:true})
      setBestAt({stat:bestAt.stat, overlap:false})
      setNextToBestAt({stat:newStat.stat, overlap:true})
    } else if (overlappingWith === "both") {
      setWorstAt({stat:worstAt.stat, overlap:true})
      setBestAt({stat:bestAt.stat, overlap:true})
      setNextToBestAt({stat:newStat.stat, overlap:true})
    } else {
      setNextToBestAt({stat:newStat, overlap:false})
    }
    
    //remember! change the order of the hooks depending on onChange context!!
    // if (checkStatOverlap(newStat, bestAt, worstAt)) {
    //   setNextToBestAt({stat:newStat, overlap:true})
    // } else {
    //   setNextToBestAt({stat:newStat, overlap:false})
    // }

    // //can I make the other skillLevels restate themselves?
    // setBestAt(bestAt)
    // setWorstAt(worstAt)
  }

  const onWorstAtChange = (newStat) => {
    console.log(`was worst at: ${worstAt.stat}`)
    console.log(`is NOW worst at: ${newStat}`)
    
    const previousStat = worstAt.stat

    //Reset the numerics of the previous stat
    switch (previousStat) {
      case "STR":
        setStr(0)
        break
      case "DEX":
        setDex(0)
        break
      case "CON":
        setCon(0)
        break
      case "INT":
        setInt(0)
        break
      case "WIS":
        setWis(0)
        break
      case "CHA":
        setCha(0)
        break
    }
    
    switch (newStat) {
      case "STR":
        setStr(-2)
        break
      case "DEX":
        setDex(-2)
        break
      case "CON":
        setCon(-2)
        break
      case "INT":
        setInt(-2)
        break
      case "WIS":
        setWis(-2)
        break
      case "CHA":
        setCha(-2)
        break
    }
    
    //remember! change the order of the hooks depending on onChange context!!
    const overlappingWith = checkStatOverlap(newStat, bestAt, nextToBestAt)
    
    if (overlappingWith === "a") {
      setWorstAt({stat:newStat, overlap:true})
      setBestAt({stat:bestAt.stat, overlap:true})
      setNextToBestAt({stat:nextToBestAt.stat, overlap:false})
    } else if (overlappingWith === "b") {
      setWorstAt({stat:newStat, overlap:true})
      setBestAt({stat:bestAt.stat, overlap:false})
      setNextToBestAt({stat:nextToBestAt.stat, overlap:true})
    } else if (overlappingWith === "both") {
      setWorstAt({stat:newStat, overlap:true})
      setBestAt({stat:bestAt.stat, overlap:true})
      setNextToBestAt({stat:nextToBestAt.stat, overlap:true})
    } else {
      setWorstAt({stat:newStat, overlap:false})
    }

    //can I make the other skillLevels restate themselves?
    // setNextToBestAt(nextToBestAt)
    // setBestAt(bestAt)

  }

  const onSubmit = () => {
    
    //NEEDS TO SHOW SUMMARY AND HIDE OPTIONS (a re-render, not toggling display in css)!
    
  }

  const checkStatOverlap = (newStat, otherStat_a, otherStat_b) => {
    
    if (newStat === otherStat_a.stat && newStat === otherStat_b.stat) {
      console.log(`${newStat} equals both ${otherStat_a.stat} and ${otherStat_b.stat}`)
      return "both"
    } else if (newStat === otherStat_a.stat) {
      console.log(`${newStat} equals ${otherStat_a.stat}`)
      return "a"
    } else if (newStat === otherStat_b.stat) {
      console.log(`${newStat} equals ${otherStat_b.stat}`)
      return "b"
    } else {
      console.log(`${newStat} equals neither ${otherStat_a.stat} nor ${otherStat_b.stat}`)
      return "none"
    }
    
  }

  const filterPlaybooks = (priority, playbooks) => {
    //should NOT need to loop, as I can handle the asymettry HERE inside
    
    let playbooksFiltered = playbooks

    switch (priority) {
      case "magic":
        playbooksFiltered = playbooks.filter(element => {
          return element.magical > 2 && element.spiritual < 3
        })
        console.log("prioritized magic")
        break
      case "spiritual":
        playbooksFiltered = playbooks.filter(element => {
          return element.spiritual > 1
        })
        console.log("prioritized spiritualism")
        break
      case "tech":
        playbooksFiltered = playbooks.filter(element => {
          return element.toolsNTech > 2
        })
        console.log("prioritized tech")
        break
      case "skill":
        playbooksFiltered = playbooks.filter(element => {
          return element.magical < 3 && element.spiritual < 3 && element.toolsNTech < 3
        })
        console.log("prioritized skill")
        break
    }
    console.log(playbooksFiltered)
    setFilteredPlaybooks(playbooksFiltered)

    //map through playbooks to create state hooks for their lit status?
  


  }

  //I might not need these
  const onStrChange = (value) => {
    setStr (value)    
  }

  const onDexChange = (value) => {
    setDex (value)    
  }

  const onConChange = (value) => {
    setCon (value)    
  }

  const onIntChange = (value) => {
    setInt (value)    
  }

  const onWisChange = (value) => {
    setWis (value)    
  }

  const onChaChange = (value) => {
    setCha (value)    
  }

  


  //Conditional page rendering
  switch (currentPage) {
    
    //Page 0 allows you to skip instantly to a desired
    //page, for debug and styling purposes
    case 0:
      filterPlaybooks("skill", playbooks)
      setCurrentPage(4)
    ////////////////////////

    case 1:
      return (
        <>
          <Text
            question={questionData.intro}
          />
          <NavWrapper
            navigate={onCurrentPageChange}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        </>
      )
      
    case 2:
      return (
        <>
          <QuestionWrapper 
          question={questionData.questions.question_source}
          toChange={onSourceChange}
          source={source}
          />
          <NavWrapper
            navigate={onCurrentPageChange}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        </>
      )
      
    case 3:
      return (
        <>
          <form className="stat-questions-wrapper">
            <QuestionWrapper 
              question={questionData.questions.statQuestions.bestAt}
              options={questionData.questions.statQuestions.options}
              toChange={onBestAtChange}
              skillLevel = {bestAt}
              otherSkillLevel_a = {nextToBestAt}
              otherSkillLevel_b = {worstAt}
            />
            <QuestionWrapper 
              question={questionData.questions.statQuestions.nextToBestAt}
              options={questionData.questions.statQuestions.options}
              toChange={onNextToBestAtChange}
              skillLevel = {nextToBestAt}
              otherSkillLevel_a = {bestAt}
              otherSkillLevel_b = {worstAt}
            />
            <QuestionWrapper 
              question={questionData.questions.statQuestions.worstAt}
              options={questionData.questions.statQuestions.options}
              toChange={onWorstAtChange}
              skillLevel = {worstAt}
              otherSkillLevel_a = {bestAt}
              otherSkillLevel_b = {nextToBestAt}
            />
          </form>
          <div className="playbooks-wrapper">
            <PlaybookWrapper 
              playbooks={filteredPlaybooks}
              str = {str}
              dex = {dex}
              con = {con}
              int = {int}
              wis = {wis}
              cha = {cha}
            />
          </div>
            <NavWrapper
              navigate={onCurrentPageChange}
              currentPage={currentPage}
              lastPage={lastPage}
            />
            <p>--------------- DEBUG AID ---------------</p>
            <p>// STR: {str} // DEX: {dex} // CON: {con} //</p>
            <p>// INT: {int} // WIS: {wis} // CHA: {cha}//</p>
        </>
      )

      case 4:
      return (
        <>
          <QuestionWrapper 
              question={questionData.questions.personalityQuestions_fears}
          />
          <QuestionWrapper 
              question={questionData.questions.personalityQuestions_fearsOrigin}
          />
          <QuestionWrapper 
              question={questionData.questions.personalityQuestions_cultureGood}
          />
          <QuestionWrapper 
              question={questionData.questions.personalityQuestions_cultureBad}
          />
          <QuestionWrapper 
              question={questionData.questions.personalityQuestions_dream}
          />
          <NavWrapper
            navigate={onCurrentPageChange}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        </>
      )

      case 5:
      return (
        <>
          <Text
            question={questionData.results}
          />
          <NavWrapper
            navigate={onCurrentPageChange}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        </>
      )
      
  }

  return (
    <div>
      <SubmitButton 
            onSubmit={onSubmit}
      />
    </div>
  )
}

//onMagicChange={onMagicChange}
// onHijinxChange={onHijinxChange}
// onSpiritualChange={onSpiritualChange}
// onGrimChange={onGrimChange}
// onTechChange={onTechChange}
// onStrChange={onStrChange}
// onDexChange={onDexChange}
// onConChange={onConChange}
// onIntChange={onIntChange}
// onWisChange={onWisChange}
// onChaChange={onChaChange}

// const oldFilterPlaybooks = (choice, playbooks) => {
    
  //   //before filtering; status check
  //   console.log("user choices:")
  //   console.log(choice)
  //   console.log("should be all playbooks:")
  //   console.log(playbooks)

  //   //__________ MAGIC __________

  //   //create new array based on unfiltered playbooks
  //   let magicFiltered = playbooks

  //   if(choice.magical === null) {
  //     //no filtering
  //     console.log("was null - didn't filter magic")
  //   } else {
  //       //filter according to magic choice
  //       magicFiltered = playbooks.filter(element => {
  //       return element.magical === choice.magical || element.magical === choice.magical+2 || element.magical === choice.magical-2
  //     });
  //   }
  //   console.log("after magic:")
  //   console.log(magicFiltered)
    

  //   //__________ SPIRITUAL __________
    
  //   //create new array based on previous filter array
  //   let spiritualFiltered = magicFiltered

  //   if(choice.spiritual === null) {
  //     //(no filtering since user choice was null)
  //     console.log("was null - didn't filter spiritual")
  //   } else {
  //       //filter according to spiritual choice
  //       spiritualFiltered = magicFiltered.filter(element => {
  //         return element.spiritual === choice.spiritual || element.spiritual === choice.spiritual+2 || element.spiritual === choice.spiritual-2
  //       });
  //   }
  //   console.log("after spiritual:")
  //   console.log(spiritualFiltered)
    

  //   //__________ TECH __________

  //   //create new array based on previous filter array
  //   let techFiltered = spiritualFiltered

  //   if(choice.toolsNTech === null) {
  //     //(no filtering since user choice was null)
  //     console.log("was null - didn't filter tech")
  //   } else {
  //       //filter according to tech choice
  //       techFiltered = spiritualFiltered.filter(element => {
  //         return element.toolsNTech === choice.toolsNTech || element.toolsNTech === choice.toolsNTech+2 || element.toolsNTech === choice.toolsNTech-2
  //       });
  //   }
  //   console.log("after tech:")
  //   console.log(techFiltered)

  //   //__________ GRIM __________

  //   //create new array based on previous filter array
  //   let grimFiltered = techFiltered

  //   if(choice.grim === null) {
  //     //(no filtering since user choice was null)
  //     console.log("was null - didn't filter grim")
  //   } else {
  //       //filter according to grim choice
  //       grimFiltered = techFiltered.filter(element => {
  //         return element.grim === choice.grim || element.grim === choice.grim+2 || element.grim === choice.grim-2
  //       });
  //   }
  //   console.log("after grim:")
  //   console.log(grimFiltered)


  //   //__________ HIJINX __________

  //   //create new array based on previous filter array
  //   let hijinxFiltered = grimFiltered

  //   if(choice.hijinx === null) {
  //     //(no filtering since user choice was null)
  //     console.log("was null - didn't filter hijinx")
  //   } else {
  //       //filter according to grim choice
  //       hijinxFiltered = grimFiltered.filter(element => {
  //         return element.hijinx === choice.hijinx || element.hijinx === choice.hijinx+2 || element.hijinx === choice.hijinx-2
  //       });
  //   }
  //   console.log("after hijinx:")
  //   console.log(hijinxFiltered)

  //   //__________ BEST AT __________ [WARNING!: STILL RELIES ON HIJINXFILTERED]
    
  //   //create new array based on previous filter array
  //   let bestAtFiltered = hijinxFiltered //[WARNING!: STILL RELIES ON HIJINXFILTERED]

  //   switch (choice.bestAt) {
  //     case "STR":
  //       bestAtFiltered = hijinxFiltered.filter(element => {
  //         return element.usesSTR > 0
  //       });
  //       break
  //     case "DEX":
  //       bestAtFiltered = hijinxFiltered.filter(element => {
  //         return element.usesDEX > 0
  //       });
  //       break
  //     case "CON":
  //       bestAtFiltered = hijinxFiltered.filter(element => {
  //         return element.usesCON > 0
  //       });
  //       break
  //     case "INT":
  //       bestAtFiltered = hijinxFiltered.filter(element => {
  //         return element.usesINT > 0
  //       });
  //       break
  //     case "WIS":
  //       bestAtFiltered = hijinxFiltered.filter(element => {
  //         return element.usesWIS > 0
  //       });
  //       break
  //     case "CHA":
  //       bestAtFiltered = hijinxFiltered.filter(element => {
  //         return element.usesCHA > 0
  //       });
  //       break
  //   }
  //   console.log("after bestAt:")
  //   console.log(bestAtFiltered)

  //   //__________ WORST AT __________
    
  //   //create new array based on previous filter array
  //   let worstAtFiltered = bestAtFiltered

  //   switch (choice.worstAt) {
  //     case "STR":
  //       worstAtFiltered = bestAtFiltered.filter(element => {
  //         return element.usesSTR < 1
  //       });
  //       break
  //     case "DEX":
  //       worstAtFiltered = bestAtFiltered.filter(element => {
  //         return element.usesDEX < 1
  //       });
  //       break
  //     case "CON":
  //       worstAtFiltered = bestAtFiltered.filter(element => {
  //         return element.usesCON < 1
  //       });
  //       break
  //     case "INT":
  //       worstAtFiltered = bestAtFiltered.filter(element => {
  //         return element.usesINT < 1
  //       });
  //       break
  //     case "WIS":
  //       worstAtFiltered = bestAtFiltered.filter(element => {
  //         return element.usesWIS < 1
  //       });
  //       break
  //     case "CHA":
  //       worstAtFiltered = bestAtFiltered.filter(element => {
  //         return element.usesCHA < 1
  //       });
  //       break
  //   }
  //   console.log("after bestAt:")
  //   console.log(bestAtFiltered)
  // }
    
    // const choice = {
    //   magical: magic,
    //   spiritual: spiritual,
    //   toolsNTech: tech,
    //   grim: grim,
    //   hijinx: hijinx,
    //   bestAt: bestAt,
    //   nextToBestAt: nextToBestAt,
    //   worstAt: worstAt,
    //   usesSTR: str,
    //   usesDEX: dex,
    //   usesCON: con,
    //   usesINT: int,
    //   usesWIS: wis,
    //   usesCHA: cha
    // }
    // playbooks = playbookData

    // if(choice.bestAt === choice.nextToBestAt || choice.worstAt === choice.nextToBestAt || choice.worstAt === choice.bestAt) {
    //   console.log("no you IDIOT!!")
    // } else {
    //   oldFilterPlaybooks(choice, playbooks)
    // }
    

