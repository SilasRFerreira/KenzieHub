import AddTechs from './AddTechs/AddTechs';
import StyledSectionTechs from './StyledSectionTechs';
import TechsList from './TechsList/TechsList';


const SectionTechs = () => {    
    
    return (
        <StyledSectionTechs className='dashboard__section-techs'>
            <div className='dashboard-container'>
                <AddTechs />
                <TechsList />                
            </div>
        </StyledSectionTechs>
    )
}

export default SectionTechs