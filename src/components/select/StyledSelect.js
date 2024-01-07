import { styled } from "styled-components";

const StyledSelect = styled.fieldset`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    select{
        height: 38px;

        padding: 0 0.8125rem;

        background-color: var(--color-gray-200);
        
        border: 1px solid var(--color-gray-200);
        border-radius: var(--radius);
        
        color: var(--color-gray-100);
    }
`

export default StyledSelect