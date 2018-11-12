// @ts-check
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jeff', age: 35 },
      { name: 'Sarah', age: 27 },
      { name: 'Grandma', age: 84 },
      { name: 'Kiki', age: 15 }
    ]
  }

  resetAgeHandler = (newAge) => {
    this.setState({   persons: [
      { name: 'Jeff', age: newAge },
      { name: 'Sarah', age: newAge },
      { name: 'Grandma', age: newAge },
      { name: 'Kiki', age: newAge }
    ]})
  }

  setAgeHandler = (event) => {
    this.setState({   persons: [
      { name: 'Jeff', age: event.target.value },
      { name: 'Sarah', age: event.target.value },
      { name: 'Grandma', age: event.target.value },
      { name: 'Kiki', age: event.target.value }
    ]})
  }

  paragraphClickHandler = () => {
    console.log('was clicked2');
  }

  render() {
    return (
      <div className="App">
        <h1>Hey, This is Jeff Lytle</h1>
        <p>this is really working!!!</p>
        <button
          onClick={this.resetAgeHandler.bind(this, 0)}
          className="button">
          Switch
          </button>    
        <Person
          click={this.resetAgeHandler.bind(this, 30)}
          changed={this.setAgeHandler}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} >
        </Person> 
        <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} >
        </Person> 
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} >
        </Person>
      </div>
    );
  }
}

export default App;
