import StyledSectionTop from './StyledSectionTop'

import { useContext } from 'react'
import { NewTechContext } from '../../../../providers/newTechContext'


const SectionTop = () => {
    const { userData } = useContext(NewTechContext)
    
    return (
        <StyledSectionTop className='section__top'>            
            <h1>Olá,  {userData.name}</h1>
            <span>{userData.course_module}</span>            
        </StyledSectionTop>
    )
}

export default SectionTop