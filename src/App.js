import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Routes } from "./Routes/Routes.jsx";

const GlobalStyle = createGlobalStyle`
    * {
        /* border: 1px solid red; */
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 16px;
        /* box-sizing: border-box; */
        
    }
`;

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes />
        </Router>
    );
}

export default App;
