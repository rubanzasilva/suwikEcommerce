import React from 'react'
//import {SideBarContainer,Icon,CloseIcon, SideBtnWrap} from './SideBarElements';
import {SideBarContainer, Icon ,CloseIcon,SideBarWrapper,SideBarMenu,SideBtnWrap,SideBarRoute} from './SideBarElements'
import {Button ,Typography } from "antd";
import "antd/dist/antd.css";
import { RightOutlined } from '@ant-design/icons';

const { Title } = Typography;

const SideBarSuwik = ({title1,title5,isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWrapper>
                <SideBarMenu>
                    {/* <SideBarLink to="/About"> */}
                    <SideBarRoute to="/ProductCatalog">
                    <Title level={5} style={{color:"#35241A",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",marginTop:"6px",fontFamily:"Lato,Roboto"}}>Our Products</Title>
                    </SideBarRoute>

                    <SideBarRoute to="/About"> 
                    <Title level={5} style={{color:"#35241A",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>About</Title>
                    </SideBarRoute>
                    
                    {/* <SideBarLink to="/RoastedBeans"> */}
                    <SideBarRoute to="/">
                    <Title level={5} style={{color:"#35241A",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>Fruits</Title>
                    </SideBarRoute>

                    {/* <SideBarLink to="/shop"> */}
                    <SideBarRoute to="/">
                    <Title level={5} style={{color:"#35241A",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>Cereals</Title>
                    </SideBarRoute>

                    {/* <SideBarLink to="/cart"> */}
                    <SideBarRoute to="/">
                    <Title level={5} style={{color:"#35241A",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>Food sustainability</Title>
                    </SideBarRoute>

                    <SideBtnWrap>
                        <SideBarRoute to="/">
                        <Button to="/" type="link" size="medium"  style={{color:"#008000",background:"#F7F2EF",
                       borderRadius:"6px",minWidth:"100px",marginTop:"15px"  }}>Contact Us { <RightOutlined />} </Button>
                        </SideBarRoute>
                    </SideBtnWrap>

                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>

    );
};

export default SideBarSuwik