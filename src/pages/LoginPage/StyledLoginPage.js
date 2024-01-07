import { styled } from 'styled-components';

const StyledLoginPage = styled.section`      
    position: relative;
    
    background-color: var(--color-gray-300);

    padding: 2.625rem 1.375rem;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    border-radius: var(--radius);

    margin-top: 3rem;

   h3, p{
    align-self: center;
   }
    
    button{
        width: 100%;
    }    

    .loading__ico{
        height: 36px;
        width: 36px;

        border-top: 2px solid blue;
        border-radius: 50%;

        position: absolute;

        top: 2rem;
        right: 1rem;

        animation-duration: 1s;
        animation-name: slidein;  
        animation-iteration-count: infinite;        
    }


    @keyframes slidein {
        0% { transform: rotateZ(0)}
        100% {transform: rotateZ(360deg); }
    }
`

export default StyledLoginPage