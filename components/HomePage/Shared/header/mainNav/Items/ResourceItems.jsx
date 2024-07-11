import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import readMoreSVG from '@/public/Images/read-more/read-more-articles.svg'
import { extractDomain } from '@/utils/helper/globalFunctions';

const ResourceItems = () => {
    const baseURL = "https://cmsadmin.techforing.com/api/v1";
    const [categories, setCategories] = useState([]);
    const [siteInfo, setSiteInfo] = useState([]);
    const domainName = "https://www.techforing.com";
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
  
    useEffect(() => {
      fetchCategories();
    }, [matchedSite]);

    return (
        <div className='p-5 w-full flex items-start justify-center'>
            <div className='w-7/12 grid grid-cols-2 gap-2'>
                {categories?.map((item, index) => (
                    <div className='py-1 px-2 hover:bg-lightWhite' key={index}>
                        <Link href={`/resources/${item?.url}`} className='text-primary'>
                            <span className='inline-block hover:translate-x-5 transition-transform'>{item?.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='w-5/12 bg-lightWhite rounded-lg p-3 ml-3'>
                <div className='bg-white rounded-lg p-1 shadow-lg flex items-center justify-center gap-5'>
                    <Image src={readMoreSVG} alt={"Resources"} height={80} width={200} className='rounded-lg' />
                    <div className='w-[244px] h-fit'>
                        <h4 className='text-[20px] font-semibold'>Read Our Latest Blog, Articles, Case Studies, Podcasts and More...</h4>
                        <div className='flex items-center justify-between pt-1'>
                            <Link className='flex items-center gap-3 text-lg text-secondary' href={`/resources`} target='_blank'>
                                <span>Explore</span>
                                <GoArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ResourceItems;