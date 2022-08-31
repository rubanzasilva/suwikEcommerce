import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const ContactContainer = styled.div`
    width:100%;
    ${'' /* margin-top:10px; */}
    padding:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    ${'' /* background-color: #F7F2EF; */}
    background-color:#ffffff;
    cursor:pointer;
    font-family:"Lato","Roboto","Helvetica Neue",sans-serif;

    @media screen and (max-width:780px) {
        padding:0;
        margin:0;

`


export const ContactWrapper = styled.div`
 width:100%;
 display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    margin-top:10px;
    padding:16px;
    cursor:pointer;
    font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
    

    @media screen and (max-width:780px) {
        padding-top:16px;
        margin-top:16px;
        justify-content:space-around;
    align-items:center;

`


export const ContactSales = styled.div`
width:80%;
border:2px solid black;
margin-top:16px;

@media screen and (max-width:780px) {
    width:100%;  
    border:1px solid black;
}
`

export const Cards = styled.div`
flex-basis:50%;
${'' /* border:2px solid black; */}

@media screen and (max-width: 968px) {
    display:flex;
    flex-basis:100%;
    justify-content:center;
    align-items:center;

    }

`

export const AddressCard = styled.div`
flex-basis:100%;
justify-content:center;
    align-items:center;


@media screen and (max-width: 968px) {
    display:flex;
    flex-basis:100%;
    justify-content:center;
    align-items:center;

    }

`
export const CooperateOffice = styled.div`
display:flex;
justify-content:center;
align-items:center;
align-content:center;
text-align:center;

`

