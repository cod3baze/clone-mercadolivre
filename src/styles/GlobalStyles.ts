import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-primary);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    --color-primary: #F5F5F5;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #666;
    --color-blue: #3483fa;
    --color-green: #00a650;

    --color-header-master: #121212;
    --color-header-master-x: #413f3f;
    --color-header-master-y: #FD951F;
    --color-header-master-z: #2EA44F;
    --color-header: #FFF159;
    --color-header-x: #FFF133;
    --color-search-placeholder: #AAAAAA;
    --color-border: #ddd;

    --reputation-1: #FFE7E6;
    --reputation-2: #FFF4E7;
    --reputation-3: #FFFDE5;
    --reputation-4: #F3FEE0;
    --reputation-5: #00A650;
    --hilight-border: #5929CC;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;
