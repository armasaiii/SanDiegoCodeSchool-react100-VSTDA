import React from 'react'

function ToDo(props) {

  return (
        <li type='checkbox'>
            {props.item}

              <button className="action" name='delete' onClick={props.handleRemove}>
                Delete
              </button>
             
        </li>
  )
}

export default ToDo