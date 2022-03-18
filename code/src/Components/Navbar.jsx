import React from 'react'


const Navbar = ({pageNumber, setPageNumber}) => {
    const pageForward = () => {
    setPageNumber(pageNumber + 1)
    }
    const pageBackwards = () => { 
    setPageNumber(pageNumber - 1)
    }
    const refresh = () => {
    window.location.reload();
    }

    return (
        <>
        {pageNumber !== 0 && pageNumber <3 &&
        <button className='buttons' onClick={pageBackwards}>Previous</button>
        }
        {pageNumber <3 &&
        <button className='buttons' onClick={pageForward}>Next</button>
        }

        {pageNumber === 3 && 
        <button className='buttons' onClick={pageForward}>Submit</button>
        }

        {pageNumber === 4 &&  
        <button  className='buttons' onClick={refresh}>Refresh</button>
        }
        </>
    )
}


export default Navbar