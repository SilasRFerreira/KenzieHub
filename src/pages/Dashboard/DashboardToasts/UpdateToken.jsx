import  StyledToast  from '../../../components/Toast/StyledToast';
import { StyledButton } from '../../../styles/StyledButton';

import fail from '../../../assets/images/fail.svg';

import { useContext } from 'react';
import { NewTechContext } from '../../../providers/newTechContext';


const UpdateTechToast = ({updateTech}) => {    
    const { setUpdateConfirmation } = useContext(NewTechContext)

    const closeModal = () => {        
        setUpdateConfirmation(false)
    }  

    return (
        <StyledToast role='modal'>
            <div>
                <img src={fail}  />                
                <h2>Salvar Alterações?</h2>               
                <StyledButton onClick={closeModal}>X</StyledButton>
            </div>
            <StyledButton dimensions='small' backcolor='primary' onClick={updateTech}>Alterar</StyledButton>
        </StyledToast>
    )
}

export default UpdateTechToast