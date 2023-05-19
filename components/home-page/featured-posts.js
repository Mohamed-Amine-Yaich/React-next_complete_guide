import React from 'react'
import PostGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'

function FeaturedPosts(porps) {
 const {posts} = porps

  return (
    <section className={classes.latest}>
     <h2>Featured Posts</h2>
     <PostGrid posts={posts} />
    </section>
   
  )
}

export default FeaturedPosts
