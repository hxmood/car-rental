"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import {CarProps, CustomButtonProps } from '@/type'
import CarCard from './CarCard'
import { useRouter } from 'next/navigation'


function Hero() {
  const handleScroll = () => {
    const scroll = document.getElementById("discover")
    if(scroll) {
      scroll.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">

        <h1 className="hero__title">Find, book, rent a car -- quickly and easily</h1>
        <p className="hero__subtitle">streamline your car rental experience with our effortless booking process</p>
        <CustomButton title="explore cars" btnType='button' containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll} />

      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="image of a car" fill className='object-contain'/>
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero
