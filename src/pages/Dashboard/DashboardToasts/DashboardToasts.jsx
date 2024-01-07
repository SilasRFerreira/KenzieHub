import  StyledToast  from '../../../components/Toast/StyledToast';
import { StyledButton } from '../../../styles/StyledButton';

import fail from '../../../assets/images/fail.svg';

import { useContext } from 'react';
import { NewTechContext } from '../../../providers/newTechContext';

const DeleteTechToast = ({techId}) => { 
    
    const { setDeletionConfirmation, removeTechs } = useContext(NewTechContext)

    const closeDeletionModal = () => {
        setDeletionConfirmation(false)        
    }    
    
    return (
        <StyledToast role='modal'>
            <div>
                <img src={fail}  />                
                <h2>Realmente deseja excluir essa Tecnologia?</h2>   
                <StyledButton onClick={closeDeletionModal}>X</StyledButton>             
            </div>
            <StyledButton dimensions='small' backcolor='disable' onClick={() => removeTechs(techId)}>Excluir</StyledButton>
        </StyledToast>
    )
}

export default DeleteTechToast