import React from 'react'
import HamburgerMenu from '../../atoms/HamburgerMenu'
import './HomePage.css'
import Footer from '../../organisms/Footer'

export default function HomePage() {
  return (
    <>
    <HamburgerMenu />
    <div className='home_title'>Welcome to TBZWiki!</div>
    <a href="/wiki"><div className='dir_page_link'>Get your knowledge here</div></a>
    <Footer/>
    </>
  )
}