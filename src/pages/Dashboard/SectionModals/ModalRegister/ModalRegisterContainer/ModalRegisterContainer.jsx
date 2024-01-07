import { useEffect, useRef } from 'react'

import ModalRegisterContainerHeader from './ModalRegisterContainerHeader/ModalRegisterContainerHeader'
import ModalRegisterForm from './ModalRegisterForm/ModalRegisterForm'

import StyledModalRegisterContainer from './StyledModalRegisterContainer'

import { useContext } from 'react';
import { NewTechContext } from '../../../../../providers/newTechContext';


const ModalRegisterContainer = () => {   
    const modalRef = useRef(null)
    
    const { setIsRegisterOpen } = useContext(NewTechContext)
    
    useEffect(() => {
        const handleOutCLick = (e) => {
          if(!modalRef.current.contains(e.target)) {
            setIsRegisterOpen(false);
          }  
        };
  
        window.addEventListener('mousedown', handleOutCLick);
  
        return () => {
          window.removeEventListener('mousedown', handleOutCLick);
        }
  
      }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
          e.key === 'Escape' ? setIsRegisterOpen(false): null
        };
  
        window.addEventListener('keydown', handleKeyDown);      
        
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        }
      }, []);



    return(
        <StyledModalRegisterContainer ref={modalRef}>            
            <ModalRegisterContainerHeader />
            <ModalRegisterForm />            
        </StyledModalRegisterContainer>
    )
}

export default ModalRegisterContainer