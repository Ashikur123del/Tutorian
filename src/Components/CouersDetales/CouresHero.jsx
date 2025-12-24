import Bghero from "../../assets/images/Bghero.png"


const CouresHero = () => {
  return (
    <section className='py-8 md:py-20' style={{
                backgroundImage: `url(${Bghero})`,
                backgroundPosition: 'buttom center',
                backgroundSize: 'cover'
              }}>
            <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl leading-10 md:leading-14 text-gray-800 font-semibold pb-4">প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স - ২০২৩</h2>
                    <p className="text-sm max-w-lg md:text-base font-extrabold text-gray-700 ">ঘরে বসে প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি নিয়ে শিক্ষক হবার স্বপ্ন পূরণে এনরোল করুন “প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স - ২০২৩”</p>
                </div>
            </div>
    </section>
  )
}

export default CouresHero