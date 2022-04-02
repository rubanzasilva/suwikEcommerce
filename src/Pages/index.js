
import React, {useState}from 'react';
import SideBarSuwik from '../Components/SideBar/index';
import NavBar from '../Components/NavBar/index';
import Footer from '../Components/Footer/index';
import HeroSection from '../Components/Hero';


// import SideBar from './Components/SideBar';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
        <SideBarSuwik isOpen={isOpen} toggle={toggle}/>
{/*         
        <SideBar  isOpen={isOpen} toggle={toggle}/> */}
        <NavBar toggle={toggle}/>
        <HeroSection/>
        <Footer/>
            
        </div>
    )
}

export default Home
