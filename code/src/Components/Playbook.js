import React from 'react'

const Playbook = (props) => {
    
    return (
        <div 
            className="playbook"
            //style={{filter: `grayscale(${10 - supported(props)}0%)`}}
            style={{filter: (supported(props) ? "none": "grayscale()")}}
        >
            <h5>The</h5>
            <h3>{props.playbook.name.substring(4)}</h3>
        </div>
    )
    
}

const supported = (props) => {
    // console.log("RAN SUPPORTED!")
    let support = 0
    let debug = ""
    let i = 0
    //console.log(`Support after reset attempt: ${support}`)

    //find values that are 2, and if so take their adress []
    Object.keys(props.playbook).forEach(function (key) {
        if(i < 6) {
            i++
        } else {
            //console.log(`${key}`)
            let value = props.playbook[key];
            let userKey = key.substring(4)
            userKey = userKey.toLowerCase()
            // console.log(`userKey: ${userKey}`)
            // console.log(`should be STR, DEX etc: ${key.substring(4)}`)
            
            // console.log(`Their ${userKey} is ${props.playbook[key]}`)
            // console.log(`My ${userKey} is ${props[userKey]}`)
            
            //so it is here where it gets fucked?
            switch(value) {
                case 0:
                    //not important
                    break
                case 1:
                    // switch(props[userKey]) {
                    //     case -2:
                    //         support -= 3
                    //         break
                    //     case -1:
                    //         support -= 1
                    //         break
                    //     case 0:
                    //         support -= 0
                    //         break
                    //     case 1:
                    //         support += 1
                    //         break
                    //     case 2:
                    //     support += 3
                    //         break
                    // }
                    break
                case 2:
                    switch(props[userKey]) {
                        case -2:
                            support -= 5
                            debug += "FAN"
                            break
                        case -1:
                            support -= 2
                            debug += "nej"
                            break
                        case 0:
                            support -= 0
                            debug += "okej"
                            break
                        case 1:
                            support += 2
                            debug += "jooo"
                            break
                        case 2:
                            support += 5
                            debug += "JIPPIEEE"
                            break
                    }
                    break
        

            }
        }
        
        
        
    });
    
    //console.log(props.playbook)
    //console.log(debug)

    //console.log(`${props.playbook.name}: ${support} support`)
    
    if (support > 0) {
        return true
    } else {
        return false
    }
    
    
}

export default Playbook;