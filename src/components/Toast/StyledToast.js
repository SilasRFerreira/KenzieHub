import { styled } from 'styled-components';

const StyledToast = styled.div`
    height: 70px;
    width: clamp(150px, 100%, 286px);   
    
    background-color: var(--color-gray-300); 

    border-radius: var(--radius);

    position: absolute;

    right: 1rem;
    top: 1rem;

    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    div{
        height: 100%;
        width: 100%;

        padding: 10px 17px;

        display: flex;
        
        align-items: center;
        
        gap: 2rem;
        
        position: relative;
        
        img{
            height: 28px;
            width: 28px;
        }
    
        h2{
            font-size: 0.875rem;
            font-weight: 700;
        }
    
        button{
            background: transparent;
    
            position: absolute;

            top: 0.5rem;
            right: 0.5rem;
        }
    }

`

export default StyledToast