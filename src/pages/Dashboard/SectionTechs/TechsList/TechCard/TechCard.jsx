import { useContext } from 'react'
import { NewTechContext } from '../../../../../providers/newTechContext'

import StyledTechCard from './StyledTechCard'


const TechCard = ({tech}) => {
    const { setIsDeleteOpen, setTechId } = useContext(NewTechContext)
   
    const openModal = (e) => {
        setIsDeleteOpen(true)    
        setTechId(e.target.id)           
    }    
    
    return (
        <StyledTechCard id={tech.id} onClick={(e) => openModal(e)}>
            <h2>{tech.title}</h2>
            <p>{tech.status}</p>
        </StyledTechCard>
    )
}

export default TechCard