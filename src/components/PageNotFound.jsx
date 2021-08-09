import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components'




const PageNotFound = styled.div`
    background-color: #223555;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: white;
    font-weight: 600;
    height: 100vh;
    width: 100vw;
    user-select: none;

    h2 {
        text-align: center;
    }

    button { 
        width: 10rem;
        height: 4rem;
        border: none;
        font-size: 1.2rem;
        font-weight: 400;
        color: white;
        cursor: pointer;
        background-color: inherit;
        border: 1px solid white;

        &:hover {
            background-color: #0f2754;
        }

    }

`

export default () => {
    return (
        <PageNotFound>
            Page not found!
            <p>[ERROR 404]</p>
            <br />
            <h2>The page you want to access is not working at moment. 
                <br />We are under construction. 
                <br />We hope to fix this issue as soon as possible. :(</h2>
            <br />
            <NavLink to="/Home"> <button>Back to Home </button></NavLink>
        </PageNotFound>
    );
}

