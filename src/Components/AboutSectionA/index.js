import React, {useState} from 'react';
import { GridWrapper,GridItem , SectionText,ImgWrap,Img} from './sectionElements';
import {Typography } from "antd";
import "antd/dist/antd.css";

const { Title , Text } = Typography;


const AboutSection = ({title,headline,description,text,text1,img,alt,TitleText}) => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <GridWrapper >

    
        <GridItem >
        <SectionText className='InfoSectionTextWrap'>
                    
        <Title level={3} style={{fontSize:"1.75em",color:"#35241A",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"6px",marginBottom:"15px",fontFamily:"Lato"}}> {TitleText} </Title>
                     
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginTop:"6px",marginBottom:"15px",fontFamily:"Roboto"}}>{headline}</Text>
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginBottom:"15px",fontFamily:"Roboto"}}>{text}</Text>
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginBottom:"15px",fontFamily:"Roboto"}}>{text1}</Text>
                   
                 </SectionText>
        
        </GridItem>
        


        <GridItem>

        <ImgWrap className='InfoSectionImageWrap'>
                         <Img src={img} alt={alt}/>
                     </ImgWrap>
        </GridItem>
        
        
        </GridWrapper>

    
    )
}

export default AboutSection;
