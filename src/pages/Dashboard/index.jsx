import logo from '../../assets/images/Logo.svg'

import { useNavigate } from 'react-router-dom'

import { StyledButton } from '../../styles/StyledButton'
import StyledDashboard from './StyledDashboard'

import MainContainer from './MainContent/MainContent'
import SectionTechs from './SectionTechs/SectionTechs'

import ModalRegister from './SectionModals/ModalRegister/ModalRegister'

import { useContext } from 'react'
import { NewTechContext } from '../../providers/newTechContext'
import ModalDelete from './SectionModals/ModalDelete/ModalDelete'

const Dashboard = () => {   
    const { isRegisterOpen, isDeleteOpen } = useContext(NewTechContext)

    const Navigate = useNavigate() 
    
    const logOut = () => {
        localStorage.removeItem('@KenzieHub: Validation-token')
        Navigate('/')
    }
    
    return (
        <StyledDashboard>
            <header>
                <div className='dashboard-container'>
                    <div className='header__content'>
                        <img src={logo} alt='logo exctirto Kenzie Hub' />
                        <StyledButton 
                            backcolor='300' 
                            dimensions='small'
                            onClick={logOut}
                        >Sair</StyledButton>                        
                    </div>
                </div>
            </header>
            <main>
                <section className='dashboard__section-top'>
                    <div className='dashboard-container'>                    
                        <MainContainer />
                    </div>
                </section>
                <SectionTechs />
                <section>  
                    {isRegisterOpen ? <ModalRegister role='dialog'/> : null} 
                    {isDeleteOpen ? <ModalDelete role='dialog' /> : null}
                </section>              
            </main>
                      
        </StyledDashboard>
    )
}

export default Dashboard