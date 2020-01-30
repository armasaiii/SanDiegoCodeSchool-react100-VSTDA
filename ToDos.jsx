import React from 'react'
import ToDoList from './ToDoList'

class ToDos extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Tasks: []
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick(event) {
      console.log('NICE!!!')
      this.setState ({Tasks: event.target.value})
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