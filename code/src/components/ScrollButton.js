import React from 'react'
import './ScrollButton.css'

export const ScrollButton = (props) => {
    let i = 0;

    const executeScroll = () => {
        i++;
        switch (i) {
          case 1:
            props.ref1.current.scrollIntoView();
            break;
          case 2:
            props.ref2.current.scrollIntoView();
            break;
          case 3:
            props.ref3.current.scrollIntoView();
            break;
          case 4:
            props.ref4.current.scrollIntoView();
            break;
          default:
            window.scrollTo(0, 0);
            i = 0;
        }
    }
     

    return (
        <button className="scroll-button" onClick={executeScroll} data-content="NEXT">
        </button>
    )
}