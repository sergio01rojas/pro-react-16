import React, {Component} from 'react';

export class TodoBanner extends Component{
	render = () => {
		return (
			<h4 className="bg-primary text-white text-center p-2">
        		{this.props.name}'s To Do List, ({this.props.items.filter(item => !item.done).length}) items to do, study effective way to use Spread operator
    		</h4>
	    )
	}
}
