import React from 'react'

const Progress_bar = ({progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: '#dedede',
        borderRadius: 40,
        margin: 0,
        marginBottom: 32
      }
      
      const Childdiv = {
        height: '100%',
        // width: `${progress}%`,
        width: `30%`,
        backgroundColor: '#379d00',
        borderRadius:40,
      }
      
      const progresstext = {
        padding: 10,
        color: '#333',
        fontWeight: 600,
        fontSize: 14
      }
        
    return (
    <div className="progress-bar">
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progress}%`}</span>
        </div>
      </div>
    </div>
    )
}
  
export default Progress_bar