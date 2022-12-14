import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import HairPage from './pages/Main/Hair'
import BeardPage from './pages/Main/Beard'
import EyebrowPage from './pages/Main/Eyebrow'
import ContactPage from './pages/Main/Contact'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<HairPage />} />
        <Route path='beard' element={<BeardPage />} />
        <Route path='eyebrow' element={<EyebrowPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
