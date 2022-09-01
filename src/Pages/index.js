import React, {useState} from 'react'
import ContactTitleA from '../Components/ContactTitle'
import { titleA } from '../Components/ContactTitle/data'
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer'
// import AboutSuwik from '../Components/About'
import AboutSection from '../Components/AboutSectionA'
import { SectionAinfo, SectionAinfoA, SectionAinfoB, SectionAinfoC } from '../Components/AboutSectionA/data'
//import TitleB from '../Components/secondTitle'
// import ContactTitleA from '../Components/ContactTitle'
//import { titleB } from '../Components/secondTitle/data'
import AboutSectionB from '../Components/AboutSectionB'
import { SectionBinfo, SectionBinfoA, SectionBinfoB } from '../Components/AboutSectionB/data'
import SideBarSuwik from '../Components/SideBar'
import HeroCategory from '../Components/homePageHero'
import { homeObjX } from '../Components/homePageHero/data'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <div className='homeWrapper'>
        <SideBarSuwik isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        {/* <ContactTitleA  {...titleA}/> */}
        <HeroCategory {...homeObjX} />
        <AboutSection {...SectionAinfo}/>
        {/* <TitleB  {...titleB}/> */}
        <AboutSectionB {...SectionBinfo }/>
        <AboutSection {...SectionAinfoA}/>
        <AboutSectionB {...SectionBinfoA }/>
        <AboutSection {...SectionAinfoB}/>
        <AboutSectionB {...SectionBinfoB }/>
        <AboutSection {...SectionAinfoC}/>
        <Footer/>
        
        </div>
    )
}

export default Home
