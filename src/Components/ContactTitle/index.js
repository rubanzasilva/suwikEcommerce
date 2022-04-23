import React from 'react';
import {Typography} from "antd";
import "antd/dist/antd.css";
import {TitleContainer,ContactTitle} from "./ContactTitleElements";

const { Title } = Typography;

const ContactTitleA = ({title,titleA}) => {
  return <TitleContainer>
      <ContactTitle> 
      <Title level={2} style={{fontSize:"3.5em",lineHeight:"1.07143",fontWeight:"500",letterSpacing:"-.005em",marginTop:"6px",fontFamily:"Lato,Roboto"}}>
  {title}
  </Title>
  <Title level={3} style={{fontSize:"1.3125em",lineHeight:"1.07143",fontWeight:"300",letterSpacing:"-.005em",marginTop:"6px",fontFamily:"Lato,Roboto"}}>
  {titleA}
  </Title>
  </ContactTitle>
  
  </TitleContainer>;
};

export default ContactTitleA;
