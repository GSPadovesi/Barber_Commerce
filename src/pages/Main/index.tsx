import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import { Outlet } from 'react-router-dom'
import  Logo  from '../../assets/logo.svg'
import { useEffect, useState } from 'react'
import { getHair } from '../../services/api'

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
