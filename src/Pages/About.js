import React from 'react'
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


const About = () => {
    return (
        <div className='homeWrapper'>
        <Navbar/>
        <ContactTitleA  {...titleA}/>
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

export default About
