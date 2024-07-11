"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";
import { useEffect, useRef, useState, } from "react";
import TableOfContents from "@/components/dynamicSections/BlogPostContainer/TableOfContents";
import PostContents from "@/components/dynamicSections/BlogPostContainer/PostBodyContents";
import HeroSection from "@/components/dynamicSections/BlogPostContainer/PostsHeroSection";
import '@/style/blog.css';

const SinglePostView = ({ viewBlogPost }) => {
  const baseURL = "https://cmsadmin.techforing.com/api/v1";
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const countPostViews = async () => {
    const url = `${baseURL}/blog/post/add/viewer/${viewBlogPost?.post_url}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log('Error:', error); // Log any errors
    }
  };
  useEffect(() => {
    countPostViews();
  }, []);

  const handleContentClick = (title, index) => {
    const flatHeaders = viewBlogPost?.post_content_with_media?.flatMap((post, postIndex) =>
      post.header_content?.map((content, contentIndex) => ({
        title: content.header,
        id: `header-${postIndex}-${contentIndex}`
      }))
    );
    const matchedHeader = flatHeaders?.find(header => 
      header.title.toLowerCase().trim() === title.toLowerCase().trim()
    );
    if (matchedHeader) {
      const headerElement = document.getElementById(matchedHeader.id);
      if (headerElement) {
        const offsetTop = headerElement.offsetTop - 138; // 138px offset
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      } else {
        console.log("Header element not found");
      }
    } else {
      console.log("No matching header found in the post content");
    }
  };

  const handleScroll = () => {
    const flatHeaders = viewBlogPost?.post_content_with_media?.flatMap((post, postIndex) =>
      post.header_content?.map((content, contentIndex) => ({
        title: content.header,
        id: `header-${postIndex}-${contentIndex}`
      }))
    );
  
    const scrollPosition = window.scrollY + 138; // Add offset
    const lastCrossed = flatHeaders.reduce((acc, header, index) => {
      const headerElement = document.getElementById(header.id);
      if (headerElement && headerElement.offsetTop <= scrollPosition) {
        return index;
      }
      return acc;
    }, -1);
  
    setActiveIndex(lastCrossed);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewBlogPost]);

  console.log({viewBlogPost});
  
  return (
    <main>
      <ProgressBar />
      {/* Feature Image Section */}
      <HeroSection viewBlogPost={viewBlogPost} />
      <section className="flex flex-col md:flex-row max-w-[1080px] mx-auto items-start md:mb-24 mb-10 pt-10">
        {/* Table of contents */}
        <TableOfContents
          className={"pt-4"}
          tableOfContents={viewBlogPost?.table_of_contents}
          postContentWithMedia={viewBlogPost?.post_content_with_media}
          handleContentClick={handleContentClick}
          activeIndex={activeIndex}
        />
        {/* Post Body contents */}
        <PostContents
          className={'pt-10'}
          viewBlogPost={viewBlogPost}
          contentRef={contentRef}
        />
      </section>
    </main>
  );
};

export default SinglePostView;
