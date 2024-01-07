import Container from '../../styles/Container';

import RegisterForm from './Form/RegisterForm';

import StyledRegisterPage from './StyledRegisterPage';
import Header from '../../components/Header/Header';

import { StyledLink } from '../../styles/StyledButton';

import { useContext } from 'react';

import { RegisterOk, RegisterFail } from '../../components/Toast/Toast';

import { RegisterContext } from '../../providers/RegisterContext';

const RegisterPage = () => { 

    const {isOpenOk, isOpenFail} = useContext(RegisterContext) 

    return (
        <>
            <Header> 
                <StyledLink to='/' dimensions='small' backcolor='300'>
                    Voltar                    
                </StyledLink>                    
            </Header>
            <Container>
                <StyledRegisterPage>
                    <h3>Crie sua conta</h3>
                    <p>Rápido e grátis, vamos nessa</p>
                    <RegisterForm/>
                </StyledRegisterPage>
                {isOpenOk ?
                <RegisterOk /> : null
                }
                {isOpenFail ?
                    <RegisterFail /> : null
                }
            </Container>
        </>
    )
}

export default RegisterPage