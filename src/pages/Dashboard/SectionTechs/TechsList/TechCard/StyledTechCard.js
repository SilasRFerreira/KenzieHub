import { styled } from "styled-components";
import { Headline } from "../../../../../styles/Typograohy";

const StyledTechCard = styled.li`
    height: 49px;
    width: 100%;

    padding: 0 1rem;

    border-radius: var(--radius);

    background-color: var(--color-gray-400);

    cursor: pointer;
    
    display: flex;

    justify-content: space-between;
    align-items: center;
    
    &:hover{
        background-color: var(--color-gray-200);
    }

    h2{
        font-size: 14px;
        font-weight: 700;
    }

    p{
        ${Headline}
    }
`

export default StyledTechCard