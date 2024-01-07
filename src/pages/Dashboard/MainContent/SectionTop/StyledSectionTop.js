import { styled } from 'styled-components';

const StyledSectionTop = styled.section`
    height: 118px;

    display: flex;
    flex-direction: column;
    
    justify-content: center;

    gap: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;

        justify-content: space-between;
        align-items: center;
    }
`

export default StyledSectionTop