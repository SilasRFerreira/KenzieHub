import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/LoginPage/index';
import Dashboard from '../pages/Dashboard/index';
import RegisterPage from '../pages/RegisterPage/index';

import { NewTechProvider } from '../providers/newTechContext';
import { LoginProvider } from '../providers/loginContext';
import { RegisterProvider } from '../providers/RegisterContext';

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={ <LoginProvider><HomePage /></LoginProvider>  }  />
            <Route path='/register' element={ <RegisterProvider><RegisterPage /></RegisterProvider> } />
            <Route path='/dashboard' element={<NewTechProvider><Dashboard /></NewTechProvider>}></Route>
        </Routes>
    )
}

export default RoutesMain