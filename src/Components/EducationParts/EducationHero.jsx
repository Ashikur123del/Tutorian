import React from 'react'
import Bghero from "../../assets/images/Bghero.png"
const EducationHero = () => {
  return (
    <section className=' py-6 md:py-20 mb-10 px-4 '  style={{
            backgroundImage: `url(${Bghero})`,
            backgroundPosition: 'buttom center',
            backgroundSize: 'cover'
          }}>
        <div className="container mx-auto px-4">
          <h2 className='mb-4 text-3xl md:text-4xl font-semibold text-black/90'>কুরআন থেকে নেওয়া জীবনের পাঠ</h2>
          <p className='flex gap-2 items-center text-sm font-semibold text-black/90 max-w-xl'> একটা গ্রন্থ গোটা একটা সভ্যতাকে বদলে দিয়েছে— এমন ঘটনা দুনিয়ায় আর একটাও নেই। কী আছে সেই কুরআনে যার স্পর্শে এলে মানুষেরা পাগলপারা হয়ে যায়? কী তার শক্তি যা আমূল বদলে দেয় মানুষের চিন্তাধারা, জীবনপদ্ধতিকে? কী আশ্চর্য তার ক্ষমতা যা শুনবার জন্যে চরম শত্রুরাও রাতের অন্ধকারে কান পেতে রাখতো?</p>
        </div>
    </section>
  )
}

export default EducationHero;