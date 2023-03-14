import React from 'react'
import HamburgerMenu from '../../atoms/HamburgerMenu'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <HamburgerMenu />
    <div className='home_title'>Welcome to TBZWiki!</div>
    <div className='dir_page_link'>Get your knowledge here</div>
    </>
  )
}