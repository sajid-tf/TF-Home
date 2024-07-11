"use client"
import HeroImg from '@/assets/resources/hero-img.png';
import { IoIosSearch } from "react-icons/io";
import TabsContainer from '@/components/dynamicSections/BlogPostContainer/AllPostsTab';
import HeroImgSliderArea from '@/components/common/Resources/HeroImgSliderArea';
import EbookSection from '@/components/dynamicSections/EbookSection/EbookSection';
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png';
import { EbookData } from '@/utils/mock/EbookData/EbookData';
import { formatBlogString } from '@/utils/helper/formatBlogString';
import { useEffect } from 'react';

const BlogCategoryPage = async ({ params }) => {

    useEffect(() => {
        // Scroll to TabsContainer section when category changes
        const tabsContainerSection = document.getElementById('tabs-container-section');
        if (tabsContainerSection) {
            tabsContainerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, [params?.category]);

    return (
        <div className='md:mb-24 mb-10'>
            {/* Resources Hero Image Section */}
            <section className="mb-[90px] relative flex justify-start  items-center" style={{
                backgroundImage: `url(${HeroImg.src})`,
                backgroundSize: 'cover',
                height: "600px",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backdropFilter: 'blur(6px)',
                zIndex: 1
            }}>
                <div className="w-full md:w-[720px] flex flex-col justify-center text-white  font-bold px-4 md:ms-[100px] lg:ms-[340px]">
                    <h1 className="text-[32px] sm:text-[40px] uppercase md:text-[55px] lg:text-[75px]">Read our articles</h1>
                    <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px]">Stay ahead of the game with the latest insights, strategies, and real-life case studies from industry experts and thought leaders.</p>
                    <HeroImgSliderArea />
                </div>
            </section>
            <EbookSection
                variant='secondary'
                bg={bgEbook?.src}
                renderedData={EbookData}
            />

            {/* Learn About Search Area */}
            <section className="w-[360px] lg:w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-[16px] md:gap-[50px] px-10 pt-24 mx-auto" >
                <div className='w-[360px]'>
                    <h3 className="text-2xl md:text-4xl font-bold text-center text-lightBGText">What Would You Like To Learn About?</h3>
                </div>
                <div className="relative w-full px-4 md:px-1 md:w-[60%]">
                    <input type="text" placeholder="search here" className="bg-secondaryLightBG px-5 py-4 rounded-[16px] border-none w-full" />
                    <button className="absolute right-[30px] md:right-[20px] top-[30%]"> <IoIosSearch className="text-2xl" /> </button>
                </div>
            </section>

            {/* All Posts Tab Section */}
            <section id='tabs-container-section' className="py-[95px]">
                <TabsContainer category={formatBlogString(params?.category)} />
            </section>
        </div>
    );
};

export default BlogCategoryPage;
