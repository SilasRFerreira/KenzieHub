import { StyledButton } from '../../../../../../styles/StyledButton';

import StyledModalRegisterContainerHeader from './StyledModalRegisterContainerHeader';

import { useContext } from 'react';
import { NewTechContext } from '../../../../../../providers/newTechContext';


const ModalRegisterContainerHeader = () => {
    const { setIsRegisterOpen } = useContext(NewTechContext);

    const closeModal = () => {
        setIsRegisterOpen(false)
    }

    return(
        <StyledModalRegisterContainerHeader>
            <p>Cadastrar Tecnologia</p>
            <StyledButton onClick={closeModal}>X</StyledButton>
        </StyledModalRegisterContainerHeader>
    )
}

export default ModalRegisterContainerHeader