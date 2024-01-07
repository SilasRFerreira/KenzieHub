import { Link } from 'react-router-dom';

import { styled, css } from 'styled-components';

export const StyledButton = styled.button`
    cursor: pointer;

    border: none;

    font-size: 0.75rem;
    font-weight: 500;

    color: var(--color-gray-0);   
        
    border-radius: var(--radius);
    
    ${({dimensions}) => {
        switch(dimensions) {
            case 'large':
                return css`
                    height: 3rem;
                    padding: 0 1.375rem;
                `
            case 'small': 
                return css`
                    height: 2.5rem;
                    padding: 0 1rem;
                `
            
        }
    }}

    ${({backcolor}) => {
        switch(backcolor) {
            case 'primary': 
                return css`
                    background-color: var(--color-primary);

                    border: 1px solid var(--color-primary);

                    &:hover{
                        background-color: var(--color-primary-focus);

                        border: 1px solid var(--color-primary-focus);
                    }
                `
            case 'secondary': 
                return css`
                    background-color: var(--color-primary-focus);

                    border: 1px solid var(--color-primary-focus);

                    &:hover{
                        background-color: var(--color-primary);

                        border: 1px solid var(--color-primary);
                    }
            ` 
            case 'disable': 
                return css`
                    background-color: var(--color-primary-negative);

                    border: 1px solid var(--color-primary-negative);

                    &:hover{
                        background-color: var(--color-primary-focus);

                        border: 1px solid var(--color-primary-focus);
                    }
                ` 
            case '100': 
                return css`
                    background-color: var(--color-gray-100);

                    border: 1px solid var(--color-gray-100);

                    &:hover{
                        background-color: var(--color-gray-300);

                        border: 1px solid var(--color-gray-0);
                    }
                `
            case '300': 
                return css`
                    background-color: var(--color-gray-300);

                    border: 1px solid var(--color-gray-300);

                    &:hover{
                        background-color: var(--color-gray-100);

                        border: 1px solid var(--color-gray-100);
                    }
                `
        }
    }}
` 

export const StyledLink = styled(Link)`
    cursor: pointer;

    border: none;

    display: flex;
    
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    font-weight: 500;

    color: var(--color-gray-0);   
        
    border-radius: var(--radius);

    ${({dimensions}) => {
        switch(dimensions) {
            case 'large':
                return css`
                    height: 3rem;
                    padding: 0 1.375rem;
                `
            case 'small': 
                return css`
                    height: 2.5rem;
                    padding: 0 1rem;
                `
            
        }
    }}

    ${({backcolor}) => {
        switch(backcolor) {
            case 'primary': 
                return css`
                    background-color: var(--color-primary);

                    border: 1px solid var(--color-primary);

                    &:hover{
                        background-color: var(--color-primary-focus);

                        border: 1px solid var(--color-primary-focus);
                    }
                `
            case 'secondary': 
                return css`
                    background-color: var(--color-primary-focus);

                    border: 1px solid var(--color-primary-focus);

                    &:hover{
                        background-color: var(--color-primary);

                        border: 1px solid var(--color-primary);
                    }
            ` 
            case 'disable': 
                return css`
                    background-color: var(--color-primary-negative);

                    border: 1px solid var(--color-primary-negative);

                    &:hover{
                        background-color: var(--color-primary-focus);

                        border: 1px solid var(--color-primary-focus);
                    }
                ` 
            case '100': 
                return css`
                    background-color: var(--color-gray-100);

                    border: 1px solid var(--color-gray-100);

                    &:hover{
                        background-color: var(--color-gray-300);

                        border: 1px solid var(--color-gray-0);
                    }
                `
            case '300': 
                return css`
                    background-color: var(--color-gray-300);

                    border: 1px solid var(--color-gray-300);

                    &:hover{
                        background-color: var(--color-gray-100);

                        border: 1px solid var(--color-gray-100);
                    }
                `
        }
    }}
`