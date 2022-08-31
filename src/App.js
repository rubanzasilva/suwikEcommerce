import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import Home from './Pages';
// import AboutSuwik from './Components/About';
// import AboutSection from './Components/AboutSectionA';
// import About from './Pages/About';
import ProductCatalog from './Pages/About';
import ReactGA from 'react-ga';
import ContactUs from './Pages/contactUs';

const TRACKING_ID = "G-H9CZWRWK0R"; // YOUR_OWN_TRACKING_ID

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <Router>

<CookieConsent
	location='bottom' 
   buttonText='Ok!' 
   cookieName='<cookieName>' 
   style={{ background: "#35241A" }} 
   buttonStyle={{ color: '#F7F2EF', fontSize: '13px' }}    
   expires={150}
	>
	This website uses cookies to enhance the user experience.
	<span style={{fontSize:'10px'}}></span>
	</CookieConsent>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ProductCatalog" element={<ProductCatalog />}></Route>
        <Route path="/ContactUs" element={<ContactUs/>}></Route>
      </Routes>

      
    </Router>
  )
}

export default App