import React from "react";
import Image from 'next/image'
import Link from "next/link";
import classes from './post-item.module.css'

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",//january instaed of 1
    year: "numeric",
  });
  //extracting a path for the post image
  const imagePath = `/images/posts/${slug}/${image}`
  console.log(imagePath)
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
       <div className={classes.image}><Image src={imagePath} alt={title} width={300} height={200} layout='responsive' /></div> 
        <section  className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </section>
      </Link>
    </li>
  );
}

export default PostItem;
