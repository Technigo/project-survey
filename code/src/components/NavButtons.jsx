import React from 'react';
import forwardButton from '../assets/forward-purple.png'
import backButton from '../assets/back-purple.png'
import restartButton from '../assets/restart-purple.png'

const refreshPage = () => {
    window.location.reload();
}

const leftAlign = {
    justifyContent: 'flex-end'
}

const NavButtons = (props) => {
    console.log(props)

    // Huge long IF statement for validation (there's probably a better way of doing this...)
    const pageForward = () => {
        if (props.pageNumber === 1 && props.name.length === 0) {
            props.setError('Please fill in the required fields.')
            props.setPageNumber(1)
        } else if (props.pageNumber === 2 && props.gender === '') {
            props.setError('Please fill in the required fields.')
        } else if (props.pageNumber === 3 && props.age === '') {
            props.setError('Please fill in the required fields.')
        } else if (props.pageNumber === 4 && (props.tipiq1Answer === 'default' || props.tipiq2Answer === 'default' || props.tipiq3Answer === 'default' || props.tipiq4Answer === 'default' || props.tipiq5Answer === 'default' || props.tipiq6Answer === 'default' || props.tipiq7Answer === 'default' || props.tipiq8Answer === 'default' || props.tipiq9Answer === 'default' || props.tipiq10Answer === 'default')) {
            props.setError('Please fill in the required fields.')
        } else if (props.pageNumber === 6 && (props.tiviq1Answer === 'default' || props.tiviq2Answer === 'default' || props.tiviq3Answer === 'default' || props.tiviq4Answer === 'default' || props.tiviq5Answer === 'default' || props.tiviq6Answer === 'default' || props.tiviq7Answer === 'default' || props.tiviq8Answer === 'default' || props.tiviq9Answer === 'default' || props.tiviq10Answer === 'default')) {
            props.setError('Please fill in the required fields.')
        } else if (props.pageNumber === 7 && (props.tiviq11Answer === 'default' || props.tiviq12Answer === 'default' || props.tiviq13Answer === 'default' || props.tiviq14Answer === 'default' || props.tiviq15Answer === 'default' || props.tiviq16Answer === 'default' || props.tiviq17Answer === 'default' || props.tiviq18Answer === 'default' || props.tiviq19Answer === 'default' || props.tiviq20Answer === 'default')) {
            props.setError('Please fill in the required fields.')
        } else {
            props.setError('noError')
            window.scrollTo(0, 0)
            props.setPageNumber(props.pageNumber + 1)
        }
    }
    
    const pageBackward = () => {
        window.scrollTo(0, 0)
        props.setPageNumber(props.pageNumber - 1)
    }

    if (props.pageNumber === 0) {
        return (
            <div className="nav-buttons" style={leftAlign}>
                <button onClick={pageForward}><img className="navbutton-icon" src={forwardButton} alt="forward button" /></button>
            </div>
        )
    } else {
        return (
            <div className="nav-buttons">
            {props.pageNumber > 0 && props.pageNumber <= 9 && <button onClick={pageBackward}><img className="navbutton-icon" src={backButton} alt="back button" /></button>}
            {props.pageNumber > 0 && props.pageNumber < 9 && <button onClick={pageForward}><img className="navbutton-icon" src={forwardButton} alt="forward button" /></button>}
            {props.pageNumber === 9 && <button onClick={refreshPage}><img className="navbutton-icon" src={restartButton} alt="restart button" /></button>}
        </div>
        )
    }
}

export default NavButtons
