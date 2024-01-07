import { styled } from "styled-components";

const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;

    gap: 1rem;    

    input{
        height: 38px;
        width: 100%;

        padding: 0 0.8125rem;

        color: var(--color-gray-0);

        border: 1px solid var(--color-gray-200);
        border-radius: var(--radius);

        background-color: var(--color-gray-200);

        &::placeholder{
            color: var(--color-gray-100);
        }
    }
`

export default StyledFieldset