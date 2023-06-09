import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs3",
  title: "Getting Started With Nextjs",
  image: "getting-started-nextjs.png",
  excerpt:
    "Next js is the React freamework for production - it makes building fullstack React apps and sites breeze and ships with built-in SSR",
  date: "2022-02-10",
  content: "# the is the first post content from markdown ",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <section className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </section>
  );
}

export default PostContent;
