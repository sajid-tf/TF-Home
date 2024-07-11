import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-purple.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseForBugBounty, WhyChooseForBugBountyBusinessesOrganizations } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import Benefits from "@/components/dynamicSections/Benefits";
import { benefitsData } from "@/utils/mock/dummyData";
import OSINTService from "@/components/dynamicSections/OSINTService/OSINTService";
import { BugBountyGridItemsData, stepsForBugBounty } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import Link from "next/link";
import RoundItems from "@/components/common/RoundItems/RoundItems";
// images 
import heroBugImg from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/hero.webp";
import bugBountyAssessmentImg from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/bug-bounty.webp";
import bugWhyChooseImgMobile from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/bbp-why-choose.webp";
import bugOrgImg from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/protect-business.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import benefitsCompanyImg from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/bug-bounty-one.webp";
import benefitsResearcherImg from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/bug-bounty-two.webp";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import bugBountyApartImg from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/bug.webp";
import WhyChooseReverse from "@/components/dynamicSections/WhyChooseReverse/WhyChooseReverse";
import reverserWhyChoose from "@/asset/business-cybersecurity/enterprise/bug-bounty-program/whyChooseReverse.webp"
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Bug Bounty Program | Secure  the Internet | TechForing",
  description: "Detect bugs, earn rewards! Our bug bounty program is for ethical hackers seeking rewards or for developers aiming to secure their programs. Join today!",
  keywords: "bug bounty program (bug bounty, how bug bounty program works, bug hunting)",
  canonical: "https://techforing.com/bug_bounty/",
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
        bgImg={heroBugImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>BUG BOUNTY PROGRAM</span>
        </h1>}
        description={"Discover your IT infrastructure’s vulnerabilities before cyber criminals do - Our global community of skilled independent security researchers finds and fixes vulnerabilities in your organization’s IT environment to secure your business!"}
        btnTxt={'Join the Program Today!'}
        variants='purple'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='purple'
      />
      <AssessmentServiceSection
        title={"What is Bug Bounty <br/> Program?"}
        paragraph={"Bug bounty programs are crowdsourced cybersecurity initiatives where independent security researchers and ethical hackers are encouraged to identify and report security vulnerabilities or “bugs” in a company’s software or digital infrastructure. Bug bounty programs can be a win-win for companies and ethical hackers alike. The company benefits from the knowledge and skills of a community of security researchers. Ethical hackers benefit from the recognition, rewards, and the opportunity to showcase their expertise in the cybersecurity field."}
        image={bugBountyAssessmentImg}
        alt={"bug bounty program"}
        position='bottom'
        variant="purple"
      />
      <Benefits
        color="purpleTwo"
        renderData={benefitsData}
        ImageOne={benefitsCompanyImg}
        ImageTwo={benefitsResearcherImg}
        ImageAltOne="company"
        ImageAltTwo="Researcher"
      />
      <StrategicPartner
        imgLeftTextRightAlign={true}
        title={"What Sets TechForing Bug Bounty Program Apart?"}
        image={bugBountyApartImg}
        alt={"What Sets TechForing Bug Bounty Program Apart?"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={false}
        onlyDesc={false}
        dropDownExpandable={true}
        renderedData={bugBountyProgramApartData}
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
      <div className="w-full lg:w-[1200px] h-fit mx-auto px-2 lg:px-0">
        <h3 className="text-4xl text-lightBGText font-tertiary font-bold">How Our Bug Bounty Program Works</h3>
        <p className="text-lightBGText font-tertiary text-justify py-5">
          TechForing bug bounty programs invite enterprises and independent security researchers to find vulnerabilities in their software and platforms. We work with enterprises and allow rewards for individuals willing to search and find vulnerabilities in their systems. We set up the following factors together
        </p>
        <div className="py-5">
          <RoundItems
            renderedData={BugBountyGridItemsData}
            variant="purpleTwo"
          />
        </div>
        <p className="text-lightBGText font-tertiary text-justify py-5">
          Once we set up everything, we connect your organization to the best independent security researchers available worldwide.
        </p>
        <OSINTService
          variant='purpleTwo'
          renderedData={stepsForBugBounty}
          fullBorder={true}
          squareShape={true}
        />
      </div>
      <WhyChooseSection
        headline={"Why Join TechForing's Bug Bounty Program?"}
        upperHeadline={"Businesses and Organizations:"}
        responsiveImgURL={reverserWhyChoose}
        renderedData={WhyChooseForBugBountyBusinessesOrganizations}
        variant="purple"
      />
      <WhyChooseReverse
        headline={"Why Join TechForing's Bug Bounty Program?"}
        upperHeadline={"For Independent Security Researchers:"}
        responsiveImgURL={bugWhyChooseImgMobile}
        renderedData={WhyChooseForBugBounty}
        variant="purple"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='purple' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Join the Community Today
            </Link>
          </Button>
        }
        variant="purple"
        img={bugOrgImg}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Show Your Skills. Earn Rewards. Make a Difference"
        subTitle="Join our global community of independent security researchers, make a difference, and get paid to find vulnerabilities in real-world applications."
      />
      <TestimonialSection variant="purpleTwo" data={bcsTestimonialData} />
      <BlogSlider color="purple" />
    </section>
  )
}

export default page

//mock data
const bugBountyProgramApartData = [
  {
    id: 1,
    title: 'Expertise',
    desc: 'TechForing has a team of experienced cybersecurity professionals. We can provide guidance and support throughout the bug bounty process.'
  },
  {
    id: 2,
    title: 'Flexibility',
    desc: 'Our bug bounty program can be customized to meet the specific needs of your company or individual project, ensuring you get the most out of your program.'
  },
  {
    id: 3,
    title: 'Rewards',
    desc: 'Our bug bounty programs offer competitive monetary rewards, recognition, and other incentives for valid reports. We make it a rewarding experience for everyone who participates.'
  },
  {
    id: 4,
    title: 'Community',
    desc: 'TechForing has a large and diverse community of ethical hackers that can provide valuable insights and perspectives on potential vulnerabilities and threats. You can also network with other professionals in the cybersecurity field and gain valuable insight.'
  },
  {
    id: 5,
    title: 'Transparency',
    desc: 'TechForing bug bounty program is transparent and provides clear guidelines for the participants. We are very responsive to reports and communicate openly with companies and researchers throughout the process.'
  },
  {
    id: 6,
    title: 'Reputation',
    desc: 'As a leading cybersecurity company, we have a reputation as a trusted partner in the cybersecurity industry and deliver high-quality bug bounty programs.'
  },
]