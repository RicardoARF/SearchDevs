import {Route, Routes} from 'react-router-dom'
import { Home } from '../pages/Home/Index'
import { Profile } from '../pages/Profile/Index'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:user' element={<Profile />} />
        </Routes>
    );
}