import React from 'react'
import MenuButton from '../../atoms/MenuIcon'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <MenuButton />
    <div className='home_title'>Welcome to KuracWiki!</div>
    <div className='dir_page_link'>Get your knowledge here</div>
    </>
  )
}
