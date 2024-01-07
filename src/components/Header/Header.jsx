import logo from '../../assets/images/Logo.svg';

import Container from '../../styles/Container';
import StyledHeader from './StyledHeader';

const Header = ({children}) => {
    
    return(
        <StyledHeader>
            <Container>
                <div className='header-container'>
                    <img src={logo} alt='Está escrito: Kenzie Hub' />                    
                    {children}
                </div>
            </Container>
        </StyledHeader>
    )
}

export default Header