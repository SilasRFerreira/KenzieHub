import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import registerformSchema from '../RegisterFormSchema';

import Fieldset from '../../../components/Fieldset/Fieldset';
import Select from '../../../components/select/Select';

import StyledRegisterForm from './StyledRegisterForm';
import { StyledButton } from '../../../styles/StyledButton';

import { useContext } from 'react';
import { RegisterContext } from '../../../providers/RegisterContext';

const RegisterForm = () => {

    const {submit} = useContext(RegisterContext);

    const dataSubmit = (formData) =>{
        submit(formData)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerformSchema)
    });    
    
    return(
        <StyledRegisterForm onSubmit={handleSubmit(dataSubmit)}>
            <Fieldset                 
                label='Nome'
                id='register-name'
                type='text'
                placeholder='Digite aqui seu nome'
                {...register('name')} 
                errors={errors.name}
            />
            <Fieldset 
                label='Email'
                id='register-email'
                type='email'
                placeholder='Digite aqui seu email'
                {...register('email')} 
                errors={errors.email}
            />
            <Fieldset 
                label='Senha'
                id='register-password'
                type='password'
                placeholder='Digite aqui sua senha'
                {...register('password')} 
                errors={errors.password}
            />
            <Fieldset 
                label='Confirmar senha'
                id='register-confirm-password'
                type='password'
                placeholder='Digite aqui sua senha' 
                {...register('confirm')}                               
                errors={errors.confirm}  
                {...errors ? console.log(errors.confirm): null}              
            />
            <Fieldset 
                label='Bio'
                id='register-bio'
                type='text'
                placeholder='Fale sobre você'
                {...register('bio')} 
                errors={errors.bio}
            /><Fieldset 
                label='Contato'
                id='register-contact'
                type='text'
                placeholder='Opção de contato'
                {...register('contact')} 
                errors={errors.contact}
            />                           
            <Select 
                id='register-select' 
                {...register('course_module')}
                errors={errors.course_module}
            >               
                <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo</option>
                <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo</option>
                <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo</option>
                <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>                    
            </Select>            
            <StyledButton dimensions='large' backcolor='disable' type='submit'>Cadastrar</StyledButton>
        </StyledRegisterForm>
    )
}

export default RegisterForm