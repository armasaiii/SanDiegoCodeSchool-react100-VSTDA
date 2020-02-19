import React from 'react'
import ToDo from './ToDo'
import ToDoList from './ToDoList'
// import EditComponent from './EditComponent'
// import SaveComponent from './SaveComponent'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],  
      text: '',
      priority: '',
      newPriority: '',
      newText: '',
      isComplete: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleViewTodoDelete = this.handleViewTodoDelete.bind(this)
    this.handleEditChanges = this.handleEditChanges.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.clickEdit = this.clickEdit.bind(this)
    this.clickDelete = this.clickDelete.bind(this)
    this.handleNewSave = this.handleNewSave.bind(this)
    this.viewTodoEdit = this.viewTodoEdit.bind(this)
    this.viewToDoPriority = this.viewToDoPriority.bind(this)
    this.completedTask=this.completedTask.bind(this)
    // this.handleEdit = this.handleEdit.bind.this
  }

  handleClick() {
    const newTodo = {
      text: this.state.text,
      priority: this.state.priority,
      // id: Date.now(),
      isEditing: false
    }
    const newArray = [...this.state.list]
    newArray.push(newTodo)
    this.setState({
      list: newArray
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEditChanges(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSave(id, text, priority) {
    const newArray = [...this.state.list]
    const tempId = id
    const index = newArray.findIndex(item => item.id === tempId)
    newArray[index].isEditing = false
    newArray[index].text = text
    newArray[index].priority = priority
    this.setState({
      list: newArray
    })
  }

  handleEdit(id) {
    const newArray = [...this.state.list]
    const tempId = id
    const index = newArray.findIndex(item => item.id === tempId)
    newArray[index].isEditing = true
    this.setState({
      list: newArray
    })
  }

  handleViewTodoDelete(id) {
    const newArray = [...this.state.list]
    const tempId = id
    const index = newArray.findIndex(item => item.id === tempId)
    newArray.splice(index, 1)
    this.setState({
      list: newArray
    })
  }

  clickEdit() {
    this.handleEdit(this.id)
  }

  clickDelete() {
    this.handleViewTodoDelete(this.id)
  }

  handleNewSave() {
    this.handleSave(this.state.list.id, this.state.newText, this.state.newPriority)
    //might have to change this.state.newText and this.state.pro
  }

  viewTodoEdit(event) {
    this.setState({newText: event.target.value})
  }
  
  viewToDoPriority(event) {
    this.setState({newPriority: event.target.value})
  }

  completedTask() {
  const {isComplete}=this.state
  this.setState({isComplete: !isComplete})
 }

  render() {
    // const view = this.state.mode === 'view'
    return (
      <div className='container'>
      <h1>Very Simple Todo App</h1>
      <h2>Track all of the things</h2>
      <hr />
      <div className='form-group '>
        <div className='row' >
          <div className='form col-md-5'>
            <ToDo
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          </div>
      <div className='col-md-7'>
        {this.state.list.length > 0 && this.state.list.map((list) => {
        let priority
        if (list.priority == 1) {
          priority = 'alert-success'
        } else if (list.priority == 2) {
          priority = 'alert-warning'
        } else if (list.priority == 3) {
          priority = 'alert-danger'
        }

    return (
      <ToDoList
        id={list.id}
        text={list.text}
        priority={priority}
        edit={this.handleEdit}
        delete={this.handleViewTodoDelete}
        isEditing={list.isEditing}
        save={this.handleSave} 
        isComplete={this.completedTask}
        handleNewSave={this.handleNewSave}
        clickEdit={this.clickEdit}
        clickDelete={this.clickDelete}
        viewTodoEdit={this.viewTodoEdit}
        viewToDoPriority={this.viewToDoPriority}
        // completedTask={this.completedTask}
      />
      )
      })}
      </div>
    </div>
  </div>
</div>
    )
  }
}

export default App

