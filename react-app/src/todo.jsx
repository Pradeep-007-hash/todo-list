import React from "react";

import { useState } from "react";
function App(){
    const [task, setTask]=useState("");
    const [todo,settodo]=useState([]);


    const addTask=()=>{
        if(task.trim()===""){
            alert("Please enter a task");
            return;
        }
        settodo([...todo,task]);
        setTask("");
    };

    const deleteTask=(index)=>{
        const newtodo=todo.filter((_,i)=>i!==index);
        settodo(newtodo);
    };

    return(
        <>
        <div>
            <h2>To-Do-list</h2>
        </div>
        </>
    )
}
export default App;