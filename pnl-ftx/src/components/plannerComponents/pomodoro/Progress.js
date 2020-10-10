import React from 'react'
import "./Progress.css"
export const Progress = (props) => {
    // filling the array of size 5 with "true" from index 0 to progress
    let progress = new Array(4).fill(0).fill(true,0,props.progress);
    return (
      <div>
         {progress.map((item,index) => (
        <span key={index} className={`dot ${progress[index]?'completed':''}`}></span>
      ))}
  
      </div>
     
  
    )
  }