import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}><Image src='/images/site/me.jpg' alt='an image showing Amine' width={300} height={300} /> </div>
      <h1  className={classes.h1} >Hi , I'm Amine</h1>
      <p /* className={classes.hero} */>
        I'm a Full Stack Developer , I'm passionate about technology and programming languages 
        spacially Javascript 
      </p>
      
    </section>
  )
}

export default Hero
