import React from 'react'
import Header from '../components/header'
import Main from '../components/Main'
import styled from 'styled-components'

const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
`


export default function Home () {
    return (
        <MainContainer>
            <Header />
            <Main />           
        </MainContainer>
    )
}