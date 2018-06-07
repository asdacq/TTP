import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
    constructor(){
      super();
        this.state = { listItem: "", 
                      list: [] 
                     }
    }

    handleChange(event){
        var listItem = event.target.value;
        this.setState({ listItem })
    }


    handleSubmit(event){
        event.preventDefault();
        var listItem = this.state.listItem;
        var updatedList = this.state.list;
        updatedList.push({listItem, isStarred: false});
        this.setState({ 
            listOfNames: updatedList, 
            listItem: ""
        });
        this.refs.textField.value = "";
    }

    removeItem(index, event){
        var i = index;
        var list = this.state.list;
        var updateList = list.filter((item, index, array) => { return item !== array[i]; })
        this.setState({ list : updateList })
    }
    
    starItem(index, event){
        var i = index;
        var newList = this.state.list;
        newList[i].isStarred = !newList[i].isStarred;
        this.setState( {list:newList} );
    }

    render() {
        var list = this.state.list;
        var listItem = list.map((list, i) => (
        <ul key={i} style={{listStyleType: 'none'}} >
            <li onClick={this.removeItem.bind(this, i)}>{list.listItem}</li>
        </ul>));
      
        return (
            <div className="App">
                <p className="App-intro">
                    To-do list:
                </p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Enter Item: <br/>
                        <div className = "inputField">
                            <input onChange={this.handleChange.bind(this)} type="text" name="listItem" ref="textField"/>
                        </div>
                    </label>
                    <input type="submit" value="Add" />
                </form>
                <ul>
                  {listItem ? listItem : null}
                </ul>
            </div>
        );
    }
}

export default App;
