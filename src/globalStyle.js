import { createGlobalStyle } from "styled-components";

import {gladies} from './fonts/Gladies.ttf'
import {recline} from './fonts/ReclineLightDemo-jEnOM.ttf'


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:recline;
}

html, body{
    overflow-x: hidden;
}
`;
export default GlobalStyle;