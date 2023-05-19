import React, { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_POSTS=[
  {  slug:'getting-started-with-nextjs1',title:'Getting Started With Nextjs', image:'getting-started-nextjs.png', excerpt:'Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR', date:'2022-02-10' }, 
  {  slug:'getting-started-with-nextjs2',title:'Getting Started With Nextjs', image:'getting-started-nextjs.png', excerpt:'Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR', date:'2022-02-10' }, 
  {  slug:'getting-started-with-nextjs3',title:'Getting Started With Nextjs', image:'getting-started-nextjs.png', excerpt:'Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR', date:'2022-02-10' }, 
  {  slug:'getting-started-with-nextjs4',title:'Getting Started With Nextjs', image:'getting-started-nextjs.png', excerpt:'Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR', date:'2022-02-10' }, 
]


//using less styles and less html tags using mostly  component 
const HomePage = () => {
  return (
    <Fragment>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default HomePage
// 1) Hero => prsentation of yourself
// 2) Featured => Posts 