import { createContext, useEffect, useState } from 'react';

import api  from '../sevices/api';

import { useNavigate } from 'react-router-dom';

export const RegisterContext = createContext({});

export const RegisterProvider = ({children}) => {
    const [isOpenOk, setIsOpenOk] = useState(false);    
    const [isOpenFail, setIsOpenFail] = useState(false); 
    
    const Navigate = useNavigate()
    
    const token = JSON.parse(localStorage.getItem('@KenzieHub: Validation-token')); 

    useEffect(() => {
        token ? Navigate('/dashboard') : null
    }, [])

    const submit = (formData) => {  

        if(formData.password === formData.confirm) {
            const registerData = async () => {
                try{
                    const register = await api.post('/users', formData) 
                    setIsOpenOk(true)
                    setTimeout(() => {
                        setIsOpenOk(false)
                    }, 3000)                  
                } catch (error) {
                    setIsOpenFail(true)
                    setTimeout(() => {
                        setIsOpenFail(false)
                    }, 3000)
                }
            }
            registerData()
        }        
    } 
    
    return(
        <RegisterContext.Provider value={{isOpenOk, isOpenFail, submit}}>
            {children}
        </RegisterContext.Provider>
    )
}