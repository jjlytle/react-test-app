// @ts-check
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jeff', age: '35' },
      { name: 'Sarah', age: '27' },
      { name: 'Grandma', age: '84' },
      { name: 'Kiki', age: '15' }
    ]
  }

  switchButtonHandler = () => {
    console.log('was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hey, This is Jeff Lytle</h1>
        <p>this is really working!!!/&#8221</p>
        <button onClick={this.switchButtonHandler}>Switch</button>    
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
