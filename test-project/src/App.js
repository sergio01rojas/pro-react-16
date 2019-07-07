import React, {Component} from 'react';
import {TodoBanner} from './TodoBanner';
import {TodoRow} from './TodoRow';
import {TodoCreator} from './TodoCreator';
import {VisibilityControl} from './VisibilityControl';



export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      userName:"Sergio Rojas",
      todoItems:[{ action: "Buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false }],
      showCompletedTask: true          
    };
  }

  changeStateData = () => {
      this.setState({
        userName: this.state.userName === "Sergio Rojas" ? "Spread operator" : "Sergio Rojas"
      });
  };

  

  createNewTodo = (act) => {
      this.setState({
        todoItems:[...this.state.todoItems, {action:act , done:false}]
      });
  };

  toggleTodo = (item) => {
    this.setState({
      todoItems: this.state.todoItems.map(i => i.action === item.action ? {...item, done:!item.done} : i )
    });  
  };

  todoTableRows = (showCompleted) => {
    return this.state.todoItems
    .filter(item => item.done===showCompleted)
    .map(item => 
      <TodoRow item={item} callback={this.toggleTodo} />
    );
  };

  changeShowCompletedTaskFlag = (value) => {
    this.setState({
      showCompletedTask: value
    });
  };

  render = () =>
  <div>
    <TodoBanner name={this.state.userName} items={this.state.todoItems} />
    <button className="btn btn-primary m-2" onClick={this.changeStateData}>
      change user name
    </button>
    
    <TodoCreator actions={this.state.todoItems.map(item => item.action)} callback={this.createNewTodo} />

    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Description</th><th>Done</th>
        </tr>
      </thead>
      <tbody>
        {this.todoTableRows(false)}
      </tbody>
    </table>

    <VisibilityControl description="Show completed tasks"  
                       isChecked={this.state.showCompletedTask} 
                       callback={this.changeShowCompletedTaskFlag} />

    {this.state.showCompletedTask &&
      <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Description</th><th>Done</th>
        </tr>
      </thead>
      <tbody>
        {this.todoTableRows(true)}
      </tbody>
    </table>
    }                       

  </div>


}
