import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getHair } from '../../services/api'
import Logo from '../../assets/logo.svg'

export default function Main() {


  return (
    <Container>
      <Sidebar />
      <section>
        <img src={Logo} alt="" />
        <Outlet />
      </section>
    </Container>
  )
}
