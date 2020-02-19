import React from 'react'
		
class ToDo extends React.Component {
render() {
	return (
		<div className='left-section'>
		  <div className='card'>
		  <div className='card-header'>
		    Add New Todo
		  </div>
		  </div>

		  <div className='form-group'>
		  <div className='card-body'>
		    <label>
          </label>
          <textarea 
            className='container-input' 
            name='text' 
            id='text area' rows='3' 
            onChange={this.props.handleChange}/>
        <br/>
		      <div className='row'/>
            <label>
              Level of importance
            </label>		
              <select 
                name='priority' 
                className='create-todo-priority' 
                onChange={this.props.handleChange}>
                <option value='0'>Priority</option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
              </select>
            <br/>
              <button 
            className='action1' 
            onClick={this.props.handleClick}>
              Add 
          </button>
          <hr/>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default ToDo

