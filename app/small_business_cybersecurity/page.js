import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-purple.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseFAQDataFor_small_business_cybersecurity } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import ServiceProvideV4 from "@/components/dynamicSections/WeProvideService/ServiceProvideV4";
import { faqData, serviceProvideSMBData } from "@/utils/mock/dummyData";
import Title from "@/components/common/Title";
import Link from "next/link";
import smbAssessmentImg from "@/asset/business-cybersecurity/SMB/smb-services.webp";
import WeWork from "@/components/common/WeWork/WeWork";
import whoWeServe from "@/asset/business-cybersecurity/SMB/who-we-serve.webp";
import howWeWork from "@/asset/business-cybersecurity/SMB/how-we-work.webp";
import whyTechForingSmall from "@/asset/business-cybersecurity/SMB/smb-why-choose.webp";
import protectYourCompany from "@/asset/business-cybersecurity/SMB/smb-cta.webp";
import hero from "@/asset/business-cybersecurity/SMB/hero.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Cybersecurity For Small And Medium Businesses | TechForing",
  description: "Empower your business against cyber threats with our customizable, scalable, and fully managed SMB cybersecurity solutions. Contact us to learn more.",
  keywords: "SMB cybersecurity (small business cybersecurity, medium business cybersecurity, small & medium business cybersecurity)",
  canonical: "https://techforing.com/small_business_cybersecurity/",
};

const page = () => {
  return (
    <section className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <FourVectorHero
        bgImg={hero?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>SMB</span> <br className='hidden lg:visible' />
          <span>CYBERSECURITY</span>
        </h1>}
        description={"Safeguard your small and medium-sized business from cyber threats without breaking the bank or stretching your resources. TechForing's tailored security solutions empower small and medium businesses with enterprise-level protection, even with remote teams and industry-specific risks."}
        btnTxt={'Secure Your SMB With Us Today'}
        variants='purple'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='purple'
      />
      <AssessmentServiceSection
        title={"SMB Cybersecurity <br/> Complete Protection, <br/> Tailored for You"}
        paragraph={"TechForing understands the unique security challenges faced by small and medium-sized businesses (SMBs). Our comprehensive cybersecurity services provide a multi-layered defense, including robust password policies, data encryption, email authentication, proactive threat assessments, and rapid incident response. We offer 24/7 monitoring and customizable solutions to safeguard your business from evolving cyber threats, allowing you to focus on growth and success."}
        variant='purple'
        image={smbAssessmentImg}
        alt={"SMB Cybersecurity Services"}
        position='bottom'
      />
      <div>
        <Title className="text-center mb-[50px]">Our Cybersecurity Services for SMB</Title>
        <div className="flex flex-col gap-10">
          <ServiceProvideV4 color="purpleTwo" data={serviceProvideSMBData.smbSolutions} />
          <ServiceProvideV4 color="purpleTwo" reverse={true} data={serviceProvideSMBData.enterpriseSolutions} />
        </div>
      </div>
      <WeWork
        imgLeftTextRightAlign={true}
        variant='tertiary'
        title={"Who We Serve"}
        desc={"Our SMB cybersecurity solutions are designed for customers who want simple, affordable protection from cyber threats. Our cybersecurity solutions are scalable and easy to install. They consist of software, hardware, and services that help businesses to protect their data and networks from hackers. Our SMB cybersecurity solutions also help small businesses with threat detection and response and provide training for your employees about cybersecurity best practices."}
        image={whoWeServe}
        alt={"Who We Serve"}
        wrapperImgBG={false}
      />
      <WeWork
        imgLeftTextRightAlign={false}
        variant='tertiary'
        title={"How We Work"}
        desc={"We cover the fundamentals of security controls led by a team of experts. Our Managed Cybersecurity Services help companies identify potential threats and cracks in security infrastructure quickly and efficiently. A part from Live Monitoring, detection, and response, we also have a Plug & Play Program at a reasonable cost to fit your affordability. In collaboration with your IT team, our SMB cybersecurity solutions simplify regular security operations, advise on essential security practices, provide estimates about future security requirements and maximize the ROI on your current system."}
        image={howWeWork}
        alt={"How We Work"}
        wrapperImgBG={false}
      />
      <WhyChooseSection
        headline={"Why TechForing Is Best Option for SMB Cybersecurity"}
        responsiveImgURL={whyTechForingSmall}
        renderedData={WhyChooseFAQDataFor_small_business_cybersecurity}
        variant="purple"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='purple' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Book a free consultation!
            </Link>
          </Button>
        }
        variant="purple"
        img={protectYourCompany}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Get Tailored Security Solutions for Your Business"
        subTitle="TechForing provides security solutions for businesses of all sizes and budgets. Not sure where to start?"
      />
      <TestimonialSection variant="purpleTwo" data={bcsTestimonialData} />
      <Faq questions={faqData} title={'Frequently Asked Questions'} color="purpleTwo" />
      <BlogSlider color="purple" />
    </section>
  )
}

export default page