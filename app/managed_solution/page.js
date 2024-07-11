import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-purple.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseManagedSolutionsData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import ServiceProvideV4 from "@/components/dynamicSections/WeProvideService/ServiceProvideV4";
import { serviceProvideManageSolutionData } from "@/utils/mock/dummyData";
import Link from "next/link";
import managedCyberSecuritySolutions from "@/asset/business-cybersecurity/managed-security-solution/managed-cybersecurity-solutions.webp";
import whyChooseTechforing from "@/asset/business-cybersecurity/managed-security-solution/mss-why-choose.webp";
import secureBusiness from "@/asset/business-cybersecurity/managed-security-solution/mss-cta.webp";
import hero from "@/asset/business-cybersecurity/managed-security-solution/hero.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Managed Solution for Business Cybersecurity | TechForing",
  description: "Proactive protection, expert management. Safeguard your business with our managed solution for business cybersecurity solution. Get started today!",
  keywords: "managed solution",
  canonical: "https://techforing.com/managed_solution/",
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
          <span>MANAGED SOLUTIONS</span> <span>FOR BUSINESS</span> <br className='hidden lg:visible' />
          <span>CYBERSECURITY</span>
        </h1>}
        description={'To Battle the Continuous Threats of a Neverending Wave of Cyberattacks, We Bring You Our Best Managed Solutions Suitable for Any and All Businesses'}
        btnTxt={'Secure Your Business Today'}
        variants='purple'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='purple'
      />
      <AssessmentServiceSection
        title={"TechForing Managed <br/> Cybersecurity Solutions"}

        paragraph={"Leave your cybersecurity worries to us. Our comprehensive solutions combine advanced software, hardware, and expert services like firewalls, intrusion detection, encryption, and incident response planning. We proactively safeguard your sensitive data, neutralize threats before they strike, and ensure rapid recovery in the event of an attack. With TechForing, you can focus on what truly matters – growing your business."}
        variant='purple'
        image={managedCyberSecuritySolutions}
        alt={"Cyber Security Solutions "}
        position='bottom'
      />
      <div>
        <h1 className="text-4xl mb-[50px] font-bold text-center text-lightBGText">Managed Security Services We Provide</h1>
        <div className="flex flex-col gap-10">
          <ServiceProvideV4 color="purpleTwo" data={serviceProvideManageSolutionData.smbSolutions} />
          <ServiceProvideV4 color="purpleTwo" reverse={true} data={serviceProvideManageSolutionData.enterpriseSolutions} />
        </div>
      </div>
      <WhyChooseSection
        headline={"Why Choose TechForing <br/> As Your Managed Cybersecurity Provider?"}
        responsiveImgURL={whyChooseTechforing}
        renderedData={WhyChooseManagedSolutionsData}
        variant="purple"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='purple' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Secure My Business Today!
            </Link>
          </Button>
        }
        variant="purple"
        img={secureBusiness}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Secure Your Business with Powerful Managed Cybersecurity Solutions!"
        subTitle="Stay ahead of threats with our tailored cybersecurity solutions, from plug-and-play programs for SMBs to comprehensive managed cloud security for enterprises."
      />
      <TestimonialSection variant="purpleTwo" data={bcsTestimonialData} />
      <BlogSlider color="purple" />
    </section>
  )
}

export default page