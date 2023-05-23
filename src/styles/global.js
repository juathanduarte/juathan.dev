import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro');

    :root {
        --primary-color: #fff;
        --secondary-color: #000;
        --tertiary-color: #aaa;
        --quaternary-color: #ee4458;
    }


    * {
        border: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        font-size: 16px;
        font-weight: 400;
    }
`

export default GlobalStyle;