import React from 'react'

const ProgressBar = ({bgcolor,progress,height}) => {
    const parentdiv = {
        height: height,
        width: '90%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
      
      const childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
        
      }
      
      const progresstext = {
        padding: 15,
        color: 'white',
        fontWeight: 900,
        fontSize: 25 
      }
        
    return (
    <div style={parentdiv}>
      <div style={childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}

export default ProgressBar