import React from 'react'
import Bghero from "../../assets/images/Bghero.png"
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
const CouseHero = () => {
  return (
    <section className='py-20 mb-10 px-4 '  style={{
            backgroundImage: `url(${Bghero})`,
            backgroundPosition: 'buttom center',
            backgroundSize: 'cover'
          }}>
        <div className="container mx-auto">
          <h2 className='mb-4 text-3xl md:text-4xl font-semibold text-black/90'>সকল কোর্স সমুহ</h2>
          <p className='flex gap-2 items-center text-xl font-semibold text-black/90'><Link to="/">হোম </Link><IoIosArrowForward /> সকল কোর্স সমুহ</p>
        </div>
    </section>
  )
}

export default CouseHero;