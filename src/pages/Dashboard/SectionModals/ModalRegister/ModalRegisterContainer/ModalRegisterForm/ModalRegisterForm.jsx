import Fieldset from '../../../../../../components/Fieldset/Fieldset'
import Select from '../../../../../../components/select/Select'

import { StyledButton } from '../../../../../../styles/StyledButton'
import StyledModalRegisterForm from './StyledModalRegisterForm'

import { useForm } from 'react-hook-form';

import { useContext } from 'react';
import { NewTechContext } from '../../../../../../providers/newTechContext';

const ModalRegisterForm = () => {
    const { newTechRegister } = useContext(NewTechContext)
    
    const { register, handleSubmit } = useForm();
  
    const submit = (formData) => {
        newTechRegister(formData);        
    }        
    
    return(
        <StyledModalRegisterForm onSubmit={handleSubmit(submit)}>
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
            <StyledButton dimensions='large' backcolor='primary' type='submit'>Cadastrar Tecnologia</StyledButton>
        </StyledModalRegisterForm>
    )
}

export default ModalRegisterForm