import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';







const TodoItem = (props) => {
	return (
			<div className="todo-item">
				   <Checkbox checked={props.item.completed}/>
              	<p>{props.item.text}</p>


			</div>
			 

	)
}


export default TodoItem