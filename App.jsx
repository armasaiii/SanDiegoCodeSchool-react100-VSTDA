import React, { Component } from 'react';
import ToDos from './ToDos'
import ToDoList from './ToDoList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [], 
      newTask: '' 
    }
    this.handleItemInput = this.handleItemInput.bind(this)
    this.newItemSubmitHandler = this.newItemSubmitHandler.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    console.log(this.state)
  }
  
handleItemInput(event) {
  this.setState({newTask: event.target.value})
  // console.log(event)
}

newItemSubmitHandler(event) {
  console.log(event)
  //this.setState({newTask: event.target.value})
  event.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.newTask,
        },
        ...this.state.list
      ],
      newTask: ''
    })
  }

handleRemove() {
  this.setState({newTask: event.target.value})
}

render(props) {
  return (
    <div>
      <ToDoList
      //input
        className='textarea'
        type='text'
        handleItemInput={this.handleItemInput}
        newItemSubmitHandler={this.newItemSubmitHandler}
        value={this.state.newTask}
      />
      
      <ToDos
        data={this.state}
      />



    </div>
  )
}
}

export default App
