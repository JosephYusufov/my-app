import React from 'react';

function Joke(props) {
    return(
        <div>
          <h3 style={{display: props.joke.setup? "block" : "none"}}>{props.joke.setup}</h3>
          <h2 className={props.joke.setup? "": "one-liner"}>{props.joke.punchline}</h2>
          <hr/>
        </div>
    );
};

export default Joke;
