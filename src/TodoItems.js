/* The items we click on are defined in TodoItems.js */

import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }


    // Define our delete event handler that takes the key as argument
    delete(key){
        this.props.delete(key);
    }

    createTasks(item) {

        /* Set up the event handler for dealing with the 
           click event */

        return <li onClick = {() => this.delete(item.key)}
                key = {item.key}>{item.text}</li>

        /* We're listening for the click event and associating 
           it with an event handler called delete.
        */
    }

    render() {

        //taking the list of todo items
        var todoEntries = this.props.entries;

        // turn them into JSX/HTML elements, by using map
        var listitems = todoEntries.map(this.createTasks);

        /* The value stored by our listItems variable is an
           array of li elements containing the appropriate 
           content to print.
           Notice, we are setting the key attribute on each
           element to make it easier for React to keep track
           of each element. 
        */

        return (
           <ul className = "theList">
           <FlipMove duration = {250} easing="ease-out">
               {listitems}
            </FlipMove>
           </ul>
        );
    }
}

export default TodoItems;