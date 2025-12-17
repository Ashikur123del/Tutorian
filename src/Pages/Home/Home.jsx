import React from 'react'
import Hero from '../../Components/HomeCompo/Hero'
import Card from '../../Components/Card/Card'
import ExamCart from '../../Components/Card/ExamCart'
import CourseCard  from '../../Components/Card/CourseCard'
import ExamBooks from '../../Components/ExamBooks'
import InstructionalVideo from '../../Components/InstructionalVideo'
import LiveCourse from '../../Components/LiveCourse'
import ExamCorner from '../../Components/ExamCorner'

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <ExamCart />
      <CourseCard />
      <ExamBooks />
      <InstructionalVideo />
      <LiveCourse/>
      <ExamCorner />
    </div>
  )
}

export default Home