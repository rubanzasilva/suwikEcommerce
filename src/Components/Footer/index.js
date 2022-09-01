import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights,Img, LocationOnMap} from './FooterElements';
//import {FaFacebook,FaInstagram,FaWhatsapp,FaTwitter,FaTiktok} from 'react-icons/fa';
import {BackTop, Collapse} from 'antd';
import 'antd/dist/antd.css';
//import { Button } from 'antd';
import logo from '../../Images/suwikLogo.jpeg';
// import GoogleMaps from '../Map';

// const location = {
//     address: 'Zigoti Coffee Works Ltd',
//     lat: 0.31952388690630096,
//     lng: 32.612368559943604,
//   } // our location object from earlier


const { Panel } = Collapse;

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap id='footerWrap'>

            <FooterLinksContainer id='footerLinksContainer'>
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>About us</FooterLinkTitle>
   
                     <FooterLink to="/">History</FooterLink>
                     <FooterLink to="/">Testimonials</FooterLink>
                     <FooterLink to="/">SUWIK in the community</FooterLink>
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>Cereals</FooterLinkTitle>
   
                     <FooterLink to="/ProductCatalog">Maize</FooterLink>
                     <FooterLink to="/ProductCatalog">Sim sim</FooterLink>
                     <FooterLink to="/ProductCatalog">Soya beans</FooterLink>
                     {/* <FooterLink to="/GreenBeans">Black beans</FooterLink> */}
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>Fruits & Vegetables</FooterLinkTitle>
   
                     <FooterLink to="/ProductCatalog">Ovacado</FooterLink>
                     <FooterLink to="/ProductCatalog">Mangoes</FooterLink>
                     <FooterLink to="/ProductCatalog">Passion fruits</FooterLink>
                     {/* <Link> <a href='http://www.zicofecafe.com'>ZICOFE Cafe</a></Link> */}
                     

                 </FooterLinkItems>


                 <FooterLinkItems>

                     <FooterLinkTitle>Reach Us</FooterLinkTitle>
   
                     <FooterLink to="/ContactUs">Contact us</FooterLink>
                     <FooterLink to="/ContactUs">Blog</FooterLink>
                     <FooterLink to="/ContactUs">Merchandise</FooterLink>
                    
                 </FooterLinkItems>
                 

                 

                </FooterLinksWrapper>

            </FooterLinksContainer>

            {/* <LocationOnMap>
            <GoogleMaps location={location} zoomLevel={17} />
            </LocationOnMap> */}

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> 
                    {/* <p>SUWIK</p>  */}
                    <Img src={logo} alt='SUWIK INVESTMENTS'/>
                    </SocialLogo>
                    <Collapse id="accordionWrapper" accordion expandIconPosition='right' style={{fontSize:"16px" , backgroundColor:"#fff" , marginBottom:"8px"}}>
                        <Panel header="Contact Us" key="1">
                            <p>wilson@suwik.xyz</p>
                        </Panel>
                        </Collapse>
                    {/* <WebsiteRights>wilson@suwik.xyz</WebsiteRights> */}
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