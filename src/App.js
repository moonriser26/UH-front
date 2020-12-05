import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Title from './components/Title'
import SSH from "./components/ssh";

function App() {
  return (
    <div className='App'>
      
      <Header/>
      <About/>
      <Title/>
      <SSH/>
    </div>
  );
}

export default App;
