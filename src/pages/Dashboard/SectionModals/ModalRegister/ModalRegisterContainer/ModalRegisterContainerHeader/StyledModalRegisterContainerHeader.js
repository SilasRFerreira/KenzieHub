import { styled } from 'styled-components';
import { HeadlineBold } from '../../../../../../styles/Typograohy';

const StyledModalRegisterContainerHeader = styled.div`
    height: 40px;
    width: 100%;

    padding: 0 1rem;

    background-color: var(--color-gray-200);

    display: flex;

    align-items: center;
    justify-content: space-between;

    p{
        ${HeadlineBold}
    }

    button{
        background-color: transparent;
    }
`

export default StyledModalRegisterContainerHeader