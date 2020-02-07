import React from 'react'
import ToDoList from './ToDoList'
import List from './List'

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
  }

  handleItemInput(event) {
    this.setState({ 
      newTask: event.target.value 
    })
  }
  
  newItemSubmitHandler(event) {
    event.preventDefault()
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

  handleRemove(index) {
    this.setState((prevState) => ({
        remove: prevState.remove.filter(item => item.index !== index),
    }))
};

  render() {
    return (
      <div className='wrapper'>
        <ToDoList
          className='input'
          type='text'
          handleItemInput={this.handleItemInput}
          newItemSubmitHandler={this.newItemSubmitHandler}
          value={this.state.new}
          placeholder='Add an item'
        />
        
        <List 
          list={this.state.list} 
          handleRemove={this.state.remove}
        />
        
      </div>
    )
  }
}

export default App
