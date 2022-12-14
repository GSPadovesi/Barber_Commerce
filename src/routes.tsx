import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import HairPage from './pages/Main/Hair'
import BeardPage from './pages/Main/Beard'
import EyebrowPage from './pages/Main/Eyebrow'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='hair' element={<HairPage />} />
        <Route path='beard' element={<BeardPage />} />
        <Route path='eyebrow' element={<EyebrowPage />} />
      </Route>
    </Routes>
  )
}
