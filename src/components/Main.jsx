import React from 'react'
import Painel from '../assets/images/supremo-tribunal-federal.jpg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Main = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #223555;
    margin: 0;
    padding: 0;
    position: relative;
    top: -60px;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        position: relative;

        width: 100%;
        height: 100vh;
        opacity: 0.1;
        background-size: contain;
        object-fit: cover;
        background-position: center;
    }

`

const MainPainel = styled.div`
    position: absolute;
    
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 60%;

    p {
        color: #B89B5F;
        font-family: 'Roboto Slab', serif;
        font-size: 1.2rem; 
        text-align: center;
    }

    h2 { 
        color: white;
        font-size: 3.2rem;
        font-weight: 400;
        font-family: 'Roboto Slab', serif;
        width: 100%;
    }

    h2::after, h2::before {
        content: '';
        display: block;
        margin: 20px auto;
        height: 1px;
        background-color: #B89B5F;

    }

    button {
        background-color: #B89B5F;
        border: none;
        padding: 10px;
        margin-top: 10px;
        color: white;
        font-size: .8rem;
        cursor: pointer;


    }
`




export default function MyMain () {
    return ( 
        <Main>
            <img src={Painel} alt="" />
            
            <MainPainel>
                <p>Since 1982
                </p>
                <h2>
                    Attorneys . Lawyers . Law Firms
                </h2>
                <div>
                    <NavLink to='PageNotFound'><button>Get a free Consulation </button></NavLink>
                </div>
            </MainPainel>
        </Main>
    )
}