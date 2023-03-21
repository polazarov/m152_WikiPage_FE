import React from 'react'
import './HomePage.css'
import CustomCard from '../../components/CustomCard'
import CardPage from './CardPage'

export default function HomePage() {
  return (
    <>
    <div className='home_title'>Welcome to KuracWiki!</div>
    <div className='dir_page_link'>Get your knowledge here</div>
    
    <CardPage/>
    </>
  )
}
