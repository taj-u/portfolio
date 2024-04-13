import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
    </div>
  );
}

export default App;
