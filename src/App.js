import React, { Component } from 'react';


class App extends Component {
  
  state = { todoList : [{
    text : "Learn React",
    done : false
  }] }
  
  render() {
    return (
      <div className="App">
      <h1>TO DO List</h1>
      <div className="todoList">

      </div>
        
      </div>
    );
  }
}

export default App;
