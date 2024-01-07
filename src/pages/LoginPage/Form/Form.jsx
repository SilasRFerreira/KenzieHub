import { useForm } from 'react-hook-form';

import Fieldset from '../../../components/Fieldset/Fieldset';

import StyledForm from './StyledForm';

import formSchema from './formSchema';

import { zodResolver } from '@hookform/resolvers/zod';

import { StyledButton } from '../../../styles/StyledButton';

import { useContext } from 'react';
import { LoginContext } from '../../../providers/loginContext';


const Form = () => {

    const { submit } = useContext(LoginContext)  
    
    const formSubmit = (formaData) => {
        submit(formaData)
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });
    
    return (
        <StyledForm onSubmit={handleSubmit(formSubmit)}>  
            <Fieldset 
                label='Email'
                type='email'
                placeholder={'Digite seu email'}                
                {...register('email')} 
                errors={errors.email}                                
            />
            <Fieldset 
                label='Senha'
                type='password'
                placeholder='Digite sua senha'
                {...register('password')} 
                errors={errors.password}
            />       
            <StyledButton backcolor='primary' dimensions='large' type="submit">Entrar</StyledButton>
        </StyledForm>
    )
}

export default Form