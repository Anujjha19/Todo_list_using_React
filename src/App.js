import './App.css';
import './index.css';
import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';

const App = () => {


  const [inputList, setInputList] = useState(""); //Taking Initial input And Updating 
  const [items, setItems] = useState([]); // Adding those input as empty array  

  const seeChangeInput = (event) => { //Adding the user value to the inputList
    setInputList(event.target.value);
  }

  const addListItems = () => { //adding the list every timr to our previous array
    var a = document.getElementById('hi').value; //Checking For Empty Value
    if (a === '') alert("Enter Your Todo First ");
    /* if(!inputList) {
      '{alert}'
    } */
    else {
      setItems((oldItems) => {
        return ([...oldItems, inputList]);
      })
      setInputList("");
    }
  }

  //Deleting items on select / ON click
  /* Since take id from icon click and match with all the id of Array , return only the id that do  not matches  */
  const deleteTodo = (id) => {
    //console.log( " Deleted ");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }

  const removeAll =() => {
    setItems([]);
  }


  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input id='hi' type="text"
            placeholder='Add your Todo item '
            onChange={seeChangeInput}
            value={inputList}
          />
          <button className='bye' onClick={addListItems}  > + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {
              items.map((itemsVal, index) => {
                // return (<li>{itemsVal}</li>)
                return (<TodoList
                  key={index}
                  // itemsVal ={itemsVal}
                  text={itemsVal}
                  id={index}

                  onSelect={deleteTodo}
                />)
              })
            }
          </ol>
        </div>
        <br />
        <div className='footer'> Total Items You Need To Do : {items.length} </div>

        <div className='listall'
        // data-sm-link-text='Remove ALl'
        onClick={removeAll}
        >
          <button className='list1' >
            Remove All
          </button> </div>
      </div>

    </>
  )
}

export default App;
