import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
  }

  main{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
`