import { useContext, useEffect, useRef } from 'react';

import ModalDeleteForm from './ModalDeleteForm/ModalDeleteForm';
import ModalDeleteHeader from './ModalDeleteHeader/ModalDeleteHeader';

import StyledModalDeleteContainer from './StyledModalDeleteContainer';
import { NewTechContext } from '../../../../../providers/newTechContext';


const ModalDeleteContainer = () => {
    
    const modalRef = useRef(null)

    const { setIsDeleteOpen, setDeletionConfirmation, setUpdateConfirmation } = useContext(NewTechContext)

    useEffect(() => {
        const handleOutCLick = (e) => {
          if(!modalRef.current.contains(e.target)) {
            setIsDeleteOpen(false);
            setDeletionConfirmation(false)
            setUpdateConfirmation(false)
          }  
        };
  
        window.addEventListener('mousedown', handleOutCLick);
  
        return () => {
          window.removeEventListener('mousedown', handleOutCLick);
        }
  
      }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            setIsDeleteOpen(false) 
            setDeletionConfirmation(false)
            setUpdateConfirmation(false)
          }          
        };
  
        window.addEventListener('keydown', handleKeyDown);      
        
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        }
      }, []);

    
    return(
        <StyledModalDeleteContainer ref={modalRef}>
            <ModalDeleteHeader />
            <ModalDeleteForm />
        </StyledModalDeleteContainer>
    )
}

export default ModalDeleteContainer