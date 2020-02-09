import React from 'react'
import ToDoList from './ToDoList'
import List from './List'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],  
      newTask: '',
      // delete:'',
      // edit: '',
    }
    this.handleItemInput = this.handleItemInput.bind(this)
    this.newItemSubmitHandler = this.newItemSubmitHandler.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handlePriority = this.handlePriority.bind(this)


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
   // console.log('nice', index)
    event.preventDefault()
    const newState = this.state.list.filter(item => {
      this.state.list.indexOf(item) !== index
    })

    this.setState({ 
      list: newState
    })
  }

  handleEdit() {
    this.setState = ({edit: this.state.edit})
  }

  handlePriority() {
    this.setState = ({priority: this.state.priority})
  }



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
          handleRemove={this.handleRemove}
        />
        
      </div>
    )
  }
}

export default App
