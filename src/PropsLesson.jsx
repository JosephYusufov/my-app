import React from 'react';
import ContactCard from "./components/ContactCard.js"

function PropsLesson() {
    return(
	<div>
	  <ContactCard 
	    contact = {{
		name: "timone",
		imgUrl: "http://placekitten.com/300/200",
		phoneNumber: "(212) 555-2398",
		email: "koolkat@gmail.com"					
	    }}
	  />
	  <ContactCard 
	    contact = {{
		name: "N-CAT",
		imgUrl: "http://placekitten.com/300/200",
		phoneNumber: "(123) 444-0987",
		email: "koolkat@gmail.com",					
	    }}
	  />
	  <ContactCard 
	    contact = {{
		name: "Daniel",
		imgUrl: "http://placekitten.com/300/200",
		phoneNumber: "(333) 333-3333",
		email: "Daniel@eskaros.com",
	    }}
	  />
	  <ContactCard 
	    contact = {{
		name: "mittfard",
		imgUrl: "http://placekitten.com/300/200",
		phoneNumber: "(123) 123-1234",
		email: "mitt@fard.com",					
	    }}
	  />
	</div>
    );	
};

export default PropsLesson;
