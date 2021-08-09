import React from "react";
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
        <div>
            <GlobalStyle />
            <Routes />
        </div>
    );
}

export default App;
