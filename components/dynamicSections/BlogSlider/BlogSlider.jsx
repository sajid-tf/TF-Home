
"use client"
import { Blogcard } from '@/components/common';
import cn from '@/utils/helper/cn';
import { ArticlesIcon, CaseStudiesIcon, CeoAuthorIcon, CompanyNewsIcon, EventsIcon, IndustryIcon, PodcastIcon, ReportsIcon } from '@/utils/svg/SVGImg';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Capitalize, extractDomain, formatDateString, limitString } from '@/utils/helper/globalFunctions';
const BlogSlider = ({ color = 'secondary' }) => {

  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('Articles');
  const [blogs, setBlogs] = useState(null);

  const baseURL = "https://cmsadmin.techforing.com/api/v1";
  const domainName = "https://www.techforing.com";
  const [siteInfo, setSiteInfo] = useState([]);
  const [matchedSite, setMatchedSite] = useState(null);

  const fetchSiteName = async () => {
    const response = await fetch(`${baseURL}/blog/site/name/list/?page_size=10&page=1`);
    const data = await response.json();
    setSiteInfo(data?.data?.results);
  };

  const fetchData = async (params) => {
    const endPoint = `${baseURL}/blog/post/for/all/landingPage/?site=${matchedSite}&category=${params}`;
    const response = await fetch(endPoint, { cache: 'no-store' });
    const data = await response.json();

    // Map over the all_categories array to create tabs
    const newTabs = data?.all_categories?.map((category, index) => ({
      id: index + 1,
      title: category,
      value: category,
    }));
    setTabs(newTabs);
    setBlogs(data?.posts);
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
    fetchData(activeTab);
  }, [matchedSite, activeTab]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    // fetchData(value);
  }
  const bulletColor = {
    primary: "#182F59",
    secondary: "#5BBC2E",
    redThree: "#FF2B38",
    yellow: "#FFC922",
    purple: "#7A6AEC",
    sky: "#0978DF",
    green: "#20963A",
    yellowThree: "#B59947",
    secondaryTwo: "#1BD0A5",
    skyFour: "#11ADF7",
    inactive: "#666666"
  }
  return (
    <section className='md:max-w-[1200px] w-full mx-auto px-2'>
      <h3 className='text-lightBGText text-2xl md:text-4xl font-bold mb-12'>Check Out Our Recent Articles, Podcasts & Case Studies</h3>
      <div className="tabs flex flex-wrap gap-3 md:gap-5 mb-10">
        {tabs?.map(tab => {
          const lowercaseTitle = tab.title.toLowerCase();
          const isDefaultCategory = !["articles", "case studies", "podcasts", "events", "reports", "industry guides", "company news", "ceo as author"].includes(lowercaseTitle);
          return (
            <div key={tab.id} onClick={() => handleTabChange(tab.value)} className={cn("fit-content font-medium text-base text-lightBGText border border-borderLine rounded-full px-3 py-1 flex items-center gap-[10px] cursor-pointer transition-all duration-300 flex-wrap", {
              "hover:border-primary hover:text-primary": color === 'primary',
              "hover:border-secondary hover:text-secondary": color === 'secondary',
              "hover:border-redThree hover:text-redThree": color === 'redThree',
              "hover:border-yellowTwo hover:text-yellowTwo": color === 'yellow',
              "hover:border-purpleTwo hover:text-purpleTwo": color === 'purple',
              "hover:border-skyThree hover:text-skyThree": color === 'sky',
              "hover:border-green hover:text-green": color === 'green',
              "hover:border-yellowThree hover:text-yellowThree": color === 'yellowThree',
              "hover:border-secondaryTwo hover:text-secondaryTwo": color === 'secondaryTwo',
              "hover:border-green hover:text-green": color === 'green',
              "hover:border-skyFour hover:text-skyFour": color === 'skyFour',
              // active tab item
              "border-primary text-primary": activeTab === tab.value && color === 'primary',
              "border-secondary text-secondary": activeTab === tab.value && color === 'secondary',
              "border-redThree text-redThree": activeTab === tab.value && color === 'redThree',
              "border-yellowTwo text-yellowTwo": activeTab === tab.value && color === 'yellow',
              "border-purpleTwo text-purpleTwo": activeTab === tab.value && color === 'purple',
              "border-skyThree text-skyThree": activeTab === tab.value && color === 'sky',
              "border-green text-green": activeTab === tab.value && color === 'green',
              "border-yellowThree text-yellowThree": activeTab === tab.value && color === 'yellowThree',
              "border-secondaryTwo text-secondaryTwo": activeTab === tab.value && color === 'secondaryTwo',
              "border-green text-green": activeTab === tab.value && color === 'green',
              "border-skyFour text-skyFour": activeTab === tab.value && color === 'skyFour',
            })}>
              {/* Render corresponding SVG icon if matched */}
              {((!isDefaultCategory && (
                (lowercaseTitle === "articles" && <ArticlesIcon className="text-inherit" />) ||
                (lowercaseTitle === "case studies" && <CaseStudiesIcon className="text-inherit" />) ||
                (lowercaseTitle === "podcasts" && <PodcastIcon className="text-inherit" />) ||
                (lowercaseTitle === "events" && <EventsIcon className="text-inherit" />) ||
                (lowercaseTitle === "reports" && <ReportsIcon className="text-inherit" />) ||
                (lowercaseTitle === "industry guides" && <IndustryIcon className="text-inherit" />) ||
                (lowercaseTitle === "company news" && <CompanyNewsIcon className="text-inherit" />) ||
                (lowercaseTitle === "ceo as author" && <CeoAuthorIcon className="text-inherit" />)
              )) || <ArticlesIcon className="text-inherit" />)} {/* Default to ArticlesIcon if no match is found */}
              {tab.title}
            </div>
          );
        })}
      </div>

      <Swiper
        modules={[Pagination, Keyboard, Autoplay]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          330: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        style={{
          "--swiper-pagination-color": bulletColor[color],
          "--swiper-pagination-bullet-inactive-color": bulletColor?.inactive,
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        {
          blogs?.[activeTab]?.map((blog, index) => (
            <SwiperSlide key={index} className="md:min-w-[384px] w-full mb-10">
              <Blogcard
                className={"max-w-[400px]"}
                img={blog?.feature_image || blog.image}
                alt={`${blog.title} image`}
                category={Capitalize(activeTab)}
                title={blog?.title}
                desc={limitString(blog?.short_description, 100)}
                link={blog?.url || `/resources/articles/${blog.post_url}`}
                target={blog?.url ? "_blank" : "_self"}
                date={formatDateString(blog?.created_at)}
                color={color}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default BlogSlider;