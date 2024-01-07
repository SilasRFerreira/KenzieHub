import { createContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import api from '../sevices/api';

export const LoginContext = createContext({});

export const LoginProvider = ({children}) => {
    const [isOpenOk, setIsOpenOk] = useState(false);    
    const [isOpenFail, setIsOpenFail] = useState(false); 
    const [isLoading, setIsLoading] = useState(false);    
    
    const Navigate = useNavigate();
    
    const token = JSON.parse(localStorage.getItem('@KenzieHub: Validation-token')); 

    useEffect(() => {
        token ? Navigate('/dashboard') : null
    }, [])

    const submit = (loginData) => {
        
        const userLogin = async () => {
            try{
                const {data} = await api.post('/sessions', loginData);
                setIsLoading(true)              
                localStorage.setItem('@KenzieHub: Validation-token', JSON.stringify(data.token));
                setIsOpenOk(true);
                setTimeout(() => {                    
                    setIsOpenOk(false)
                    {data.token ? Navigate('/dashboard') : null}    
                }, 3000);
            } catch (error) {
                setIsOpenFail(true);
                setTimeout(() => {
                    setIsOpenFail(false)                        
                }, 3000);
            } finally {
                setIsLoading(false)
            }
        }
        userLogin()
    } 

    
    
    
    return(
        <LoginContext.Provider value={{submit, isOpenOk, isOpenFail, isLoading}} >
            {children}
        </LoginContext.Provider>
    )
}