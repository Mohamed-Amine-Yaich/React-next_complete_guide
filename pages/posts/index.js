import React from 'react'
import AllPosts from '../../components/posts/all-posts'
const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
];


function PostsPage
() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}

export default PostsPage

