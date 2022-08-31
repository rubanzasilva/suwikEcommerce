import React, {useState} from 'react'
import ContactTitleA from '../Components/ContactTitle';
import { homeObjZ } from '../Components/ContactTitle/data';
import ContactSuwik from '../Components/ContactUs';
import { homeObjA } from '../Components/ContactUs/data';
import Navbar from '../Components/NavBar'
import SideBarSuwik from '../Components/SideBar';

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
        <SideBarSuwik isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <ContactTitleA {...homeObjZ} />
        <ContactSuwik {...homeObjA} />

    </div>
  )
}

export default ContactUs