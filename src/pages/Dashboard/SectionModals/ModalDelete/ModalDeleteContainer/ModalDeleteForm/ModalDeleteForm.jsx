import { useForm } from 'react-hook-form';

import { useContext, useState } from 'react';
import { NewTechContext } from '../../../../../../providers/newTechContext';

import Fieldset from '../../../../../../components/Fieldset/Fieldset';
import Select from '../../../../../../components/select/Select';
import { StyledButton } from '../../../../../../styles/StyledButton';
import StyledModalDeleteForm from './StyledModalDeleteForm';

import DeleteTechToast from '../../../../DashboardToasts/DashboardToasts';
import UpdateTechToast from '../../../../DashboardToasts/updateToken';


const ModalDeleteForm = () => {
    const { techId, removeTechs, updateTechs, setDeletionConfirmation, 
        deletionConfirmation, updateConfirmation, setUpdateConfirmation} = useContext(NewTechContext)     
    
    const { register, handleSubmit } = useForm();

    const [body, setBody] = useState({})
       
    const submit = (formData) => {        
        setBody({
            status: formData.status
        })
    }

    const updateTech = () => { 
        updateTechs(techId, body)
    }   

    const confimrDeletion = () => {
        setDeletionConfirmation(true)
    }
    
    const deleteTech = () => {
        removeTechs(techId)                        
    } 

    return(
        <StyledModalDeleteForm onSubmit={handleSubmit(submit)}>
           <Fieldset 
                label='Nome' 
                type='text'
                {...register('title')}
            />
            <Select {...register('status')}>
                <option value='Iniciante'>Iniciante</option>
                <option value='Intermediário'>Intermediário</option>
                <option value='Avançado'>Avançado</option>
            </Select>  
            <div className='delete-form-buttons'>
                <StyledButton dimensions='large' backcolor='disable' type='submit' onClick={() => setUpdateConfirmation(true)}>Salvar Alterações</StyledButton>
                <StyledButton dimensions='large' backcolor='100' type='button' onClick={confimrDeletion}>Excluir</StyledButton>
            </div>  
            {deletionConfirmation ? <DeleteTechToast techId={techId} /> : null}
            {updateConfirmation ? <UpdateTechToast updateTech={updateTech}/> : null}
        </StyledModalDeleteForm>
    )
}

export default ModalDeleteForm