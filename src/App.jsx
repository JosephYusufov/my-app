import React from 'react';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import TodoItem from "./components/TodoItem.js"

function App() {
    return (
	    <div>
	    <Header/>
	    <TodoItem/>
	    <TodoItem/>
	    <TodoItem/>
	    <TodoItem/>
	    <TodoItem/>
	    <Footer/>				
	    </div>
    );	
};

export default App;
