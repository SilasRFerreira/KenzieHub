import StyledTechsList from './StyledTechsList';

import TechCard from './TechCard/TechCard';

import { useContext } from 'react';
import { NewTechContext } from '../../../../providers/newTechContext';

const TechsList = () => {
   const { userTechs } = useContext(NewTechContext) 
 
    return (
        <StyledTechsList> 
            {userTechs ? 
            userTechs.map((tech) => {
                return (                
                <TechCard tech={tech} key={tech.id}/>                    
                )
            })
            : null}                    
        </StyledTechsList>
    )
}

export default TechsList