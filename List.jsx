import React from 'react'
import ToDo from './ToDo'

  function List(props) {
    // let display = 'welcome-section'
    // if (props.list.map.length > 0) return display
        
    return (
      
    <div>
      <div className='welcome-section'>
          <header className='panel-body1'>
              {/* <h1>{this.state.test}</h1> */}
              <h4 className='topper'>View ToDos</h4>
                  <h5 className='topper-inst'>Welcome to a very simple to do App!</h5>
                      <p className='topper-inst'>Get started now by adding a new ToDo on the list.</p>
          </header>
      </div>

      <div className='container-todo'>
        <ul>
          {props.list.map((item, index) => (
            <ToDo
              key={index}
              item={item.name}
              handleRemove={props.handleRemove}
            />
          ))}
        </ul>
      </div>
    </div>
    )
  }

export default List
    