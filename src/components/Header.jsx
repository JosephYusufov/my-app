import React from 'react';

function Header() {
	const date = new Date();
	const hours = date.getHours();
	console.log(hours);

	var timeOfDay;
	if(hours < 12){
		timeOfDay = "morning"
	} else if ( hours < 6 ) {
		timeOfDay = "afternoon";
	} else {
		timeOfDay = "night";
	};

	const style = {
		color: "white",
		fontSize: "50px"
	};
	return (
		<h1 className="navbar" style={style}>{`Good ${timeOfDay}`}</h1>
	);
};

export default Header;