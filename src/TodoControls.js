import React, { useRef, useState } from 'react'
import TodoTask from './TodoTask';
import "./styles.css"

function TodoControls() {
    const TaskRef = useRef();
    const [task, setTask] = useState([])
    const [doneTask, setDoneTask] = useState([])
    const [editTask, setEditTask] = useState(null)
    const [text, setText] = useState('Add')

    const handleTask = () => {
        const newTask = TaskRef.current.value;
        if (editTask != null) {
            task[editTask] = TaskRef.current.value;
            setTask([...task]);
            setEditTask(null)
            setText("Add")
        } else {
            setTask([...task, newTask]);
        }

        TaskRef.current.value = null;
    }

    const handleEdit = (i, index) => {
        TaskRef.current.value = i;
        setEditTask(index)
        TaskRef.current.focus();
        setText("Update")
    }

    const handleDelete = (index) => {
        const newarr = task.filter((old, i) => {
            return index != i
        })
        setTask([...newarr]);
    }

    const handleDone = (index) => {

        setDoneTask([...doneTask, index]);
        console.log(doneTask)
    }

    return (
        <>
            <TodoTask className='todo-input' taskRef={TaskRef} addTask={() => handleTask()} text={text} />
            <ul className='todo-ul'>{task.map((i, index) => {
                const tt = doneTask.filter(ind => { return doneTask[ind] == index })
                return (<li key={index} className={`todo-li ${tt[0] == index ? 'done' : ''}`}>
                    <span>{i}</span>
                    <span style={{padding:'10px'}}>
                    <button className='todo-btn' onClick={() => handleEdit(i, index)} disabled={tt[0] == index ? true : false}>Edit</button>
                    <button className='todo-btn' onClick={() => handleDelete(index)}>Delete</button>
                    <button className='todo-btn' onClick={() => handleDone(index)} disabled={tt[0] == index ? true : false}>Done</button>
                    </span>
                </li>
                )
            })}
            </ul>
        </>
    )
}

export default TodoControls