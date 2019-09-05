import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClass = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red
    }
    if (props.persons.length <= 2) {
        assignedClass.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClass.push(classes.bold);
    }
    
    return (
        <div className={classes.cockpit}>
             <h1>{props.title}</h1>
        <p> this works</p>
        <button
          className={btnClass}
          onClick={props.clicked}>
          Switch Name
           </button>
        </div>
    );
};

export default cockpit;