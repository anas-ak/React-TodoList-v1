/* The actual logic for populating the items lives
   in our state object in TodoList.js */

import React, {Component} from "react";
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state = { items: [] }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    /* addItem event handler that gets called when our form gets submitted*/
    addItem(e){
        if(this._inputElement.value !== "") {

            // Create a variable called newItem to store an object
            var newItem = {

                // Object contains both entered text and unique key
                text: this._inputElement.value,
                key: Date.now()
            };

            // Set our state's "items" property
            this.setState((prevState) => {
                return {

                    // Ensuring our state object isn't modified
                    items: prevState.items.concat(newItem)
                };
            });

            // Clearing the value of our "input" element
            this._inputElement.value = "";

            console.log(this.state.items);

            /*  Overriding this event's default behaviour.
                Reason: How form submission works.
                By default: when you submit a form, the page reloads 
                and clears everything. We don't want that.
                preventDefault blocks that default behaviour.

            */
            e.preventDefault();
        }
    }

    deleteItem(key){

        /* We pass the key from our clicked item all the way here
           and we check this key against all of the items we store
           currently, via the filter method
        */
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        /* Result: We create a new array called filteredItems that 
           contains everything EXCEPT the item we are removing. 
           This filtered array is then set as our new items property
           on our state object.
        */
        this.setState({
            items: filteredItems
        });
    }
    
    render(){
        return(
            <div className="todoListMain">
                <div className="header">

                    {/* We listen for the submit event on the form itself, 
                        and we call the addItem method when that event is 
                        overheard*/}

                    <form onSubmit={this.addItem}>

                     {/*If we want to access our input element anywhere 
                        inside this component, we can do so by accessing 
                        _inputElement*/}

                     <input ref={(a) => this._inputElement = a} placeholder="Enter Task" />
                        <button type="submit">Add</button>
                     
                    </form>
                </div>

                {/*pass our items array as a prop*/}
                <TodoItems entries = {this.state.items}                             
                           delete  = {this.deleteItem} />
                {/* This change ensures our ToDoItems component now 
                                has knowledge of a prop called delete. It also means that 
                                our delete function in TodoList actually connects */}
            </div>
        )
    }
}

export default TodoList;