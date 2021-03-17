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
            navList1="Gewicht berechnen"
            link1="/gewicht" 
            navList2="Blog" 
            link2="/blog" 
            navList3="Shop" 
            link3="/shop" 
            navList4="something"
            link4="/something" 
            isLogin={true}
            navListLogin="Get Started"
            linkRegister="/register"
            />
            <Route exact path="/" component={Home}/>

        <Footer
            footerText1="Privacy"
            footerLink1="/privacy"

            footerText2="Terms of Use"
            footerLink2="/terms"

            footerText3="Legal"
            footerLink3="/legal"

            footerText4="Cookies"
            footerLink4="/cookies"
            />
        <Router />
      </Router>
    </>
    );
}

export default App;
