import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-purple.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import WeServeSection from "@/components/dynamicSections/WeServeSection/WeServeSection";
import { plugAndPlayServiceCardData } from "@/utils/mock/WeServeSectionData/weServeCardData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseFAQDataFor_plug_and_play_cyber_security } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import WeWork from "@/components/common/WeWork/WeWork";
import Link from "next/link";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import OSINTService from "@/components/dynamicSections/OSINTService/OSINTService";
import { OSINTServiceDataForPlugAndPlay } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import trunkeyCyberSolutions from "@/asset/business-cybersecurity/SMB/plug-play-program/trunkey-cyber-solutions.webp";
import howWorks from "@/asset/business-cybersecurity/SMB/plug-play-program/how-works.webp";
import secureYourCompany from "@/asset/business-cybersecurity/SMB/plug-play-program/protect-your-company.webp";
import whyTechforingSmall from "@/asset/business-cybersecurity/SMB/plug-play-program/pp-cta.webp";
import hero from "@/asset/business-cybersecurity/SMB/plug-play-program/hero.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import ppIntro from "@/asset/business-cybersecurity/SMB/plug-play-program/PP-Intro.webp";
import WeManageCard from "@/components/common/WeManageCard/WeManageCard";
import { play_plug_card_data } from "@/utils/mock/WeManageCardData/WeManageCardData";
import SEOHead from "@/components/common/SEOHead/SEOHead";
export const metadata = {
  title: "Plug & Play Cybersecurity for SMBs | TechForing",
  description: "Empower your SMB with our affordable, plug-and-play cybersecurity turnkey solution. Get your easy-to-implement and comprehensive protection today!",
  keywords: "plug and play cybersecurity (turnkey cybersecurity)",
  canonical: "https://techforing.com/plug_and_play_cyber_security/",
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
          <span>Plug-and-Play</span> <span>CYBERSECURITY</span> <br className='hidden lg:visible' /> <span>PROGRAM</span>
        </h1>}
        description={'Get affordable, ready-to-use protection against cyber threats for your small and medium-sized businesses without breaking the bank for in-house solutions!'}
        btnTxt={'Safeguard Your Business In Minutes'}
        variants='purple'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='purple'
      />
      <AssessmentServiceSection
        title={"Plug-and-Play <br/> Cybersecurity - Business <br/> Protection, Simplified"}
        paragraph={"Don't let cybersecurity complexity slow down your business. TechForing's Plug & Play Cybersecurity Program offers a seamless, all-in-one solution tailored to the unique needs of small and medium-sized businesses. Get comprehensive protection without the hassle of building an in-house security team."}
        variant='purple'
        image={ppIntro}
        alt={"Plug-and-Play Cybersecurity - Business Protection, Simplified"}
        position='bottom'
      />
      <StrategicPartner
        imgLeftTextRightAlign={false}
        title={"Benefits of TechForing Plug & Play Cyber Solutions"}
        image={trunkeyCyberSolutions}
        alt={"Benefits of TechForing Plug & Play Cyber Solutions"}
        bulletPoint={true}
        checkBox={false}
        bulletWithDesc={false}
        onlyDesc={false}
        renderedData={[
          {
            id: 1,
            point: 'Only turnkey cybersecurity solution in the market'
          },
          {
            id: 2,
            point: 'Affordable pricing, easy to integrate'
          },
          {
            id: 3,
            point: 'Can be reused with minimal customization'
          },
          {
            id: 4,
            point: 'Designed to give a comprehensive view and solve problems unique to your business'
          },
          {
            id: 5,
            point: 'Suitable for all business sizes and industries'
          },
          {
            id: 6,
            point: 'Helps you get your business up and running quickly.'
          },
        ]}
        variant='tertiary'
        topLightBG={false}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={true}
        rightDeepBG={false}
      />
      <WeWork
        imgLeftTextRightAlign={true}
        variant='tertiary'
        title={"How It Works: Your Instant Cybersecurity Shield"}
        desc={"TechForing's Plug & Play Cyber Solutions is your ready-to-go defense against cyber threats. Our experts tailor a complete IT protection plan for your specific needs, then install and configure everything for you. No tech knowledge required! From day one, you'll have a powerful shield in place to protect your valuable data, minimize human error, and keep your business safe online."}
        image={howWorks}
        alt={"How It Works: Your Instant Cybersecurity Shield"}
        wrapperImgBG={true}
      />
      <WeManageCard
        title={"Why Your Business <br/>  Needs Plug & Play Cyber Solutions"}
        renderedData={play_plug_card_data}
        variant='tertiary'
        numberOfCard={5}
        cardWidth='small'
      />
      <WeServeSection
        title={"Industries We Serve"}
        description={"Any organization that uses computer networks to transfer data can benefit from our Plug & Play cyber solutions. Some of the industries we've served so far include:"}
        cardItem={plugAndPlayServiceCardData}
        variant='purple'
      />
      <OSINTService
        title={'How We Implement Plug & Play Cybersecurity'}
        subtile={"TechForing's Plug & Play Cyber Solutions offers a comprehensive approach to safeguarding your business from online attacks. Here's how we do it:"}
        variant='purpleTwo'
        renderedData={OSINTServiceDataForPlugAndPlay}
        noOfGrid={OSINTServiceDataForPlugAndPlay.length}
      />
      <WhyChooseSection
        headline={"Why Choose TechForing's Plug & Play Cyber Solutions?"}
        responsiveImgURL={whyTechforingSmall}
        renderedData={WhyChooseFAQDataFor_plug_and_play_cyber_security}
        variant="purple"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='purple' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Contact Us to Get Started
            </Link>
          </Button>
        }
        variant="purple"
        img={secureYourCompany}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Secure Your Business Today with Plug & Play Cybersecurity"
        subTitle="TechForing’s Plug & Play program protects your business with an instant, expert-led solution against cyberattacks. We handle everything, so you can focus on your business."
      />
      <TestimonialSection variant="purpleTwo" data={bcsTestimonialData} />
      <BlogSlider color="purple" />
    </section>
  )
}

export default page