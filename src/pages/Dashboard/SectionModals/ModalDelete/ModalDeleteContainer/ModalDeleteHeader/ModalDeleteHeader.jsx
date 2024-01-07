import { useContext } from 'react';
import { NewTechContext } from '../../../../../../providers/newTechContext';

import { StyledButton } from '../../../../../../styles/StyledButton';
import StyledModalDeleteHeader from './StyledModalDeleteHeader';

const ModalDeleteHeader = () => {
    const { setIsDeleteOpen } = useContext(NewTechContext)

    const closeModal = () => {
        setIsDeleteOpen(false)
    }
    
    return(
        <StyledModalDeleteHeader className='modal__remove-container-header'>
            <p>Tecnologia Detalhada</p>
            <StyledButton onClick={closeModal} >X</StyledButton>
        </StyledModalDeleteHeader> 
    )
}

export default ModalDeleteHeader