import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About id="section1" />
      <Projects id="section2" />
      <Contact id="section3" />
    </div>
  );
};

export default App;
