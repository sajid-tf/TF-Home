"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GoArrowRight } from "react-icons/go";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import { extractDomain } from '@/utils/helper/globalFunctions';

const options = {
    type: 'slide',
    perPage: 4,
    gap: '24px',
    autoplay: true,
    interval: 6000,
    arrows: true,
    classes: {
        prev: 'splide__arrow--prev resources_blog-prev !hidden',
        next: 'splide__arrow--next resources_blog-next !hidden',
    },
    breakpoints: {
        768: {
            perPage: 2,
        },
        640: {
            perPage: 1,
        }
    }
};

//Base URL
const baseURL = "https://cmsadmin.techforing.com/api/v1";

const OurResources = () => {
    const [activeCategory, setActiveCategory] = useState({
        name: 'Articles',
        url: 'articles'
    });
    const [blogs, setBlogs] = useState([]);
    const [siteInfo, setSiteInfo] = useState([]);
    const domainName = "https://www.techforing.com";
    const [categories, setCategories] = useState([]);
    const [matchedSite, setMatchedSite] = useState(null);

    const fetchSiteName = async () => {
      const response = await fetch(`${baseURL}/blog/site/name/list/?page_size=10&page=1`);
      const data = await response.json();
      setSiteInfo(data?.data?.results);
    };

    const fetchCategories = async () => {
      if (matchedSite) {
        const response = await fetch(`${baseURL}/blog/post/for/all/landingPage/?site=${matchedSite}`);
        const data = await response.json();
        setCategories(data?.categories_url_mapping);
      }
    };
  
    useEffect(() => {
      fetchSiteName();
    }, []);
    
    useEffect(() => {
        if (siteInfo.length > 0) {
          const domainToMatch = extractDomain(domainName);
          const matched = siteInfo.find(site => extractDomain(site.site_url) === domainToMatch);
          if (matched) {
            setMatchedSite(matched.posted_site);
          }
        }
      }, [domainName, siteInfo]);

    const fetchData = async (category) => {
        const endPoint = `${baseURL}/blog/post/for/all/landingPage/?site=TechForing&category=${category}`;
        const response = await fetch(endPoint, { cache: 'no-store' });
        const data = await response.json();
        setBlogs(data.posts[category] || []);
    };

    useEffect(() => {
        fetchCategories();
        fetchData(activeCategory?.name);
    }, [matchedSite]);

    useEffect(() => {
        fetchData(activeCategory?.name);
    }, [activeCategory]);

    return (
        <div className='bg-white py-10 pb-16 md:pb-0 lg:py-24 md:-mt-24'>
            <div>
                <h2 className='text-2xl lg:text-5xl text-primary font-bold font-tertiary text-center'>Our <span className='text-secondary'>Resources</span></h2>
                <div className='flex flex-wrap items-center justify-center gap-2 md:gap-3 my-6'>
                    {categories?.map((item, index) => (
                        <div key={index}
                            className={`px-4 border rounded-full cursor-pointer bg-white ${activeCategory?.name === item?.name ? 'border-secondary' : 'border-lineColor'}`}
                            onClick={() => setActiveCategory(item)}>
                            <h4 className={`text-sm md:text-lg font-medium ${activeCategory?.name === item?.name ? 'text-secondary' : 'text-lightBlack'}`}>{item?.name}</h4>
                        </div>
                    ))}
                </div>
                <div className='container mt-12 mx-auto md:px-0 px-2.5'>
                    <Splide options={options} aria-label="Our Resources">
                        {blogs?.map((item, index) => (
                            <SplideSlide key={index}>
                                <div className='p-3 shadow-lg rounded-lg mb-5'>
                                    <div className='blogImg'>
                                        <Image src={item?.feature_image} alt={item?.title} height={157} width={300} className='w-full rounded-lg' />
                                    </div>
                                    <div className='blogContent py-4 flex flex-col gap-2.5'>
                                        <h5 className='text-sm uppercase w-fit px-2 rounded-full border border-lineColor text-lightBlack'>{activeCategory?.name || ""}</h5>
                                        <h4 className='text-xl font-bold leading-snug max-h-[90px]'>{item?.title?.length > 28 ? item?.title?.slice(0, 28) + '...' : item?.title}</h4>
                                        <p className='text-lightBlack text-sm text-justify'>{item?.short_description?.length > 70 ? item?.short_description?.slice(0, 70) + '...' : item?.short_description}</p>
                                    </div>
                                    <div className='flex justify-between items-center pb-1'>
                                        <p className='text-lightBlack text-sm'>
                                            {item?.created_at ? new Date(item?.created_at).toLocaleDateString() : new Date().toLocaleDateString()}</p>
                                        <Link className='flex items-center gap-2 text-secondary cursor-pointer' href={`/resources/${activeCategory?.url}/${item?.post_url}`} target='_blank'>
                                            <h5 className='text-md'>Read more </h5>
                                            <GoArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </div >
    );
};

export default OurResources;