import StyledAddTechs from './StyledAddTechs';

import { StyledButton } from '../../../../styles/StyledButton';

import addButton from '../../../../assets/images/+.svg';

import { useContext } from 'react';
import { NewTechContext } from '../../../../providers/newTechContext';

const AddTechs = () => {

    const { setIsRegisterOpen } = useContext(NewTechContext)

    const openModal = () => {
        setIsRegisterOpen(true)
    }
    
    return (
        <StyledAddTechs>
            <h1>Tecnologias</h1>
            <StyledButton backcolor='300' type='button' onClick={openModal}>
                <img src={addButton} alt='' />
            </StyledButton>
        </StyledAddTechs>
    )
}

export default AddTechs