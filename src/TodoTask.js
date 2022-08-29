import React, { useState } from 'react';
import "./styles.css"

function TodoTask({addTask,taskRef, text,className,check,setCheck}) {
  return (
    <>
    <div style={{display:'flex'}}>
      <input className={className} type='text' placeholder='Add task here..' ref={taskRef} onChange={(e) => e.target.value != '' ? setCheck(false) : setCheck(true) }/>
      <button onClick={addTask} disabled={check}>{text} Task</button>
    </div>
    </>
  )
}

export default TodoTask