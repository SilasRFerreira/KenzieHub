import ModalRegisterContainer from './ModalRegisterContainer/ModalRegisterContainer';

import StyledModalRegister from './StyledModalRegister';

const ModalRegister = () => {        

    return(
        <StyledModalRegister className='modal__register-backdrop'>           
            <ModalRegisterContainer />
        </StyledModalRegister>
    )
}

export default ModalRegister