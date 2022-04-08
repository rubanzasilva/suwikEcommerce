import styled from "styled-components";
import {Link} from 'react-router-dom';

export const HeroSectionContainer = styled.section`
    background: #fff;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        height: auto;
        min-height: 100vh;
    }

    .ant-list * {
    outline: none;
    min-width: 33%;
    justify-content:center;
    align-items:center;
}

    .ant-list-grid .ant-col > .ant-list-item {
    display: flex;
    max-width: 100%;
    ${'' /* margin-bottom: 16px; */}
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none;
    margin: 4rem 0rem 2rem 0rem;
    ${'' /* padding: 8px 16px 8px 128px;  */}
    justify-content:space-around;
    ${'' /* align-items:center; */}

    /* justify-content: center; */
}
`;
