import React from "react";
import './todo-item.css'

const TodoItem=({data,setImportant,setDone,deleteItem})=>{
    const {id,label,important,done}=data;
    const spanImportant=important?'important ':"";
    const spanDone=done?'done ':"";
    const spanValue=spanImportant+spanDone;

    return(
        <React.Fragment>
            <span className={spanValue} onClick={()=>setImportant(id)}>{label}</span>
            <div>
                <button onClick={()=>setDone(id)}>done</button>
                <button onClick={()=>deleteItem(id)}>delete</button>
            </div>
        </React.Fragment>
    )
}

export default TodoItem;