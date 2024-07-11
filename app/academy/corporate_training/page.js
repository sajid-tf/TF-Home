import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import OpportunityExpertSection from "@/components/dynamicSections/OpportunityExpertSection/OpportunityExpertSection";
import { humanErrorData } from "@/utils/mock/OpportunityExpertData/OpportunityExpertData";
import CourseDetailSection from "@/components/dynamicSections/CourseDetailSection/CourseDetailSection";
import ExpertInstructors from "@/components/dynamicSections/ExpertInstructors/ExpertInstructors";
import WeManageCard from "@/components/common/WeManageCard/WeManageCard";
import { courseMode } from "@/utils/mock/WeManageCardData/WeManageCardData";
import Organization from "@/components/HomePage/services/trustedOrganization/Organization";
import { organizationData } from "@/utils/mock/dummyData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import { ScheduleCall, } from "@/components/common";
import { FaChevronRight } from "react-icons/fa";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import AcademyHero from "@/components/dynamicSections/HeroVariants/AcademyHero";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import hero from "@/asset/academy/corporate/hero.webp";
import { corporate } from "@/utils/images";
import { academyTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
    title: "Corporate Cyber Security Training | TechForing Academy",
    description: "Elevate your team's cybersecurity skills with TechForing's Corporate Cyber Security Training. Enhance workplace protection and resilience. Enroll now!",
    keywords: "corporate cyber security training",
    canonical: "https://techforing.com/academy/corporate_training/",
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
                title={<h2 className='text-3xl lg:text-[48px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'> CORPORATE TRAINING FOR <br className="hidden lg:inline-block" /> <span className='text-secondary'>ENTERPRISE</span> YOUR  SECURITY </h2>}
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
                title={"How Fatal Human Error Can Be For Cybersecurity"}
                isDesc={false}
                variant='secondary'
                isNumberTitle={true}
                renderData={humanErrorData}
            />
            <StrategicPartner
                imgLeftTextRightAlign={true}
                title={"Importance Of Corporate Training"}
                image={corporate.corporateTraing}
                alt={"Importance Of Corporate Training"}
                bulletPoint={false}
                checkBox={false}
                bulletWithDesc={false}
                onlyDesc={false}
                dropDownExpandable={true}
                renderedData={[
                    {
                        id: 1,
                        title: 'Understanding Today’s Digital Landscape',
                        desc: 'A business needs to stay up to date with the best use and understanding of the digital tools and assets (websites, social networks, mobile devices, and cloud platforms) to avoid lagging the competitor.'
                    },
                    {
                        id: 2,
                        title: 'IoT Developments',
                        desc: 'Businesses need to react quickly to IoT devices’ growing needs, as customer expectations are always changing.'
                    },
                    {
                        id: 3,
                        title: 'The Rise of Ransomware',
                        desc: 'Business executives need proper training to spot phishing, social engineering, or unsecured websites to survive the dramatic rise of ransomware attacks.'
                    },
                    {
                        id: 4,
                        title: 'Data Breaches Are Getting Worse',
                        desc: 'Corporate Employees must be well-versed in data protection, including keeping digital tools updated, data encryption, etc.'
                    },
                    {
                        id: 5,
                        title: 'Automated Data Manipulation',
                        desc: 'This rising trend in cyber attacks mostly refers to data theft or data deletion. It potentially can turn into a long-term earning opportunity for the attackers that businesses need to be wary of.'
                    },
                ]}
                variant='secondary'
                topLightBG={false}
                bottomLightBG={true}
                leftLightBG={false}
                rightLightBG={false}
                topDeepBG={false}
                bottomDeepBG={false}
                leftDeepBG={false}
                rightDeepBG={true}
            />
            <CourseDetailSection
                title={"Course Details"}
                desc={"This eight-week course consists of instructional content and expert-led lab classes, which will be a massive boost to becoming certified cybersecurity professional. All you need is a positive attitude and a desire to learn. No prior knowledge is required. Download the course curriculum to unravel the course content."}
                btnTxt={"Download Curriculum"}
                btnUrl="/pdf/Corporate_Training_Program_by_Techforing.pdf"
                variant='secondary'
            />
            <ExpertInstructors
                img={corporate.ourExpert}
                title={"Our Instructors Are Industry Expert"}
                paraOne={"Our instructors are cybersecurity experts who earned their reputation globally by serving individuals and businesses with Ethical Hacking, Data Protection, and Privacy Services. Having worked with different cybersecurity projects for Government agencies and industry-leading private companies, they have established themselves as some of the finest in this business. Our security specialists hold industry top security certifications like C|EH, CHFI, CISA, CISSP, and Security+."}
                paraTwo={"They call themselves ‘Ethical hackers’ who want to share their long-learned lesson among cybersecurity enthusiasts. As a company, we use their advanced knowledge of computer systems to find vulnerabilities in the most renowned security systems around. Under their guidance, you will be able to sharpen your cybersecurity skillset."}
                variant='red'
            />
            <WeManageCard
                title={"Course Mode"}
                renderedData={courseMode}
                variant='secondary'
                numberOfCard={3}
            />
            <Organization
                title={<h4 className={`text-lightBGText text-lg lg:text-4xl font-bold text-center py-10`}>Trusted By WORLD’S <span className='text-sky'>Top</span> Organizations</h4>}
                isTitle={false}
                renderedData={organizationData}
                BGColor={'light'}
            />
            <TestimonialSection data={academyTestimonialData} variant="secondary" />
            <ScheduleCall
                title="interested To Get Effective Cybersecurity training For Employees"
                desc="We know how to make the best use of your employee's time"
                btns={[
                    { id: 1, link: "/get_start/", text: "Book Us", variant: 'contained', btnColor: "secondary", icon: <FaChevronRight /> },
                ]}
                variant="secondary"
            />
            <BlogSlider color='secondary' />
        </div>
    )
}

export default page