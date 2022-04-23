import styled from "styled-components";


export const GridWrapper = styled.ul`
 display:grid;
 grid-template-columns:1fr 2fr;
 background-color:#F7F2EF;
 list-style-type:none;
 margin:56px;
 height:auto;
 
@media screen and (max-width:960px) {
    grid-template-columns:1fr;
    align-items:Center;
    text-align:Center;
    margin:16px;
}
`


export const GridItem = styled.li`
background-color:#F7F2EF;
text-align:center;

& .InfoSectionTextWrap{

    @media screen and (max-width:960px) {
    }
}

& .InfoSectionImageWrap{
    @media screen and (max-width:960px) {
    }
}



`

export const SectionText = styled.div`
    margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 text-align:center;
 align-content:center;
 padding:64px;


 @media screen and (max-width:780px) {

 }

`

//column 2
export const ImgWrap = styled.div`
    margin:auto;
 display:flex; 
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 text-align:center;


 @media screen and (max-width: 968px) {
    }
`

//removing the width causes element to go wild
export const Img = styled.img`
    margin:auto;
   width:100%;
   height:auto;
   object-fit:contain;
   left:0;
 display:flex; 
 flex-wrap:wrap;

 
 @media screen and (max-width:720px) {
     flex-direction:column;
     align-items:center;
     margin-top:-180px;

 }
`

export const BtnWrap = styled.div`
    margin:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    
    @media screen and (max-width: 768px) {
        flex-basis:100%;
    }
`