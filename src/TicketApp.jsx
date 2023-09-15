import React from 'react'
import { RouterPage } from './pages/RouterPage'
import { Outlet } from 'react-router-dom'
import { UiProvider } from './context/UiContext'



export const TicketApp = () => {
  return (
    <>
        <RouterPage />
        {/* <Outlet /> */}
    </>
  )
}
