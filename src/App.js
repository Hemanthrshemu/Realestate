import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
// import Companies from './components/Companies/Companies';

// import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
    
      <Router>
      <Header/>

         <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/res" element={<Residencies/>}/>
          <Route path="/value" element={<Value/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/get" element={<GetStarted/>}/>
          <Route path="/log" element={<Login/>}/>
          <Route path="/reg" element={<Register/>}/>

         </Routes>
       </Router>  


        {/* <div>
            <div className='white-gradient'/>
             <Header/>
             <Hero/>
           </div>
     <Companies/>
     <Residencies/>  
     <Value/>
     <Contact/>
     <GetStarted/>
     <Footer/> 
     <Register/>  
     <Router>
      <Routes>
      <Route path="/butt" element={<Login/>}/>
      </Routes>
     </Router> */}
    
    </div>
  );
}

export default App;
