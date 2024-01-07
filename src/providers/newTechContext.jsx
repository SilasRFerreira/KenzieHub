import { createContext, useEffect, useState } from 'react';

import api from '../sevices/api';
import { useNavigate } from 'react-router-dom';

export const NewTechContext = createContext({});

export const NewTechProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem('@KenzieHub: Validation-token'));
    
    const Navigate = useNavigate();

    const [userData, setUserData] = useState({});
    const [userTechs, setUserTechs] = useState([])

    const [newItem, setNewItem] = useState({});    
    
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletionConfirmation, setDeletionConfirmation] = useState(false);
    const [updateConfirmation, setUpdateConfirmation] = useState(false);

    const [techId, setTechId] = useState('')

    useEffect(() => {
        !token ? Navigate('/') : null 
        
        const loggedUser = async () => {
            const {data} = await api.get('/profile', {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
              });
            
            setUserData(data)  
            setUserTechs(data.techs)                                            
        }
        loggedUser()
    }, [newItem, isDeleteOpen]);

    const newTechRegister = async (data) => {
        try {
            const tech = await api.post('/users/techs', data, {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
            }) 
            setNewItem(tech)
        } catch (error) {
            console.log(error)
        }        
    }    
    
    const removeTechs = async (id) => {
        try {
            const remove = await api.delete(`/users/techs/${id}`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
            })  
            setUserTechs((userTechs) => userTechs.filter(object => object.id != id)) 
            setIsDeleteOpen(false)  
            setDeletionConfirmation(false)  
                 
        } catch (error) {
            console.log(error)
        }
    }     
    
    const updateTechs = async (id, body) => {
        try {
            const updatedTech = await api.put(`/users/techs/${id}`, body, {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
            })            
            setIsDeleteOpen(false) 
            setUpdateConfirmation(false)  
        } catch (error) {
            console.log(error)
        }        
    }

    return(
        <NewTechContext.Provider 
            value={{Navigate, userData, setUserData, newTechRegister, isRegisterOpen, setIsRegisterOpen, 
                    isDeleteOpen, setIsDeleteOpen, techId, setTechId, removeTechs, userTechs, updateTechs,
                    deletionConfirmation, setDeletionConfirmation, updateConfirmation, setUpdateConfirmation               
            }}
        >            
            {children}
        </NewTechContext.Provider>
    )
}