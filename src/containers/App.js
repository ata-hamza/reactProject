import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] consts' )
    
  }

  state = {
    persons: [
      { id: 'qwwe', name: "Max", age: 28 },
      { id: 'eqeq', name: "Manu", age: 29 },
      { id: 'qweq', name: "stephainie", age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerviedStateFromProps(props, state){
    console.log('[App.js getDerviedStateFromProps', props);
    return state;
  }

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person

   this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js Rendered');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      )
    }

    return (
      <div className="App">      
        <Cockpit 
        title={this.state.appTitle}
        showPersons={this.showPersons}
        clicked={this.togglePersonHandler}
        persons={this.state.persons}/>
        {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hi im an app'));
  }
}

export default App;
