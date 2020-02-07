import React from 'react'

function ToDo(props) {

  return (
        <li>
            {props.item}
            
            <button className='action' onClick={() => props.handleRemove(props.itemindex)}>
              Delete
            </button>
        </li>
  )
}

export default ToDo