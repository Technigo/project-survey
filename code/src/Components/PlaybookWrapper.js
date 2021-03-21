import React from 'react'
import Playbook from './Playbook'

const PlaybookWrapper = (props) => {
    
    return (
            props.playbooks.map((playbook) => {
                console.log("-------------------------------")
            return (
                <Playbook 
                    playbook={playbook}
                    str = {props.str}
                    dex = {props.dex}
                    con = {props.con}
                    int = {props.int}
                    wis = {props.wis}
                    cha = {props.cha}
                    key = {playbook.name}
                    // bestAt={props.bestAt}
                    // nextToBestAt={props.nextToBestAt}
                    // worstAt={props.worstAt}
                />
            )
        })

    )

    
    //this one renders in the first place, which is good, but divs are empty
    // return (
    //     <div>
    //         {props.playbooks.forEach(element => {
    //         i += 1
    //         console.log(i)
    //         return (
    //             <>
    //                 <div>TEST</div>
    //                 <Playbook 
    //                     playbook={element}
    //                 />
    //             </>
    //         )
    //     })}
    //     </div>
        
    // )

}

export default PlaybookWrapper;