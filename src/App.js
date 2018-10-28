import React, { Component } from 'react';

const Todo = (props) => (
  <div className="todoPiece">
   {props.todo.text}
   <input type="checkbox" />
  </div>
)
class App extends Component {
  
  state = { 
    todoList : [
      {
        text: 'Be awesome',
        done: true,
      },
      {
        text : "Learn React",
        done : false,
      },
      {
        text: 'Learn something else',
        done: false,
      },
    ],
  }

  render() {
    const todoList = this.state.done
    console.log(this.state)
    return (
      <div className="App">
      <h1>TO DO List</h1>
      <div className="todoList">
      {this.state.todoList.map((todo,index) => <Todo todo={todo} key={index} />)}    
      </div>
      
      <div className="textField">
        <input className="textfeild"></input>
        <button onClick={() => console.log("yo")} >Add</button>
      </div> 
      </div>
    );
  }
}

export default App;
