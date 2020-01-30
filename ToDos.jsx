import React from 'react'
import ToDoList from './ToDoList'

class ToDos extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Tasks: 'Hello, how are you doing today?'
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {
      console.log('NICE!!!')
      this.setState ({Tasks: 'I am doing fine, Thank you.'})
    }

    render () {
        return (
          <ToDoList
          onClick={this.handleClick}
          data={this.state}
          />
        )
    }
}

export default ToDos