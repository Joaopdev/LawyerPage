import React from 'react'
import Header from '../components/header'
import Main from '../components/Main'
import styled from 'styled-components'

const Main__Container = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
`


export default function () {
    return (
        <Main__Container>
            <Header />
            <Main />           
        </Main__Container>
    )
}