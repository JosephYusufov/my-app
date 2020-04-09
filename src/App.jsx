import React from 'react';
import Joke from './components/Joke.jsx';

function App() {
    return (
	<div> 
          <Joke
            joke = {{
                setup: "Why did Timone dance",
                punchline: "To get the Baba",
            }}          
          />
          <Joke
            joke = {{
                setup: "I went to the store",
                punchline: "and bought Heydar Aliyev",
            }}          
          />
          <Joke
            joke = {{
                setup: "Little Yachty",
                punchline: "...",
            }}          
          />
          <Joke
            joke = {{
                setup: "What do you call an alligator in a vest?",
                punchline: "An Investigator",
            }}          
          />
          <Joke
            joke = {{
                setup: "Who is Eskaros?",
                punchline: "I dont know",
            }}          
          />
          <Joke
            joke = {{
                punchline: "Portugese are the worst. Feelme?",
            }}          
          />
	</div>
    );	
};

export default App;
