import React, { Component } from 'react';
import ToDos from './ToDos'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ToDos: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('NICE!!!')
    this.setState ({ToDos: 'I am doing fine, Thank you.'})
  }



  render() {
    // const ToDos = this.state.ToDos.map(item => <ToDos handleClick={this.handleClick}/>)
    // let wordDisplay
    // if(this.state.test === true) {
    //   wordDisplay = 'F YEAH!!!!'
    // } else {
    //   wordDisplay = 'WTF?!?!?!'
    // }

    return (
      <div>
        {/* <button onClick={this.handleClick}>TRY ME</button> */}
        {/* <h1>{wordDisplay}</h1> */}
      
        <ToDos/>
    

        
        <p>{this.state.ToDos}</p>
      </div>
    );
  }
}

export default App;
