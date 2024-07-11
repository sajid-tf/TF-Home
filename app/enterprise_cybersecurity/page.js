import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-purple.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseEnterpriseCybersecurity } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import Link from "next/link";
import RoundItems from "@/components/common/RoundItems/RoundItems";
import { EnterpriseGridItemsData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import { whatWeWorkCheckBoxData } from "@/utils/mock/WeServeSectionData/weServeCardData";
import ServiceProvideV5 from "@/components/dynamicSections/WeProvideService/ServiceProvideV5";
import { serviceProvideV5Data } from "@/utils/mock/dummyData";
// images
import heroEnterpriseImg from "@/asset/business-cybersecurity/enterprise/hero.webp";
import enterpriseAssessmentImg from "@/asset/business-cybersecurity/enterprise/business-thrive-enterprise.webp";
import enterpriseWeWorkImg from "@/asset/business-cybersecurity/enterprise/who-needs-security.webp";
import enterpriseWhyChooseImgMobile from "@/asset/business-cybersecurity/enterprise/e-why-choose.webp";
import enterpriseOrgImg from "@/asset/business-cybersecurity/enterprise/e-cta.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Enterprise Cybersecurity Solutions for Businesses | TechForing",
  description: "Elevate your business security using industry-grade programs and compliance with our Enterprise Cybersecurity solutions. Visit us to learn more.",
  keywords: "enterprise cybersecurity (enterprise cyber security, cyber security for enterprise, cybersecurity for enterprise, business cybersecurtiy)",
  canonical: "https://techforing.com/enterprise_cybersecurity/",
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
        bgImg={heroEnterpriseImg?.src}
        title={
          <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
            <span>ENTERPRISE</span> <br className='hidden lg:visible' /> <span>SECURITY</span>  <span>SERVICES</span>
          </h1>}
        description={"Safeguard your critical data and mitigate risks with TechForing's industry-leading Enterprise Security Solutions. Our custom-built solutions proactively defend your business from costly attacks, ensuring compliance and peace of mind."}
        btnTxt={'Secure Your Enterprise Now'}
        variants='purple'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='purple'
      />
      <AssessmentServiceSection
        title={'Our Modern, Zero-Trust  <br/>  Approach to <br/> Enterprise Security'}
        paragraph={"Cyberattacks can cost your enterprise millions in financial losses and reputational damage. Our modernized, zero-trust approach to enterprise security addresses the unique challenges faced by your industry, users, and systems. We combine expert human insight with cutting-edge AI to strengthen your defenses in today's hybrid cloud environment."}
        bg="purple"
        image={enterpriseAssessmentImg}
        alt={"Enterprise Security"}
        position='bottom'
        variant="purple"
      />
      <div className="w-[1200px] h-fit mx-auto">
        <h3 className="text-4xl text-lightBGText font-tertiary font-bold">Why Enterprises Need Independent Cybersecurity Partners</h3>
        <p className="text-lightBGText font-tertiary text-justify py-5">
          Cybercriminals are always finding new ways to interrupt business operations for their gain. On the other hand, cybersecurity professionals are always evolving their skills to deal with every possible cyberattack scenario to keep enterprises safe. <br /><br />
          Enterprises have to perform due diligence to stay ahead of cyber threats as well. They need to constantly train their employees about the cybersecurity best practices, vigilantly monitor the dark web, and manage their breachable entry points, including:
        </p>
        <div className="py-5">
          <RoundItems
            renderedData={EnterpriseGridItemsData}
            noOfGrid={7}
            variant="purpleTwo"
          />
        </div>
        <p className="text-lightBGText font-tertiary text-justify py-5">
          Overwhelming your in-house team with these complex tasks can leave your business vulnerable. That’s where a dedicated cybersecurity partner like TechForing comes in. Our team of expert professionals will oversee your organization’s security and provide sophisticated business solutions to keep your virtual assets safe, so you can rest assured that your business will not come to a complete halt from an unexpected attack from malicious actors.
        </p>
      </div>
      <StrategicPartner
        exploreBtn={false}
        imgLeftTextRightAlign={true}
        title={"Who Needs <br/> Enterprise Security ?"}
        image={enterpriseWeWorkImg}
        alt={"Who Needs  Enterprise Security"}
        bulletPoint={false}
        checkBox={true}
        bulletWithDesc={false}
        onlyDesc={false}
        renderedData={whatWeWorkCheckBoxData}
        desc={"Every organization, regardless of industry, must prioritize its cybersecurity posture. However, certain industries are particularly vulnerable to cyber-attacks and data breaches due to the sensitive and confidential data they handle, such as-"}
        lowerDesc={"No Matter what your industry is, TechForing has got you covered."}
        variant='tertiary'
        topLightBG={false}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={false}
        rightDeepBG={true}
      />
      <div className="w-[1200px] h-fit mx-auto pt-5">
        <h3 className="text-4xl text-lightBGText font-tertiary font-bold text-center">Services Included In Our Enterprise Security</h3>
        <div className="flex flex-col gap-10">
          <ServiceProvideV5 color="purpleTwo" data={serviceProvideV5Data.cloudSecurity} />
          <ServiceProvideV5 color="purpleTwo" data={serviceProvideV5Data.bugBountyService} reverse />
        </div>
      </div>
      {/* <ServiceProvideUpgraded /> */}
      <WhyChooseSection
        headline={"Why Choose TechForing for Enterprise Cybersecurity?"}
        responsiveImgURL={enterpriseWhyChooseImgMobile}
        renderedData={WhyChooseEnterpriseCybersecurity}
        variant="purple"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='purple' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Book a Free Consultation
            </Link>
          </Button>
        }
        variant="purple"
        img={enterpriseOrgImg}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Don't Let Cyber Threats Compromise Your Business!"
        subTitle="Proactively protect your enterprise with TechForing's expert cybersecurity solutions. We will assess your risks, create a tailored defense plan, and safeguard your critical assets."
      />
      <TestimonialSection variant="purpleTwo" data={bcsTestimonialData} />
      <BlogSlider color="purple" />
    </section>
  )
}

export default page