import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import Home from './Pages';
// import AboutSuwik from './Components/About';
// import AboutSection from './Components/AboutSectionA';
import About from './Pages/About';

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
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </Router>
  )
}

export default App