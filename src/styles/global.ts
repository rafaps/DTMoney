import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    
    :root{
        --background: #f0f2f5;

        --red: #e52e4d;
        --blue: #5429CC;
        --blue-light: #6933FF;

        --text-file: #363F5F;
        --text-body: #969Cb3;

        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html {

        //font-size default for desktop = 16px

        @media (max-width: 1080px) {
            font-size: 93.75% //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%
        }


    }

    body {
        background: var(---background);
        -webkit-font-smoothing: antialiesed;
    }


    button {
        cursor: pointer
    }


    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`