import React from 'react'
import ToDoList from './ToDoList'

class ToDos extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        ToDos: []
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {
      console.log('NICE!!!')
      this.setState ({ToDos: 'I am doing fine, Thank you.'})
    }

    render () {
        return (
            <div>
                <ToDoList/>
            </div>
        )
    }
}

export default ToDos