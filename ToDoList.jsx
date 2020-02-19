import React from 'react'

class ToDoList extends React.Component {
    render() {
        if (this.props.isEditing) {
        return (
          <div className='container-todo'>
            <div className='form-group todo'>
              <textarea 
                  className='update-todo-text' 
                  name='text' 
                  onChange={this.props.viewTodoEdit}/>
                  <label htmlFor='Priority'>
                      Priority
                  </label>
                  <select 
                      name='update-todo-priority' 
                      onChange={this.props.viewToDoPriority}>
                      <option value='0'>Priority</option>
                      <option value='1'>Low</option>
                      <option value='2'>Medium</option>
                      <option value='3'>High</option>
                  </select>
                  <div className='row'/>
                  <button 
                    type='button' 
                    className='action' 
                    onClick={this.props.handleNewSave}>
                      Save
                  </button>
                <div>
              </div>  
            </div>
          </div>
        )
    }
      return (
        <div className='container-todo'>
            <div className={this.props.priority}>
                <input 
                    onChange={this.props.completedTask}
                    type='checkbox' name='feature'
                    value=''/>

                <label 
                    /* className={this.props.isComplete  ? 'strike-through':''} */>
                    {this.props.text}
                </label>
        
                <button 
                    className='action1' 
                    onClick={this.props.clickEdit}>
                        Edit
                </button>
        
                <button 
                    className='action' 
                    onClick={this.props.clickDelete}>
                        Delete
                </button>
            </div>
        </div>
        )
    }
}
  
  export default ToDoList
