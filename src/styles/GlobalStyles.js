import { createGlobalStyle } from 'styled-components';
import { Headline, TittleThree } from '../styles/Typograohy';

const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-gray-0: #F8F9FA;
        --color-gray-100: #868E96;
        --color-gray-200: #343B41;
        --color-gray-300: #212529;
        --color-gray-400: #121214;

        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        --font-family-inter: 'Inter', sans-serif;
    
        --radius: 0.25rem
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: border-box;
    }

    body{
        color: var(--color-gray-0);
        
        background-color: var(--color-gray-400);

        font-family: var(--font-family-inter);
        
    } 
    
    a{
        text-decoration: none;
        color: var(--color-gray-0);
    }    
    
    h3{
        ${TittleThree}
    }    

    label, p{
        ${Headline}
    }

    p{
        color: var(--color-gray-100);        
    }
`   

export default GlobalStyles