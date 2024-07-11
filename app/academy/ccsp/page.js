import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png';
import { coursesData } from "@/utils/mock/dummyData";
import { Course, ScheduleCall } from "@/components/common";
import { ccspCourseBenfits } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import { FaChevronRight } from "react-icons/fa";
import OpportunityExpertSection from "@/components/dynamicSections/OpportunityExpertSection/OpportunityExpertSection";
import ExpertInstructors from "@/components/dynamicSections/ExpertInstructors/ExpertInstructors";
import CourseDetailSection from "@/components/dynamicSections/CourseDetailSection/CourseDetailSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { OpportunityExportData } from "@/utils/mock/OpportunityExpertData/OpportunityExpertData";
import AcademyHero from "@/components/dynamicSections/HeroVariants/AcademyHero";
import { academyTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import { professional } from "@/utils/images";
import hero from "@/asset/academy/corporate/hero.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Be A Certified Ethical Hacker | Learn CCSP | TechForing Academy",
  description: "Become a certified cyber security professional with our hands-on course. Learn the latest tools and techniques & kick-off your cybersecurity career today!",
  keywords: "certified cyber security professional",
  canonical: "https://techforing.com/academy/ccsp/",
};

const page = () => {
  return (
    <div className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <AcademyHero
        title={<h2 className='text-3xl lg:text-[48px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'>Train With Us <br className="hidden lg:inline-block" /> To Become A <span className='text-secondary'>Certified</span> <br className="hidden lg:inline-block" /> Cybersecurity Professional</h2>}
        btnText={"Get Started"}
        textColorVariant={'secondary'}
        bgImage={hero?.src}
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondary'
      />
      <OpportunityExpertSection
        title={"Opportunity For Cybersecurity Experts"}
        description={"Lorem ipsum dolor sit amet consectetur. Tellus tortor eu morbi sed suscipit enim suscipit sit ullamcorper. Lorem ipsum dolor sit consectetu Tellus tortor "}
        variant='secondary'
        renderData={OpportunityExportData}
      />
      <ExpertInstructors
        img={professional.industryExpert}
        title={"Our Instructors Are Industry Expert"}
        paraOne={"Our instructors are cybersecurity experts who earned their reputation globally by serving individuals and businesses with Ethical Hacking, Data Protection, and Privacy Services. Having worked with different cybersecurity projects for Government agencies and industry-leading private companies, they have established themselves as some of the finest in this business. Our security specialists hold industry top security certifications like C|EH, CHFI, CISA, CISSP, and Security+."}
        paraTwo={"They call themselves ‘Ethical hackers’ who want to share their long-learned lesson among cybersecurity enthusiasts. As a company, we use their advanced knowledge of computer systems to find vulnerabilities in the most renowned security systems around. Under their guidance, you will be able to sharpen your cybersecurity skillset."}
        variant='red'
      />
      <Course renderedData={coursesData} />
      <CourseDetailSection
        title={"Course Details"}
        desc={"This eight-week course consists of instructional content and expert-led lab classes, which will be a massive boost to becoming certified cybersecurity professional. All you need is a positive attitude and a desire to learn. No prior knowledge is required. Download the course curriculum to unravel the course content."}
        btnTxt={"Download Curriculum"}
        btnUrl={"/pdf/CCSP_Course_Outline.pdf"}
        variant='secondary'
      />
      <WhyChooseSection
        headline={"Benefits Of This Course"}
        responsiveImgURL={professional.courseBenefits}
        renderedData={ccspCourseBenfits}
        variant="secondary"
      />
      <TestimonialSection data={academyTestimonialData} variant="secondary" />
      <ScheduleCall
        title="Join The Elite Panel Of CCSP Experts"
        desc="Do you want to build your career as a certified ethical hacker?"
        btns={[
          { id: 1, link: "/get_start/", text: "Enroll Now", variant: 'contained', btnColor: "secondary", icon: <FaChevronRight /> },
        ]}
        variant="secondary"
      />
      <BlogSlider />
    </div>
  )
}

export default page