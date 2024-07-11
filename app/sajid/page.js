import PricingForm from '@/components/common/PricingForm';
import TechForingDifference from '@/components/common/TFDifference';
import WhyTakeFranchise from '@/components/common/WhyTakeFranchaise';
import BlogSlider from '@/components/dynamicSections/BlogSlider/BlogSlider';
import HowWeApproach from '@/components/dynamicSections/HowWeApproach/HowWeApproach';
import { CommonCyberThreatsData, HowWeApprochData, TFDifferenceData } from '@/utils/mock/dummyData';
import React from 'react';

const SajidPage = () => {
    return (
        <div className='py-[120px] flex flex-col gap-[150px]'>

            <HowWeApproach color={"green"} col={1} hasArrow={true} reverse={true} data={HowWeApprochData} />

            <PricingForm />

            <TechForingDifference color={"green"} data={TFDifferenceData} />

            <HowWeApproach color={"secondary"} col={2} hasArrow={false} reverse={false} data={CommonCyberThreatsData} />

            <BlogSlider color='green' />

            <WhyTakeFranchise />
        </div>
    );
};

export default SajidPage;