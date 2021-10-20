import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu.jsx";
import { Background, Barra, Title } from "./About.jsx";
import Bag from '../assets/icons/bag.png'
import Balance from '../assets/icons/balance.png'
import Contract from '../assets/icons/contract.png'
import Deal from '../assets/icons/deal.png'
import Hammer from '../assets/icons/hammer.png'
import Book from '../assets/icons/book.png'
import { NavLink } from "../components/Menu";


const ContainerPractice = styled.div`
    position: relative;
    left: 50%; 
    transform: translate(-50%, -0);
    background-color: #ffffff;
    max-width: 1368px;
    height: calc(100vh - 60px);
    box-sizing: border-box;
    &:before,
    &:after {
        content: "";
        display: table;
    }
    &:after {
        clear: both;
    }
`;

const Row = styled.div`
    width: 100%;
    height: ${(props) => props.Height}%;
    box-sizing: border-box;
    background-color: ${(props) => props.color};
    min-height: 10vh;
    
    &:before,
    &:after {
        content: "";
        display: table;
    }
    &:after {
        clear: both;
    }
`;

function getWidthGrid(value) {
    if (!value) return 
    let width = value / 12 * 100
    return `width: ${width}%`;
}

const Column = styled.div`
    float: left;
    padding: 0.25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    height: ${(props) => props.Height}rem;

    @media only screen and (max-width: 768px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
    }
    @media only screen and (min-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }

    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }
        
    

    
`

const ColumnTitle = styled.h2`
    
    color: #3D3D3D;

    h1 { 
        font-family: 'Roboto Slab', serif;
        font-size: 2rem;
        margin-top: 25px;
        margin-bottom: 5px
    }

    p { 
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        color: #ADADAD;

        &:after {
            content: '';
            display: block;
            height: 3px;
            width: 50px;
            margin: 20px auto;
            background-color: #D0CDBA;
        }
    }

`

const CardPractice = styled.div`
    
    width: 260px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    &:hover {
        
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: .2s
}

    img {
        min-width: 35px; max-width: 50px;
        padding: 10px;
        border: 1px solid #B7B09B;
        
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        margin-top: 10px;
        color: #595959;

    }

    p {
        font-size: .8rem;
        margin-bottom: 10px;
        color: #595959;
    }

    a {
        font-size: 0.6rem;
        color: #B7B09B;
    }
    
`

export default function PracticeAreas(props) {
    return (
        <Background>
            <Barra>
                <Title>Denzel & Michael </Title>
                <Menu />
            </Barra>
            <ContainerPractice>
                <Row Height={25} color='inherit'>
                    <Column Height={8} desktop='12'>
                        <ColumnTitle>
                            <h1>Practice Areas</h1>
                         
                            <p>Realize your constitutional right with qualified help.</p>
                        </ColumnTitle>
                    </Column>
                </Row>
                <Row>
                    <Column desktop='4' >
                        <CardPractice>
                            <img src={Bag} alt="" />
                            <h2>Business Law</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit [...]</p>
                            <NavLink> Read more...</NavLink>
                        </CardPractice>
                    </Column>
                    <Column desktop='4'>
                        <CardPractice>
                            <img src={Book} alt="" />
                            <h2>Insurance Law</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit [...]</p>
                            <NavLink> Read more...</NavLink>
                        </CardPractice>
                    </Column>
                    <Column desktop='4'>
                        <CardPractice>
                            <img src={Balance} alt="" />
                            <h2>Divorce Law</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit [...]</p>
                            <NavLink> Read more...</NavLink>
                        </CardPractice>
                    </Column>
                </Row>
                <Row>
                    <Column desktop='4' >
                        <CardPractice>
                            <img src={Contract} alt="" />
                            <h2>Industrial Law</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit [...]</p>
                            <NavLink> Read more...</NavLink>
                        </CardPractice>
                    </Column>
                    <Column desktop='4' >
                        <CardPractice>
                            <img src={Deal} alt="" />
                            <h2>Finance Law</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit [...]</p>
                            <NavLink> Read more...</NavLink>
                        </CardPractice>
                    </Column>
                    <Column desktop='4' >
                        <CardPractice>
                            <img src={Hammer} alt="" />
                            <h2>Conciliation</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit [...]</p>
                            <NavLink> Read more...</NavLink>
                        </CardPractice>
                    </Column>
                </Row>
            </ContainerPractice>
        </Background>
    );
}
