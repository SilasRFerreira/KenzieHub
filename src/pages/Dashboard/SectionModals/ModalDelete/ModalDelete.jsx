import ModalDeleteContainer from './ModalDeleteContainer/ModalDeleteContainer';
import StyledModalDelete from './StyleModalDelete';


const ModalDelete = () => {
    return(
        <StyledModalDelete className='modal__remove'>
            <ModalDeleteContainer />
        </StyledModalDelete>
    )
}

export default ModalDelete