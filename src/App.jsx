import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import logo from './images/logo.svg'
import Home from './pages/home/Home.jsx';

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
            <Route exact path="/" component={Home}/>

        <Footer
            footerLink1="Privacy"
            footerLink2="Terms of Use"
            footerLink3="Legal"
            footerLink4="Cookies"
            />
        <Router />
      </Router>
    </>
    );
}

export default App;
