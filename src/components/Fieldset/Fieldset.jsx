import StyledFieldset from './StyledFieldset'

import { StyledErrorMsg } from '../../styles/Typograohy' 

import { forwardRef } from 'react'

const Fieldset = forwardRef(({label, errors, tag, id, type, placeholder, ...rest}, ref) => {   
    
    return (
        <StyledFieldset>
            {label 
            ? <label htmlFor={id}>{label}</label> 
            : null           
            }
            <input id={id} type={type} placeholder={placeholder} {...rest} ref={ref}/>  
            {errors? <StyledErrorMsg>{errors.message}</StyledErrorMsg> : null}              
        </StyledFieldset>
    )
})

export default Fieldset