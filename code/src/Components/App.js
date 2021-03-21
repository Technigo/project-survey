import React, { useState } from 'react'
import QuestionWrapper from './QuestionWrapper'
import questionData from '../questionData.json'
import playbookData from '../playbookData.json'
import SubmitButton from './SubmitButton'
import NavWrapper from './NavWrapper'
import PlaybookWrapper from './PlaybookWrapper'

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
  const [currentPage, setCurrentPage] = useState(0) //should be 1. Set to 0 to instantly go to currently set testing state
  const [blocker, setBlocker] = useState({blocking:false,explanation:"default error! :D"})
  const [filteredPlaybooks, setFilteredPlaybooks] = useState([])

  //USED!!!!
  const [bestAt, setBestAt] = useState("")
  const [nextToBestAt, setNextToBestAt] = useState("")
  const [worstAt, setWorstAt] = useState("")
  
  //I might not need these as States after all, just one state per dropdown? Why is this? I think I'll be able to articulate it later
  const [str, setStr] = useState(null)
  const [dex, setDex] = useState(null)
  const [con, setCon] = useState(null)
  const [int, setInt] = useState(null)
  const [wis, setWis] = useState(null)
  const [cha, setCha] = useState(null)
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
    console.log(`in checkBlocker`)
    if (currentPage === 1 && source === "" && direction === 1) { 
      console.log(`SHOULD block`)
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
  const onBestAtChange = (value) => {
    console.log(`best at: ${value}`)
    switch (value) {
      case "STR":
        setStr(2) //The problem is right here: that stats are set but the previous one is never unset
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
    
    setBestAt(value)
  
  }

  const onNextToBestAtChange = (value) => {
    console.log(`next to best at: ${value}`)
    switch (value) {
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

    setNextToBestAt(value)

  }

  const onWorstAtChange = (value) => {
    console.log(`worst at: ${value}`)
    switch (value) {
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
    
    setWorstAt(value)

  }

  const onSubmit = () => {
    
    //NEEDS TO SHOW SUMMARY AND HIDE OPTIONS (a re-render, not toggling display in css)!
    

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
    
    //Styling mode hacks:
    case 0:
      filterPlaybooks("skill", playbooks)
      setCurrentPage(3)
    ////////////////////////

    case 1:
      return (
        <>
          {/* {console.log(`I am now rendering page ${currentPage}`)} */}
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
          {/* {console.log(`I am now rendering page ${currentPage}`)} */}
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
          {/* {console.log(`I am just about to render page ${currentPage} and just so you know blocker.blocking is ${blocker.blocking}`)} */}
          <div className="stat-questions-wrapper">
            <QuestionWrapper 
              question={questionData.questions.statQuestions.bestAt}
              options={questionData.questions.statQuestions.options}
              toChange={onBestAtChange}
              skillLevel = {bestAt}
            />
            <QuestionWrapper 
              question={questionData.questions.statQuestions.nextToBestAt}
              options={questionData.questions.statQuestions.options}
              toChange={onNextToBestAtChange}
              skillLevel = {nextToBestAt}
            />
            <QuestionWrapper 
              question={questionData.questions.statQuestions.worstAt}
              options={questionData.questions.statQuestions.options}
              toChange={onWorstAtChange}
              skillLevel = {worstAt}
            />
          </div>
          <div className="playbooks-wrapper">
            <PlaybookWrapper 
              playbooks={filteredPlaybooks}
              str = {str}
              dex = {dex}
              con = {con}
              int = {int}
              wis = {wis}
              cha = {cha}
              // bestAt={bestAt}
              // nextToBestAt={nextToBestAt}
              // worstAt={worstAt}
            />
          </div>
            <NavWrapper
              navigate={onCurrentPageChange}
              currentPage={currentPage}
              lastPage={lastPage}
            />
            <p>// STR: {str} // DEX: {dex} // CON: {con} //</p>
            <p>// INT: {int} // WIS: {wis} // CHA: {cha}//</p>
        </>
      )

      case 4:
      return (
        <>
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
      
      {/* <QuestionWrapper 
        question={questionData.questions.question_magic}
        toChange={onMagicChange} 
        
      />
      <QuestionWrapper 
        question={questionData.questions.question_spiritual} 
        toChange={onSpiritualChange}
        
      />
      <QuestionWrapper 
        question={questionData.questions.question_tech} 
        toChange={onTechChange}
        
      />
      <QuestionWrapper 
        question={questionData.questions.question_grim} 
        toChange={onGrimChange}
        
      />
      <QuestionWrapper 
        question={questionData.questions.question_hijinx} 
        toChange={onHijinxChange}
        
      /> */}
      

      <div>
        <p>// Source: {source} // Hijinx: {hijinx} // Magic: {magic} // Tech: {tech} // Spiritual: {spiritual} // Grim: {grim} //</p> 
        <p>// STR: {str} // DEX: {dex} // CON: {con} //</p>
        <p>// INT: {int} // WIS: {wis} // CHA: {cha}//</p>
      </div>
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
    

