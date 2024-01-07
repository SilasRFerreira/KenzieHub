import StyledToast from './StyledToast';

import check from '../../assets/images/check.svg';
import fail from '../../assets/images/fail.svg'

import { useRef } from 'react';
import { StyledButton } from '../../styles/StyledButton';

export const LoginOk = () => {
    const ref = useRef(null);
    
    return (
        <StyledToast role='modal'>
            <div ref={ref}>
                <img src={check}  />                
                <h2>Logado sucesso</h2>               
            </div>
        </StyledToast>
    )
}

export const LoginFail = () => {
    const ref = useRef(null);
    
    return (
        <StyledToast role='modal'>
            <div ref={ref}>
                <img src={fail}  />                
                <h2>Email ou senha inválido</h2>               
            </div>
        </StyledToast>
    )
}

export const RegisterOk = () => {
    const ref = useRef(null);
    
    return (
        <StyledToast role='modal'>
            <div ref={ref}>
                <img src={check}  />                
                <h2>Conta criada com sucesso</h2>               
            </div>
        </StyledToast>
    )
}

export const RegisterFail = () => {
    const ref = useRef(null);
    
    return (
        <StyledToast role='modal'>
            <div ref={ref}>
                <img src={fail}  />                
                <h2>Erro ao criar conta</h2>               
            </div>
        </StyledToast>
    )
}

