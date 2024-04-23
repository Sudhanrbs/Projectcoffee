import React from 'react'
import NavDemo from './NavDemo'
import './NavDemo.css'
import { Footer } from './Footer'

export const About = () => {
  return (
    <>
    <div><NavDemo/></div>
    <br></br>
    <div className='about'>
    <h1>Our Heritage</h1>
    <br></br>
    <h3>
    Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better. It was true when the first Starbucks opened in 1971, and it’s just as true today.
    </h3>
    <br></br>
    <p>
     
    Back then, the company was a single store in Seattle’s historic Pike Place Market. From just a narrow storefront, Starbucks offered some of the world’s finest fresh-roasted whole bean coffees. The name, inspired by Moby Dick, evoked the romance of the high seas and the seafaring tradition of the early coffee traders.

    In 1981, Howard Schultz (Starbucks chairman, president and chief executive officer) first walked into a Starbucks store. From his first cup of Sumatra, Howard was drawn into Starbucks and joined a year later.</p>
  <br></br>
   <p>

    A year later, in 1983, Howard travelled to Italy and became captivated by Italian coffee bars and the romance of the coffee experience. He had a vision to bring the Italian coffeehouse tradition back to the United States. A place for conversation and a sense of community. A third place between work and home. He left Starbucks for a short period of time to start his own Il Giornale coffeehouses and returned in August 1987 to purchase Starbucks with the help of local investors.

      From the beginning, Starbucks set out to be a different kind of company. One that not only celebrated coffee and the rich tradition, but that also brought a feeling of connection.

    Our mission to inspire and nurture the human spirit – one person, one cup and one neighbourhood at a time.
     
    </p>
    </div>
    <Footer/>
    </>
  )
}
