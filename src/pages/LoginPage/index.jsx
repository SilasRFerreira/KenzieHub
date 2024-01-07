import Form from './Form/Form';
import Container from '../../styles/Container';

import StyledLoginPage from './StyledLoginPage';
import { StyledLink } from '../../styles/StyledButton';

import logo from '../../assets/images/Logo.svg';

import StyledHeaderLogin from './StyledHeaderLogin';

import {LoginFail, LoginOk} from '../../components/Toast/Toast';

import { useContext } from 'react';
import { LoginContext } from '../../providers/loginContext';


const HomePage = () => {
    
    const {isOpenOk, isLoading, isOpenFail} = useContext(LoginContext)

    return (
        <>
        <StyledHeaderLogin>
            <Container>
                <img src={logo} />
            </Container>
        </StyledHeaderLogin>
        <Container>
            <StyledLoginPage>
                <h3>Login</h3>
                <Form />
                <p>Ainda não possui uma conta?</p>
                <StyledLink to='/register' dimensions='large' backcolor='100'>                    
                        Cadatrar-se                    
                </StyledLink>
            {isLoading ? <div className='loading__ico'></div>:null}            
            </StyledLoginPage>
            {isOpenOk ?
                <LoginOk /> : null
            }
            {isOpenFail ?
                <LoginFail /> : null
            }
        </Container>
        </>
    )
}

export default HomePage