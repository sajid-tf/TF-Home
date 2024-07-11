import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png';
import OpportunityExpertSection from "@/components/dynamicSections/OpportunityExpertSection/OpportunityExpertSection";
import { OpportunityExportData } from "@/utils/mock/OpportunityExpertData/OpportunityExpertData";
import { ScheduleCall } from "@/components/common";
import WeManageCard from "@/components/common/WeManageCard/WeManageCard";
import { tfEducationCourse } from "@/utils/mock/WeManageCardData/WeManageCardData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import { FaChevronRight } from "react-icons/fa";
import { globalImages } from "@/utils/images/globaIImages";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import AcademyHero from "@/components/dynamicSections/HeroVariants/AcademyHero";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import { academicPartner } from "@/utils/mock/WeServeSectionData/weServeCardData";
import hero from "@/asset/academy/educational-institute/hero.webp";
import { academyTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import WeWork from "@/components/common/WeWork/WeWork";
import studentBenefitImg from "@/asset/academy/educational-institute/student-benifits.webp";
import facultyBenefitImg from "@/asset/academy/educational-institute/faculty-benifits.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Educational Institute Cybersecurity Training | TechForing Academy",
  description: "Elevate cyber awareness within educational institutes with our training program. Equip students, faculty, and staff with essential cybersecurity knowledge.",
  keywords: "educational institute cybersecurity training",
  canonical: "https://techforing.com/academy/educational_institute/",
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
        title={<h2 className='text-3xl lg:text-[48px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'>CYBERSECURITY COURSE & <br className="hidden lg:inline-block" /> AWARENESS PROGRAM FOR <br className="hidden lg:inline-block" /> <span className='text-secondary'>EDUCATIONAL</span> INSTITUTES</h2>}
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
        title={"We Will Provide"}
        isDesc={false}
        variant='secondary'
        renderData={OpportunityExportData}
      />
      <StrategicPartner
        imgLeftTextRightAlign={true}
        title={"How We Work With Educational Institute"}
        image={globalImages?.ourFocusImg}
        alt={"How We Work"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={false}
        onlyDesc={false}
        dropDownExpandable={true}
        renderedData={[
          {
            id: 1,
            title: 'Educate the IT Team on Security Protocols',
            desc: 'We train IT personnel about security vulnerabilities to avoid DDoS attacks, Data theft, Phishing, Ransomware/Malware, etc.'
          },
          {
            id: 2,
            title: 'Enlighten the Faculty and Staff on Current Threats',
            desc: 'We inform the faculty members on digital device data and server protection; conducting online classes without interference.'
          },
          {
            id: 3,
            title: 'Make Parents and Educators Aware of Best Practices',
            desc: 'We teach parents about passwords and privacy, protect identity and location, use secured wifi, and utilize parental controls.'
          },
          {
            id: 4,
            title: 'Awareness Among Students about Aafe Computing',
            desc: 'We spread Cybersecurity awareness in students, teaching them safe navigation, online communication, latest protection tools.'
          },
          {
            id: 5,
            title: 'Provide Compliance Policies',
            desc: 'We deliver compliance policies to prevent rule violations that can lead to fines and lawsuits.'
          },
          {
            id: 6,
            title: 'Work out Security Solution to Present Setup',
            desc: 'We collaborate with the IT team in providing security solutions to the existing system to protect against potential cyberattacks.'
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
      <WeWork
        imgLeftTextRightAlign={false}
        variant='secondary'
        title={"Student Benefits"}
        desc={"Our cybersecurity professionals can help students safeguard digital activities by educating them about avoiding intellectual property breaches and protecting their privacy online. Career fairs and campaigns will be encouraged to better both students and their parents to choose a cybersecurity career path. Under experts’ supervision, competitions can also be raised security awareness and teamwork to tackle a real world cyber incident. Finally, students will be treated with cyber security training certification."}
        image={studentBenefitImg}
        alt={"How We Work"}
        wrapperImgBG={false}
      />
      <WeWork
        imgLeftTextRightAlign={true}
        variant='secondary'
        title={"Faculty Benefits"}
        desc={"Teachers and staff will learn about various online learning platforms and their respective security issues in our cyber awareness training. Apart from acquiring knowledge about security’s legal aspects, they will learn to protect themselves and teach others to defend against potential threats. Our cybersecurity trainers will provide them with all the industry-grade tools we can incorporate into their daily applications and organization devices and servers. IT personnel will be experts in backing up data regularly, using data encryption techniques, and securing access to on-premise networks. They will ensure access rights are authenticated thoughtfully so that an accidental data breach at one point doesn’t spread. They will establish robust user monitoring for all user actions within educational networks."}
        image={facultyBenefitImg}
        alt={"How We Work"}
        wrapperImgBG={false}
      />
      <WeManageCard
        title={"Courses We Offer"}
        renderedData={tfEducationCourse}
        variant='secondary'
        numberOfCard={4}
      />
      <StrategicPartner
        imgLeftTextRightAlign={true}
        title={"How To Become An Academy Partner"}
        image={globalImages?.ourFocusImg}
        alt={"How We Work"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        onlyDesc={false}
        renderedData={academicPartner}
        variant='secondary'
        topLightBG={true}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={false}
        rightDeepBG={false}
      />
      <TestimonialSection data={academyTestimonialData} variant="secondary" />
      <ScheduleCall
        title="Become A Member Of our Cybersecurity Academy"
        desc="Interested to learn more about our programs?"
        btns={[
          { id: 1, link: "/get_start", text: "Contact Now", variant: 'contained', btnColor: "secondary", icon: <FaChevronRight /> },
        ]}
        variant="secondary"
      />
      <BlogSlider color='secondary' />
    </div>
  )
}

export default page