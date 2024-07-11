"use client";
import React from 'react'
import AssessmentServiceSection from '@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection'
import WeServeSection from '@/components/dynamicSections/WeServeSection/WeServeSection'
import { weServeCardData } from '@/utils/mock/WeServeSectionData/weServeCardData'
import { Blogcard, Button, Course, Opportunity, ScheduleCall, SecureOrganization, Services, StatisTics, SubscribeForm } from '@/components/common'
import { IoIosRefresh } from 'react-icons/io'
import { globalImages } from '@/utils/images/globaIImages';
import AssessmentCardSection from '@/components/dynamicSections/AssessmentCardSection/AssessmentCardSection';
import { AssessmentCardData } from '@/utils/mock/AssessmentCardData/AssessmentCardData';
import { ServicesCardData } from '@/utils/mock/Services/Services';
import WhatWeAccess from '@/components/dynamicSections/WhatWeAccess/WhatWeAccess';
import { WhatWeAccessData } from '@/utils/mock/WhatWeAccessData/WhatWeAccessData';
import WhyChooseSection from '@/components/dynamicSections/WhyChooseSection/WhyChooseSection';
import { WhyChooseFAQData } from '@/utils/mock/WhyChooseFAQData/WhyChooseFAQData';
import { FaChevronRight } from 'react-icons/fa';
import AssessmentProcess from '@/components/dynamicSections/AssessmentProcess/AssessmentProcess';
import EbookSection from '@/components/dynamicSections/EbookSection/EbookSection';
import TestimonialSection from '@/components/dynamicSections/TestimonialSection/TestimonialSection';
import { coursesData } from '@/utils/mock/dummyData';
import BusinessWithUsSection from '@/components/dynamicSections/BusinessWithUsSection/BusinessWithUsSection';
import { EbookData } from '@/utils/mock/EbookData/EbookData';
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book.png';
import CSIImg from '@/assets/assessments/CSI.png';
import Link from 'next/link';
import { bcsTestimonialData } from '@/utils/mock/TestimonialsData/TestimonialsData';

const page = () => {
  return (
    <main className="flex min-h-dvh flex-col gap-4 bg-gray-100">
      <div className="rounded-lg bg-strongWhite p-4 shadow-md m-4">
        <h2 className="mb-2">Buttons</h2>
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="outlined" color="redThree" size='medium'>
            TechForing Test
          </Button>
          <Button variant="outlined" size='medium' startIcon={<IoIosRefresh />} endIcon={<IoIosRefresh />}>
            TechForing
          </Button>
          <Button variant="contained" size='medium'>
            <IoIosRefresh />
          </Button>
          <Button variant="contained" size='medium' startIcon={<IoIosRefresh />}>
            TechForing
          </Button>
          <Button variant="contained" size='medium' endIcon={<IoIosRefresh />}>
            TechForing
          </Button>
        </div>
      </div>

      <div className='m-4'>
        <h1 className="mb-2">Blog card</h1>
        <div className='grid md:grid-cols-3 gap-2'>
          <Blogcard img={globalImages?.resourceImg} alt="Image" category="CEO As Author" title="Case Study On Penetration Testing Of A Authentic"
            desc="This case study on Penetration Testing is about one of our clients who had an auth..."
            link="" date="January 23, 2023" color="secondary" />
          <Blogcard img={globalImages?.resourceImg} alt="" category="CEO As Author" title="Case Study On Penetration Testing Of A Authentic" desc="This case study on Penetration Testing is about one of our clients who had an auth..."
            link="" date="January 23, 2023" color="primary" />
          <Blogcard img={globalImages?.resourceImg} alt="" category="CEO As Author" title="Case Study On Penetration Testing Of A Authentic" desc="This case study on Penetration Testing is about one of our clients who had an auth..."
            link="" date="January 23, 2023" color="redThree" />
        </div>
      </div>

      <WeServeSection
        subTitle={"Which"}
        title={"Industries We Serve"}
        cardItem={weServeCardData}
        variant='redThree'
      />
      <AssessmentServiceSection
        title={"HOW RISK <br /> ASSESSMENT SERVICES <br /> BENEFIT YOUR BUSINESS"}
        paragraph={"Regular risk assessments will give you a clear picture of your security status and how well-prepared you are against potential risks. Risk assessments can also help your organization upgrade its information security. Otherwise, continued use of a compromised system can lead to security breaches, damaging the reputation of your company."}
        image={globalImages?.riskAssessmentImg}
        alt={"Risk Assessment Services"}
        position='bottom'
        variant="purple"
      />
      <AssessmentServiceSection
        title={"Determine Your <br/> Security Status With Our <br/> Risk Assessment Services"}
        paragraph={"Do you want to know how well-prepared your organization is against potential risks? Our risk assessment services will give you a clear picture of your security status and help you upgrade your information security. Invest in our risk assessment services today and safeguard your business from potential security breaches."}
        variant='secondary'
        image={globalImages?.ceoImg}
        alt={"Risk Assessment Services"}
        position='center'
      />
      <AssessmentServiceSection
        title={"Determine Your <br/> Security Status With Our <br/> Risk Assessment Services"}
        paragraph={"Do you want to know how well-prepared your organization is against potential risks? Our risk assessment services will give you a clear picture of your security status and help you upgrade your information security. Invest in our risk assessment services today and safeguard your business from potential security breaches."}
        variant='secondary'
        image={globalImages?.ceoImg}
        alt={"Risk Assessment Services"}
        position='center'
        reverse={true}
      />
      <AssessmentServiceSection
        title={""}
        paragraph={""}
        variant='secondary'
        image={globalImages?.ceoImg}
        alt={"Risk Assessment Services"}
        position='center'
        reverse={false}
        subtitle={"Subtitle"}
        isBoardImg={true}
        boardImg={CSIImg}
        boardTile={"CSI Certification"}
        boardSubtitle={"Certified Information Security Instructor"}
      />
      <AssessmentCardSection
        cardData={AssessmentCardData}
      />
      <WhatWeAccess
        headline={"What We Access"}
        renderedData={WhatWeAccessData}
      />
      <div className='py-32'>
        <WhyChooseSection
          headline={"Why Choose TechForing ?"}
          imgURL={globalImages?.whyChooseSideImg}
          renderedData={WhyChooseFAQData}
        />
      </div>
      <AssessmentProcess />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
      />
      <TestimonialSection data={bcsTestimonialData} />
      <BusinessWithUsSection />
      <SubscribeForm variant="secondary" />
      <Services servicesData={ServicesCardData} color='redThree' />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='redThree' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started
            </Link>
          </Button>
        }
        img={globalImages.secureOrganizationImg}
        className={{ borderColor: 'border-redThree' }}
        title="IS YOUR ORGANIZATION COMPLETELY SECURE?"
        subTitle="Schedule a meeting with us and our cyber security and compliance experts will get in touch with you. We will assess your situation and provide you with the best course of action."
      />
      <h4 className='text-2xl text-secondary mb-4'>Schedule Call </h4>
      <ScheduleCall
        title="Join The Elite Panel Of CCSP Experts"
        desc="Do you want to build your career as a certified ethical hacker?"
        btns={[
          { id: 1, link: "#", text: "Enroll Now", variant: 'contained', btnColor: "secondary", icon: <FaChevronRight /> },
        ]}
      />
      <ScheduleCall
        title="Get an Enterprise-Grade Cybersecurity For Your Business"
        subTitle="Book A Free Cybersecurity Consultation Now"
        desc="It’s high time your business needs to back up valuable data of its clients and employees to avoid cyber-attacks. Our enterprise cybersecurity will provide you with a customized and affordable action plan that will safeguard your digital assets and ensure their availability."
        btns={[
          { id: 1, link: "#", text: "Get Started", variant: 'contained', btnColor: "secondary", icon: <FaChevronRight /> },
          { id: 2, link: "ScheduleCall", text: "Schedule a Call", variant: 'outlined', btnColor: "secondary", icon: <FaChevronRight /> }
        ]}
      />
      <div className='m-4'>
        <h1 className="mb-2 text-center">Opportunity</h1>
        <Opportunity />
      </div>
      <div className='m-4'>
        <h1 className="mb-2 text-center">Course</h1>
        <Course renderedData={coursesData} />
      </div>
      <div className='m-4'>
        <h1 className="mb-2 text-center">StatisTics</h1>
        <StatisTics />
      </div>
    </main>
  )
}

export default page