import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

import logo from './images/logo.svg'

function App() {
  return (
    <>
      <Router>
        <Navbar 
            isLogo={true}
            logoUrl={logo}
            navList1="NavList1" 
            navList2="NavList2" 
            navList3="NavList3" 
            navList4="NavList4"
            isLogin={true}
            navListLogin="Get Started"
            />
        <Router />
      </Router>
    </>
    );
}

export default App;
