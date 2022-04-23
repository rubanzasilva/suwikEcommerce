import React, {useState} from 'react';
import { GridWrapper,GridItem , SectionText,ImgWrap,Img} from './sectionElements';
import {Typography } from "antd";
import "antd/dist/antd.css";

const { Title , Text } = Typography;


const AboutSectionB = ({title,headline,description,text,text1,img,alt}) => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <GridWrapper >

        <GridItem className='GridItemOne'>

        <ImgWrap className='InfoSectionImageWrap'>
                         <Img src={img} alt={alt}/>
                     </ImgWrap>
        </GridItem>

        <GridItem  className='GridItemTwo'>
        <SectionText className='InfoSectionTextWrap'>
                    
        <Title level={3} style={{fontSize:"1.75em",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"6px",fontFamily:"Lato"}}> {title} </Title>
                     
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginBottom:"15px",fontFamily:"Roboto"}}>{headline}</Text>
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginBottom:"15px",fontFamily:"Roboto"}}>{text}</Text>
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginBottom:"15px",fontFamily:"Roboto"}}>{text1}</Text>
                 </SectionText>
        
        </GridItem>
        
        
        </GridWrapper>

    
    )
}

export default AboutSectionB;
