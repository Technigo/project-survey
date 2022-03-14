import React from 'react'
import TipiMatrix from './TipiMatrix'


// import TipiDropDown from './TipiDropDown'
// const mobileQuery = window.matchMedia('(max-width: 768px)')
// const tabletQuery = window.matchMedia('(min-width: 769px) and (max-width: 1099px)')
// const desktopQuery = window.matchMedia('(min-width: 1100px)')

// const queries = {
//     mobile: '(max-width: 768px)',
//     tablet: '(min-width: 769px) and (max-width: 1099px)',
//     desktop: '(min-width: 1100px)'
// }

// const TipiPage = () => {
//         if (mobileQuery.matches) {
//         return (
//             <>
//             <h1>Personality Inventory</h1>
//             <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
//             <TipiDropDown />
//             </>
//             )
//     } else if (tabletQuery.matches) {
//         return (
//             <>
//             <h1>Personality Inventory</h1>
//             <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
//             <TipiDropDown />
//             </>
//             )
//     } else if (desktopQuery.matches) {
//         return (
//             <>
//             <h1>Personality Inventory</h1>
//             <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
//             <TipiMatrix />
//             </>
//             )
//     }
// }

const TipiPage = () => {
    // if (mobileQuery.matches) {
    //     return (
    //         <>
    //         <h1>Personality Inventory</h1>
    //         <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
    //         <TipiDropDown />
    //         </>
    //         )
    // } else if (tabletQuery.matches) {
    //     return (
    //         <>
    //         <h1>Personality Inventory</h1>
    //         <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
    //         <TipiDropDown />
    //         </>
    //         )
    // } else if (desktopQuery.matches) {
    //     return (
    //         <>
    //         <h1>Personality Inventory</h1>
    //         <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
    //         <TipiMatrix />
    //         </>
    //         )
    // }
    return (
        <>
            <h1>Personality Inventory</h1>
            <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
            <TipiMatrix />
        </>
    )
}

export default TipiPage