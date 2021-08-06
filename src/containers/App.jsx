import React from 'react'
import Main from '../components/Main'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        font-family: 'Nunito';
        margin: 0;
        padding: 0;
        background: black;    
`;

function App() {
    return (
        <div>
            <Main>
                <GlobalStyle />
            </Main>
        </div>
    )
}

export default App
