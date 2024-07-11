import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import OpportunityExpertSection from "@/components/dynamicSections/OpportunityExpertSection/OpportunityExpertSection";
import { cyberCrimesReport } from "@/utils/mock/OpportunityExpertData/OpportunityExpertData";
import CourseDetailSection from "@/components/dynamicSections/CourseDetailSection/CourseDetailSection";
import ExpertInstructors from "@/components/dynamicSections/ExpertInstructors/ExpertInstructors";
import WeManageCard from "@/components/common/WeManageCard/WeManageCard";
import { courseMode } from "@/utils/mock/WeManageCardData/WeManageCardData";
import Organization from "@/components/HomePage/services/trustedOrganization/Organization";
import { organizationData } from "@/utils/mock/dummyData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import { ScheduleCall } from "@/components/common";
import { FaChevronRight } from "react-icons/fa";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import AcademyHero from "@/components/dynamicSections/HeroVariants/AcademyHero";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import hero from "@/asset/academy/law-enforcement-agency/hero.webp";
import { lawEnforcement } from "@/utils/images";
import { academyTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
    title: "Law Enforcement Cybersecurity Training | TechForing Academy",
    description: "TechForing Law Enforcement Cybersecurity training offers detailed operational knowledge for effective cybersecurity investigations. Enroll now!",
    keywords: "law enforcement cybersecurity training",
    canonical: "https://techforing.com/academy/law_enforcement/",
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
                title={<h2 className='text-3xl lg:text-[48px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'> LAW ENFORCEMENT  <br className="hidden lg:inline-block" /> <span className='text-secondary'>CYBERSECURITY</span> TRAINING</h2>}
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
                renderData={cyberCrimesReport}
            />
            <StrategicPartner
                imgLeftTextRightAlign={true}
                title={"CYBER AWARNESS FOR LAW ENFORCEMENT"}
                image={lawEnforcement.cyberAwarness}
                alt={"CYBER AWARNESS FOR LAW ENFORCEMENT"}
                bulletPoint={false}
                checkBox={false}
                bulletWithDesc={false}
                onlyDesc={false}
                dropDownExpandable={true}
                renderedData={[
                    {
                        id: 1,
                        title: 'Incident Response & Crime Investigation',
                        desc: 'Before forensic investigation, we teach you to immediately contain the damage points in IT breach or security policy violation scenarios.'
                    },
                    {
                        id: 2,
                        title: 'Open Source Intelligence & Data Analysis',
                        desc: 'We provide the necessary tactics to extract info on any suspicious act or a person of interest through publicly available data.'
                    },
                    {
                        id: 3,
                        title: 'Hack the Hacker',
                        desc: 'We teach LEA to track emails without a Subpoena and a cybercriminal through skype; spoof emails without any software.'
                    },
                    {
                        id: 4,
                        title: 'Sextortion Surge during COVID-19',
                        desc: 'Learning about how international agreements fail to track booming sex trafficking industry and to investigate with the help of Facebook'
                    },
                    {
                        id: 5,
                        title: 'Americans lost $20 billion from phone spoofing in 2020',
                        desc: 'They will know about issuing a Subpoena to the spoofing entity and criminals’ strategies for untraceable calls, checking voicemails, etc.'
                    },
                    {
                        id: 6,
                        title: '251 Law Enforcement websites with Cop data got hacked',
                        desc: 'We train on monitoring websites, vulnerability assessment, detecting hidden URLs, extracting user data with and without tools.'
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
                btnUrl="/pdf/Cybersecurity_Training_for_Law_enforcement_agencies.pdf"
                variant='secondary'
            />
            <ExpertInstructors
                img={lawEnforcement?.ourTrainer}
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
                title="Get mentorship guidance From US"
                desc="We know how to make the best use of your employee's time"
                btns={[
                    { id: 1, link: "/get_start/", text: "Enroll Now", variant: 'contained', btnColor: "secondary", icon: <FaChevronRight /> },
                ]}
                variant="secondary"
            />
            <BlogSlider color='secondary' />
        </div>
    )
}

export default page