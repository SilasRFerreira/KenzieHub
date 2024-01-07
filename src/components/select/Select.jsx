import { forwardRef } from 'react'
import StyledSelect from './StyledSelect'

const Select = forwardRef(({children, id, ...rest}, ref) => {    
    
    return (
        <StyledSelect>
            <label htmlFor={id}>Selecionar Módulo</label>
            <select id={id} {...rest} ref={ref} >
                {children}
            </select>
        </StyledSelect>
    )
})

export default Select