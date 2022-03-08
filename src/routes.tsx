import { Routes, Route } from 'react-router-dom'
import { RepositoriesPage } from './pages/RepositoriesPage'
import { About } from './pages/About'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<RepositoriesPage />}></Route>
            <Route path='/sobre' element={<About />}></Route>
        </Routes>
    )
}