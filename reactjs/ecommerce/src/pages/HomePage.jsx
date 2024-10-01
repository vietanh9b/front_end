import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import AllViewJobs from '../components/AllViewJobs'
const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <JobListings/>
    <AllViewJobs/>
    </>
  )
}

export default HomePage