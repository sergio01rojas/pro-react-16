import React, {Component} from 'react';

export class TodoCreator extends Component{

	constructor(props){
		super(props);
		this.state = {
			newItemText:""
		};
	}


	updateNewTextValue = (e) => {
      this.setState({
        newItemText: e.target.value
      });
  	};

   createNewTodo = () => {
      if(this.state.newItemText && !this.props.actions.find(action => action === this.state.newItemText)){
      	this.props.callback(this.state.newItemText);
      }
      this.setState({newItemText:""});
  };

	render = () => 
	<div className="container-fluid">
        <div className="my-1 row">
          <input className="form-control col-sm-8" value={ this.state.newItemText } onChange={ this.updateNewTextValue } />
          <button className="btn btn-primary mt-1 col-sm-4" onClick={ this.createNewTodo }>Add</button>
        </div>
    </div>

}
