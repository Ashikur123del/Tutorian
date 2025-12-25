import { Link } from 'react-router-dom'
import Bghero from '../../assets/images/Bghero.png'
import { FaChevronRight } from 'react-icons/fa6'

const PaymentHero = () => {
  return (
    <section
      className='py-8 md:py-20'
      style={{
        backgroundImage: `url(${Bghero})`,
        backgroundPosition: 'buttom center',
        backgroundSize: 'cover'
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl md:text-5xl leading-10 md:leading-14 text-gray-800 font-semibold pb-4'>
            আমার কার্ট
          </h2>
          <p className='flex gap-2 items-center text-xl'>
            {' '}
            <Link to='/' className='text-2xl'>হোম </Link> <FaChevronRight className='text-gray-500'/> <span className='text-2xl'>আমার কার্ট</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default PaymentHero
