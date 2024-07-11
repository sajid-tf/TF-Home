import React from 'react';
import { AssessmentCard } from '@/components/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const customSlideStyle = {
    height: '532px !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
}

const AssessmentCardSection = ({ cardData }) => {
    return (
        <div>
            <div className='w-[1200px] h-[532px] mx-auto lg:flex items-center justify-center my-16 hidden'>
                <Swiper spaceBetween={15} slidesPerView={3}>
                    {cardData?.map((item, index) => (
                        <SwiperSlide style={customSlideStyle} key={index}>
                            <AssessmentCard
                                title={item?.title}
                                desc={item?.desc}
                                btnText={item?.btnText}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='flex flex-col items-center justify-center gap-24 mt-20 lg:hidden'>
                {cardData?.map((item, index) => (
                    <AssessmentCard
                        key={index}
                        title={item?.title}
                        desc={item?.desc}
                        btnText={item?.btnText}
                    />
                ))}
            </div>
        </div>
    );
};

export default AssessmentCardSection;