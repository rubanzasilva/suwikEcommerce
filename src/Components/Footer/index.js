import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights,Img, LocationOnMap} from './FooterElements';
import {FaFacebook,FaInstagram,FaWhatsapp,FaTwitter,FaTiktok} from 'react-icons/fa';
import {BackTop} from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
// import logo from '../../Images/logox.png';
import GoogleMaps from '../Map';

const location = {
    address: 'Zigoti Coffee Works Ltd',
    lat: 0.31952388690630096,
    lng: 32.612368559943604,
  } // our location object from earlier


const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap id='footerWrap'>

            <FooterLinksContainer id='footerLinksContainer'>
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>About us</FooterLinkTitle>
   
                     <FooterLink to="/About">History</FooterLink>
                     <FooterLink to="/About">Testimonials</FooterLink>
                     <FooterLink to="/About">SUWIK in the community</FooterLink>
                     <FooterLink to="/About">Roastery</FooterLink>
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>Cereals</FooterLinkTitle>
   
                     <FooterLink to="/GreenBeans">Maize</FooterLink>
                     <FooterLink to="/GreenBeans">Sim sim</FooterLink>
                     <FooterLink to="/GreenBeans">Sorghum</FooterLink>
                     {/* <FooterLink to="/GreenBeans">Black beans</FooterLink> */}
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>Fruits</FooterLinkTitle>
   
                     <FooterLink to="/About">Ovacado</FooterLink>
                     <FooterLink to="/About">Mangoes</FooterLink>
                     <FooterLink to="/About">Passion fruits</FooterLink>
                     <Button type="link" href='http://www.zicofecafe.com' style={{color:'#35241A'}}>Zicofe Cafe</Button>
                     {/* <Link> <a href='http://www.zicofecafe.com'>ZICOFE Cafe</a></Link> */}
                     

                 </FooterLinkItems>


                 <FooterLinkItems>

                     <FooterLinkTitle>Reach Us</FooterLinkTitle>
   
                     <FooterLink to="/ContactUs">Contact us</FooterLink>
                     <FooterLink to="/About">Blog</FooterLink>
                     <FooterLink to="/About">Merchandise</FooterLink>
                     <FooterLink to="/ContactUs"> Contact Us
                     
                     </FooterLink>
                     


                 </FooterLinkItems>
                 

                 

                </FooterLinksWrapper>

            </FooterLinksContainer>

            <LocationOnMap>
            <GoogleMaps location={location} zoomLevel={17} />
            </LocationOnMap>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> 
                    <p>SUWIK</p> 
                    {/* <Img src={logo} alt='ZICOFE LOGO'/> */}
                    </SocialLogo>
                    <WebsiteRights>SUWIK INVESTMENTS © {new Date().getFullYear()}
                    All rights reserved.</WebsiteRights>
                    {/* <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/ZigotiCoffee" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/zigoticoffeeofficial/" target="_blank" arial-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/ZicofeOfficial" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.tiktok.com/@zigoticoffee" target="_blank" arial-label="Tiktok">
                            <FaTiktok/>
                        </SocialIconLink>
                        <SocialIconLink href="https://wa.me/message/FTZ2CS3TCD4HC1" target="_blank" aria-label="Whatsapp">
                            <FaWhatsapp/>
                        </SocialIconLink>
                    </SocialIcons> */}
                </SocialMediaWrap>
            </SocialMedia>

        
            

        </FooterWrap>
        <BackTop/>
            
        </FooterContainer>
    )
}

export default Footer