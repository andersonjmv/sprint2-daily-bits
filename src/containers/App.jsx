import React from 'react'
import Main from '../components/Main'
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
        margin: 0;
        padding: 0;
    }
`;


function App() {
    return (
        <div>
           <GlobalStyle />
           <Main />
        </div>
    )
}

export default App
