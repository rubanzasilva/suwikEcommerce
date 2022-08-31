import React from 'react';
import { ReactDOM } from 'react';
import {Divider,Typography, Card , Col, Row } from "antd";
import "antd/dist/antd.css";
import {ContactContainer,ContactWrapper,CooperateOffice,ContactSales,Cards,AddressCard} from './ContactUsElements';
import GoogleMaps from '../Map';
import { LocationOnMap } from '../Footer/FooterElements';

const { Title , Text } = Typography;


const ContactSuwik = ({title,title1,title2,title3,text,text2,text3,phone,email,email1,email2,street,city}) => {
  return <ContactContainer>

  <ContactWrapper>
  <Title level={3} style={{fontSize:"1.75em",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"0px",fontFamily:"Lato"}}> {title1} </Title>

   <ContactSales>
        
        
        <Row gutter={[16]}>

        <Cards >
        <Col span={16}>


        <Card title="Supply Inquiries" bordered={false} style={{ marginTop:"36px"}}>
        <Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{text}<br/>{text2}</Text>
        
        </Card>
        
        </Col>

        </Cards>

        <Cards>

        <Col span={16}>

        <Card title="Contact us anytime via" bordered={false} style={{ marginTop:"36px"}}>
        <p> <Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1005px",marginBottom:"15px",paddingTop:"20px",fontFamily:"Roboto"}}>{phone}</Text></p>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1500px",marginBottom:"15px",fontFamily:"Roboto",paddingTop:"200px"}}>{email}</Text></p>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{email1}</Text></p>
        </Card>

        </Col>
        </Cards>


        

        </Row>

       
  </ContactSales>

  


  <Divider style={{size:2}}/>
  <Title level={3} style={{fontSize:"1.75em",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"72px",paddingTop:"48px",fontFamily:"Lato"}}> {title3} </Title>
  <ContactSales> 
        <Row gutter={[32]}>

        <AddressCard>
        <Col span={16}>


        <Card title="Corporate Address" bordered={false} style={{  marginTop:"36px"}}>
        <Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{text3}<br/>{street}<br/>{city}</Text>
        
        </Card>
        
        </Col>

        </AddressCard>

        {/* <Cards>

        <Col span={16}>

        <Card title="Roastery" bordered={false} style={{ marginTop:"36px"}}>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1005px",marginBottom:"15px",paddingTop:"20px",fontFamily:"Roboto"}}>{phone}</Text></p>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1500px",marginBottom:"15px",fontFamily:"Roboto",paddingTop:"200px"}}>{email2}</Text></p>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{email1}</Text></p>
        </Card>

        </Col>
        </Cards> */}


        

        </Row>

       
  </ContactSales>


  {/* cooperate address section */}
  {/* <Divider style={{size:"2px"}}/>
  <Title level={3} style={{fontSize:"1.75em",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"72px",paddingTop:"48px",fontFamily:"Lato"}}> {title2} </Title>
  <CooperateOffice>
 <p>office</p>
  </CooperateOffice>


<Divider/> */}
  </ContactWrapper>
 

  </ContactContainer>
};

export default ContactSuwik;
