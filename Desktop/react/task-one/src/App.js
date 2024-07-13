import React from 'react';
import GreetingClass from './components/greetclass';
import GreetingFunction from './components/greetfunction';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetingClass name="Tamara" message="Hello" />
        <GreetingFunction name="Tamara" message="Hi" />
      </header>
    </div>
  );
}

export default App;
