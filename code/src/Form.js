import React, {useState} from 'react'
// import Header from './components/Header/Header'
import NameForm from './components/NameForm/NameForm'
import RadioButtons from './components/RadioButtons/RadioButtons'
import DropDown from './components/DropDown/DropDown'
import WelcomePage from './components/WelcomePage/WelcomePage'
import Result from './components/Result/Result'

const Form = () => {
    //All useStates, so they can be used as props 
    const [name, setName] = useState('')
    const [GenreGroup, setGenreGroup] = useState('')
    const [snack, setSnack] = useState("");
    const [component, setComponent] = useState("welcomePage");

    //Building the array of components, so new component can render in order, when clicking next 

    const componentOrder = [
        'startPage',
        'snackQuestion',
        'genreQuestion',
        'nameQuestion',
        'summaryPage'
    ]

    // This function: 
    //1) prevents the page from refreshing
    //2) using indexOf method to loop through the array order consisting of different steps
    //3) Using useStates, so it has a default start" and add +1 to go to next step in array.

    const executeSubmit = (event) => {
        event.preventDefault();
        const nextComponentIndex = componentOrder.indexOf(component);
        setComponent(componentOrder[nextComponentIndex+1])
        console.log('clicked')
    }

    //
    return (
        <>
            <section className="section">
                {component !== 'summaryPage' ? (
                    <form>
                        {component === 'welcomePage' && (
                        <WelcomePage />
                        )}
                        {component === 'snackQuestion' && (
                        <DropDown snack={snack} setSnack={setSnack}/>
                        )}
                        {component === 'genreQuestion' && (
                        <RadioButtons GenreGroup={GenreGroup} setGenreGroup={setGenreGroup}/>
                        )}
                        {component === 'nameQuestion' && (
                        <NameForm name={name} setName={setName}/>
                        )} 
                        <button onClick={executeSubmit}>next</button>
                    </form>
                    ):(
                    <div>
                        <Result
                        snack={snack}
                        GenreGroup={GenreGroup}
                        name={name}
                         />
                    </div>
                    )  
                }
            </section>
        </>
    )
}

export default Form 