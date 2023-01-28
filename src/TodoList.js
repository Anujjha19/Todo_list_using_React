import React from "react";

const TodoList = (props) => {

/*     const deleteTodo = () => {
        console.log( " Deleted ");
    } */

    return (
        <>
            <div className="todo-style">
                <i className= "fa fa-times" aria-hidden="true" 
                // onClick={ deleteTodo}
                onClick={ 
                    () => {
                        props.onSelect(props.id); 
                    }
                }
                />
                <li>{props.text}</li>
            </div>
        </>
    )
};
export default TodoList;