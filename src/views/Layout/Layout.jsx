import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './Layout.css'

export default function Layout({children}) {
  return (
    <div className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
