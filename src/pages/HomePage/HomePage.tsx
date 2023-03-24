import React from 'react'
import HamburgerMenu from '../../atoms/HamburgerMenu'
import './HomePage.css'
import CustomCard from '../../components/CustomCard'
import CardPage from './CardPage'

export default function HomePage() {
  return (
    <>
    <HamburgerMenu />
    <div className='home_title'>Welcome to TBZWiki!</div>
    <div className='dir_page_link'>Get your knowledge here</div>
    
    <CardPage/>
    </>
  )
}