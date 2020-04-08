import React from 'react';

function TodoItem() {
	const name = "timone";
	const length = 12;
	return (
		<span>
			<input type="checkbox"/>
			<span>Take out the dog, {`${name} who is ${length} long`}.</span>
			<br/>
		</span>
	);
};

export default TodoItem;