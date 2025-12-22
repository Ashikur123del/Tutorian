import React, { useState, useMemo, useEffect } from 'react'
import BookImg from '../../assets/images/Book.svg'
import { FaStar, FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa'
import { FiSearch, FiX } from 'react-icons/fi'

// ১. ডাইনামিক ডাটাবেস (আরো কিছু ডাটা যোগ করা হয়েছে স্ক্রিনশট অনুযায়ী)
const productsData = Array(63)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title:
      index % 2 === 0
        ? 'পদার্থবিজ্ঞানের জানা অজানা বিষয় গুলো'
        : 'রসায়নের মজার কিছু রহস্য',
    price: 250,
    oldPrice: 300,
    category:
      index % 4 === 0
        ? 'একাডেমিক প্রোগ্রাম'
        : index % 4 === 1
        ? 'ভর্তি প্রস্তুতি'
        : index % 4 === 2
        ? 'চাকরির প্রস্তুতি'
        : 'ক্লাস ৬ - এস.এস.সি',
    author:
      index % 3 === 0
        ? 'আনিসুল হক'
        : index % 3 === 1
        ? 'মানিকের বন্দ্যোপাধ্যায়'
        : 'সেলিনা হোসেন',
    publisher: index % 2 === 0 ? 'বাংলা একাডেমি' : 'অন্যপ্রকাশ',
    rating: index % 3 === 0 ? 5 : index % 3 === 1 ? 4 : 3
  }))

const categories = [
  'ক্লাস ৬ - এস.এস.সি',
  'চাকরির প্রস্তুতি',
  'ভর্তি প্রস্তুতি',
  'একাডেমিক প্রোগ্রাম',
  'এক্সাম',
  'স্কিল',
  'পাবলিকেশনস'
]
const authors = [
  'জেমস প্যাটারসন',
  'মানিকের বন্দ্যোপাধ্যায়',
  'সেলিনা হোসেন',
  'ডেল কার্নেগী',
  'আনিসুল হক'
]

const BookStore = () => {
  const [selectedCats, setSelectedCats] = useState([])
  const [selectedAuthors, setSelectedAuthors] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [rating, setRating] = useState(null)
  const [sort, setSort] = useState('popular')
  const itemsPerPage = 9

  // ২. ডাইনামিক ফিল্টার লজিক
  const processedProducts = useMemo(() => {
    let result = productsData.filter(book => {
      const matchCat =
        selectedCats.length === 0 || selectedCats.includes(book.category)
      const matchAuthor =
        selectedAuthors.length === 0 || selectedAuthors.includes(book.author)
      const matchSearch = book.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchRating = !rating || book.rating >= rating
      return matchCat && matchAuthor && matchSearch && matchRating
    })

    if (sort === 'low') result.sort((a, b) => a.price - b.price)
    if (sort === 'high') result.sort((a, b) => b.price - a.price)

    return result
  }, [selectedCats, selectedAuthors, searchQuery, rating, sort])

  const totalPages = Math.ceil(processedProducts.length / itemsPerPage)
  const currentItems = processedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCats, selectedAuthors, searchQuery, rating, sort])

  const startItem =
    processedProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, processedProducts.length)

  return (
    <div className='bg-[#fcfcfc] min-h-screen font-sans text-gray-800 antialiased'>
      {/* 📱 MOBILE SEARCH & HEADER (Screenshot 8 Logic) */}
      <div className='lg:hidden p-4 bg-white sticky top-0 z-50 border-b shadow-sm space-y-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-sm font-bold text-gray-700'>
            {startItem} - {endItem} এর মধ্যে {processedProducts.length}টি ফলাফল
          </h1>
          <select
            className='border rounded-lg px-2 py-1.5 text-xs bg-gray-50 outline-none font-bold'
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value='popular'>জনপ্রিয় বই</option>
            <option value='low'>মূল্য: কম</option>
            <option value='high'>মূল্য: বেশি</option>
          </select>
        </div>
        <div className='flex gap-2'>
          <div className='relative flex-1 group'>
            <FiSearch className='absolute left-4 top-3.5 text-gray-400 group-focus-within:text-pink-500' />
            <input
              type='text'
              placeholder='Search your books'
              className='w-full bg-[#F3F4F6] border-none rounded-xl py-3 pl-11 pr-10 text-sm focus:ring-2 focus:ring-pink-500/20 outline-none'
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => setIsSidebarOpen(true)}
              className='absolute right-3 top-2.5 p-1 text-gray-400 hover:text-pink-600'
            >
              <FaFilter size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-[1400px] mx-auto px-4 lg:px-10 py-6 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10'>
        {/* 💻 SIDEBAR (Desktop: Screenshot 7 | Mobile: Slider) */}
        <aside
          className={`fixed lg:relative inset-y-0 left-0 z-[60] w-80 lg:w-full bg-white lg:bg-transparent lg:col-span-3 p-6 lg:p-0 border-r lg:border-none transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className='flex justify-between items-center lg:hidden mb-8 border-b pb-4'>
            <h2 className='font-extrabold text-xl text-pink-600'>
              ফিল্টার অপশন
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className='p-2 bg-gray-100 rounded-full text-gray-600'
            >
              <FiX size={20} />
            </button>
          </div>

          <div className='space-y-8 overflow-y-auto max-h-screen lg:max-h-none pb-24 lg:pb-0 pr-2 custom-scrollbar'>
            {/* Category Section */}
            <section className='bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100'>
              <h3 className='font-black text-[15px] mb-5 text-gray-800 border-l-4 border-pink-500 pl-3 leading-none'>
                বই ক্যাটাগরি সমূহ
              </h3>
              <div className='space-y-4'>
                {categories.map(cat => (
                  <label
                    key={cat}
                    className='flex justify-between items-center cursor-pointer group'
                  >
                    <div className='flex items-center gap-3'>
                      <input
                        type='checkbox'
                        className='w-4.5 h-4.5 accent-pink-600 rounded cursor-pointer border-gray-300'
                        onChange={() =>
                          setSelectedCats(prev =>
                            prev.includes(cat)
                              ? prev.filter(c => c !== cat)
                              : [...prev, cat]
                          )
                        }
                      />
                      <span className='text-sm text-gray-600 group-hover:text-pink-600 font-medium transition-colors'>
                        {cat}
                      </span>
                    </div>
                    <span className='text-[10px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full font-bold'>
                      ১২
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* Author Section */}
            <section className='bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100'>
              <h3 className='font-black text-[15px] mb-5 text-gray-800 border-l-4 border-pink-500 pl-3 leading-none'>
                বইয়ের লেখক
              </h3>
              <div className='space-y-4'>
                {authors.map(auth => (
                  <label
                    key={auth}
                    className='flex justify-between items-center cursor-pointer group'
                  >
                    <div className='flex items-center gap-3'>
                      <input
                        type='checkbox'
                        className='w-4.5 h-4.5 accent-pink-600 rounded cursor-pointer border-gray-300'
                      />
                      <span className='text-sm text-gray-600 group-hover:text-pink-600 font-medium transition-colors'>
                        {auth}
                      </span>
                    </div>
                    <span className='text-[10px] text-gray-400 font-bold'>
                      (১৪)
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* Rating Section */}
            <section className='bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100'>
              <h3 className='font-black text-[15px] mb-5 text-gray-800 border-l-4 border-pink-500 pl-3 leading-none'>
                রেটিং অনুযায়ী
              </h3>
              {[5, 4, 3, 2, 1].map(star => (
                <label
                  key={star}
                  className='flex items-center justify-between mb-4 text-xs text-gray-500 cursor-pointer group'
                >
                  <div className='flex items-center gap-3'>
                    <input
                      type='radio'
                      name='rating'
                      onChange={() => setRating(star)}
                      className='accent-pink-600 w-4 h-4'
                    />
                    <span className='font-bold'>{star} স্টার</span>
                  </div>
                  <span className='text-[10px] text-gray-300 font-bold'>
                    {star * 1000}
                  </span>
                </label>
              ))}
            </section>
          </div>
        </aside>

        {/* 🛒 MAIN GRID AREA (Screenshot 7/8 Combined) */}
        <main className='lg:col-span-9'>
          {/* Desktop Top Bar */}
          <div className='hidden lg:flex justify-between items-end mb-10'>
            <div>
              <h1 className='text-2xl font-black text-gray-900 mb-2 tracking-tight'>
                ১ - ৯ এর মধ্যে {processedProducts.length}টি ফলাফল দেখানো হচ্ছে
              </h1>
              <div className='w-20 h-1.5 bg-pink-500 rounded-full'></div>
            </div>
            <div className='flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100'>
              <span className='text-xs font-black text-gray-400 uppercase ml-2'>
                সর্ট করুন:
              </span>
              <select
                className='bg-gray-50 border-none rounded-xl px-4 py-2 text-sm font-bold outline-none cursor-pointer focus:ring-2 focus:ring-pink-500/20'
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value='popular'>জনপ্রিয় বই</option>
                <option value='low'>মূল্য: কম থেকে বেশি</option>
                <option value='high'>মূল্য: বেশি থেকে কম</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8'>
            {currentItems.map(book => (
              <div
                key={book.id}
                className='bg-white border border-gray-100 rounded-[2rem] p-3 lg:p-5 hover:shadow-[0_25px_60px_-20px_rgba(244,63,94,0.15)] transition-all duration-500 group relative flex flex-col'
              >
                {/* Book Image Box */}
                <div className='bg-[#fcfcfc] rounded-[1.5rem] p-4 lg:p-8 flex flex-col items-center relative overflow-hidden ring-1 ring-gray-50'>
                  <img
                    src={BookImg}
                    alt='book'
                    className='h-28 lg:h-44 object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2'
                  />

                  <button className='absolute bottom-5 w-[80%] bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-wider translate-y-24 group-hover:translate-y-0 transition-all duration-500 shadow-lg hidden lg:block'>
                    Add to Cart
                  </button>
                </div>

                {/* Content */}
                <div className='mt-4 lg:mt-5 flex-1 flex flex-col justify-between px-1'>
                  <p className='text-[10px] lg:text-[11px] text-pink-500 font-bold uppercase tracking-widest mb-1'>
                    {book.category}
                  </p>
                  <h4 className='font-bold text-[13px] lg:text-[16px] text-gray-800 leading-tight h-12 lg:h-14 line-clamp-2 group-hover:text-pink-600 transition-colors'>
                    {book.title}
                  </h4>

                  <div className='flex items-center gap-1 text-[#FBBF24] text-[9px] lg:text-[12px] my-2'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < book.rating ? 'fill-current' : 'text-gray-200'
                        }
                      />
                    ))}
                    <span className='text-gray-400 font-medium ml-1 text-[10px] lg:text-[12px]'>
                      ({book.rating})
                    </span>
                  </div>

                  <div className='flex items-center gap-3 border-t border-gray-100 pt-3 mb-3'>
                    <span className='text-pink-600 font-extrabold text-lg lg:text-2xl tracking-tight'>
                      ৳ {book.price}
                    </span>
                    <span className='text-gray-300 line-through text-[11px] lg:text-sm font-medium'>
                      ৳ {book.oldPrice}
                    </span>
                  </div>

                  {/* Mobile Add to Cart */}
                  <button className='w-full bg-pink-600 text-white py-2.5 rounded-xl text-xs font-bold lg:hidden active:scale-95 transition-all shadow-md shadow-pink-200'>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* 🔢 PAGINATION (Screenshot 7/8 Style) */}
          {totalPages > 1 && (
            <div className='mt-20 flex justify-center items-center gap-3'>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className='w-11 h-11 border border-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-900 hover:text-white disabled:opacity-20 transition-all shadow-sm bg-white'
                disabled={currentPage === 1}
              >
                <FaChevronLeft size={14} />
              </button>

              <div className='flex gap-2 bg-white p-2 rounded-[1.5rem] border border-gray-100 shadow-sm'>
                {[...Array(totalPages)].map((_, i) => {
                  const p = i + 1
                  if (
                    p === 1 ||
                    p === totalPages ||
                    (p >= currentPage - 1 && p <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(p)}
                        className={`w-10 h-10 rounded-xl text-sm font-black transition-all ${
                          currentPage === p
                            ? 'bg-pink-600 text-white shadow-lg shadow-pink-200'
                            : 'text-gray-400 hover:bg-pink-50'
                        }`}
                      >
                        {p}
                      </button>
                    )
                  }
                  if (p === currentPage - 2 || p === currentPage + 2)
                    return (
                      <span key={i} className='text-gray-300 self-end pb-2'>
                        ...
                      </span>
                    )
                  return null
                })}
              </div>

              <button
                onClick={() =>
                  setCurrentPage(prev => Math.min(prev + 1, totalPages))
                }
                className='w-11 h-11 border border-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-900 hover:text-white disabled:opacity-20 transition-all shadow-sm bg-white'
                disabled={currentPage === totalPages}
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          )}
        </main>
      </div>

      {/* 🌫️ MOBILE DRAWER OVERLAY */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[55] lg:hidden animate-fade-in'
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default BookStore
