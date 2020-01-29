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
            <input className='textarea' type='text'/>
                <br/>
                <select className='priority'>
                    <option className='priority' value='priority'>Priority</option>
                    <option className='priority1' value='high'>High</option>
                    <option className='priority2' value='normal'>Normal</option>
                    <option className='priority3' value='low'>Low</option>
                </select>
            <div className='submit'>
                <button type='submit'>Add</button>
            </div>
        </div>

        <div className='welcome-section'>
            <header className='panel-body1'>
                {/* <h1>{this.state.test}</h1> */}
                <h4 className='topper'>View ToDos</h4>
                    <h5 className='topper-inst'>Welcome to a very simple to do App!</h5>
                        <p className='topper-inst'>Get started now by adding a new ToDo on the list.</p>
            </header>
            
        </div>

        <div className='container-todo'>
            <input type="checkbox" />
                <p>Get up</p>
            <input type="checkbox" />
                <p>Exercise</p>
            <input type="checkbox" />
                <p>Code</p>
            <input type="checkbox" />
                <p>Karaoke</p>
        </div>
    </div>
    </main>
     )
 }

 export default ToDoList