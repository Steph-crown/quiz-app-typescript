import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background: #fff;
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 5em 0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Poppins;
    }
`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        color: #555555;
    }

    .score {
        color: #222222;        
        font-size: 2em;
    }

    h1 {
        font-size: 3em;
        background-image: linear-gradient(180deg, #7e7979, #081213);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #e4e4e496);

    }

    .start, .next {
        cursor: pointer;
        background: #297dd1;
        border: none;
        font-size: 1.2em;
        padding: 0.6em 3em;
        color: white;
        border-radius: 8px;
        margin: 3em 0;
    }

    width: 700px;
    max-width: 90vw;
    background: white;
    box-shadow: 6px -6px 40px 0px #efefefed, -6px 6px 20px #efefefed;
    padding: 2em ;
`