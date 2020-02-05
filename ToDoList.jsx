import React from 'react'

 function ToDoList(props) {
     return (
    <main>
    <div>
        <div className='header'>
            <header>
                <h1>Very Simple To Do App</h1>
                    <h3>Track all of the things I have to do</h3>
                <hr/>
            </header>
        </div>
        <div className='container-input'>
        <div className='panel-body'> I need to</div>
            <form onSubmit={props.newItemSubmitHandler} className='todoInput'>
                <input 
                    className='textarea'
                    type='text'
                    onChange={props.handleItemInput}
                    value={props.newTask}
                    placeholder='Add an item'
                    />
                    <br/>
                    {/* <select className='priority'>
                        <option className='priority' value='priority'>Priority</option>
                        <option className='priority1' value='high'>High</option>
                        <option className='priority2' value='normal'>Normal</option>
                        <option className='priority3' value='low'>Low</option>
                    </select> */}
                <div className='submit'>
                    <button 
                        type='todoInput' 
                        name='submit'
                        value='submit'>
                            Add
                    </button>
                    </div>
            </form>
        </div>
    </div>

    </main>
     )
 }

 export default ToDoList