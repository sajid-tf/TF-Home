import CTABanner from "@/components/common/CTABanner"
import WhyTakeFranchise from "@/components/common/WhyTakeFranchaise"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero"
import OperatingCountries from "@/components/dynamicSections/OperatingCountries/OperatingCountries"
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner"
import { OperatingCountriesData } from "@/utils/mock/OperatingCountriesData/OperatingCountriesData"
import { empowerBulletWithDescData, empowerBulletWithDescParagraphData } from "@/utils/mock/WeServeSectionData/weServeCardData"
import franchiseHeroBG from '@/asset/company/franchise/hero.webp';
import franchiseProgram from "@/asset/company/franchise/franchise-program.webp";
import empowerPartners from "@/asset/company/franchise/empower-our-partners.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "TechForing | Cybersecurity Consulting for Businesses & Individuals",
  description: "TechForing protects business and personal IT infrastructure with tailored cybersecurity consulting services for ironclad protection. Contact us to learn more,",
  keywords: "cybersecurity franchise (cybersecurity franchise, cyber security business for sale, cybersecurity business for sale)",
  canonical: "https://techforing.com/franchise/",
};

const page = () => {
  return (
    <main className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <CompanyHero
        titleFirstLine={"Shaping"}
        titleMiddleLine={"Tomorrow's"}
        titleLowerLine={"CyberSecurity"}
        desc={"We're a cybersecurity company with a humble beginning, aiming to shape tomorrow's cybersecurity landscape"}
        textColorVariant={'secondary'}
        bgImage={franchiseHeroBG?.src}
      />
      <AssessmentServiceSection
        title={"TechForing <br/> Franchise Program"}
        subtitle={"TECHFORING is The Leader, Innovator, Partner"}
        paragraph={"Techforing provides industry-grade monitoring and management of security systems and devices for the most influential individuals and different businesses. We are proud to have a team of professionals certified in C|EH, CISA, CISSP, and Security+. With 15 years of experience in digital services, we are confident to partner with the most prospective and rising businesses around."}
        variant='secondary'
        image={franchiseProgram}
        alt={"TechForing Clients"}
        position='bottom'
      />
      <WhyTakeFranchise />
      <StrategicPartner
        imgLeftTextRightAlign={true}
        title={"How We Empower Our Partners"}
        image={empowerPartners}
        alt={"How We Work"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        onlyDesc={false}
        renderedData={empowerBulletWithDescData}
        renderParagraph={empowerBulletWithDescParagraphData}
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
      <OperatingCountries
        title={'Countries We Are Operating'}
        renderedData={OperatingCountriesData}
        variant='secondary'
      />
      <CTABanner color="primary" data={{
        title: "WANT TO BECOME TECHFORING FRANCHISEE?",
        desc: "Contact us for more details",
        btn: { src: "/get_start/", label: "Contact Now" }
      }} />
      <BlogSlider color="secondary" />
    </main>
  )
}

export default page;