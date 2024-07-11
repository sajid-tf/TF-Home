import Organization from "@/components/HomePage/services/trustedOrganization/Organization"
import CTABanner from "@/components/common/CTABanner"
import Title from "@/components/common/Title"
import WeManageCard from "@/components/common/WeManageCard/WeManageCard"
import WeWork from "@/components/common/WeWork/WeWork"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero"
import { globalImages } from "@/utils/images/globaIImages"
import { PartnerBenefitsData } from "@/utils/mock/WeManageCardData/WeManageCardData"
import { organizationData } from "@/utils/mock/dummyData"
import hero from "@/asset/company/partnership-program/hero.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Cybersecurity Partner Program | Data & IT Security | TechForing",
  description: "Join our cybersecurity partner program and get free enterprise-grade cybersecurity, expert advice, training, and access to global networks & resources.",
  keywords: "cybersecurity partner (it security resellers, cybersecurity resellers, cyber security value added reseller cyber security partnership, )",
  canonical: "https://techforing.com/partner/",
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
        bgImage={hero.src}
      />

      <section className="md:max-w-[1200px] w-full mx-auto">
        <Organization
          title={
            <Title className={'text-center py-5 border-x-[20px] w-[200px] sm:w-[400px] border-secondary mx-auto'}>Our Partners</Title>
          }
          renderedData={organizationData}
          BGColor={'light'}
        />
        <div className="flex flex-col gap-5 pt-[40px] px-10">
          <p className="text-lightBGText text-justify">
            Techforing has put together a network of local and global partners, which enables us to provide our customers with the most personalized cybersecurity solutions. Our expertise lies in data security, risk management, incident response, and cybercrime investigation.
          </p>
          <p className="text-lightBGText text-justify">
            Long-term relationships are something we like to build with our partners. We allow them to consume Techforing's offerings with their business solutions and also offer their customers the best technologies in the market.
          </p>
          <p className="text-lightBGText text-justify">
            We ensure our partners success ratio with their customers is completely maintained. To achieve that, we provide dedicated training sessions and certification programs alongside customized support to respond to clients in the time of their need. That's certainly a rare feat among cyber security solution providers.
          </p>
        </div>
      </section>
      <AssessmentServiceSection
        title={"TechForing <br/> Partner Program"}
        subtitle={'TECHFORING IS THE KINGPIN, PIONEER, PARTNER'}
        paragraph={"As a cybersecurity company, We partner with industry-leading tech services and solution providers. Our partners help us penetrate the market better for their existing and future clients. In exchange, we provide customized offers, share revenues, our resources, and expertise. Our goal is to help our partners to explore additional revenue streams without sweating over it and be more competitive in their own industry."}
        variant='secondary'
        image={globalImages?.tfPartner}
        alt={"TechForing Clients"}
        position='bottom'
      />
      <WeManageCard
        title={"Partner Benefits"}
        renderedData={PartnerBenefitsData}
        variant='secondary'
        numberOfCard={3}
      />
      <WeWork
        imgLeftTextRightAlign={true}
        variant='secondary'
        title={"Strategic Partner"}
        desc={"Our strategic partners provide the logistics and process counseling from time to time. With their constant support and valuable suggestions, we have been able to penetrate the most far-end markets to reach our customers, who enjoy our robust cybersecurity solutions. We work to improve the resilience of our partners and their customers against cyber threats. <br/> Being true strategic partners to us, we are constantly advised on strategy and get solutions tailored to the information security industry. We manage their entire security operations as our partnership stays on in mutually beneficial collaboration."}
        image={globalImages?.strategicPartner}
        alt={"How We Work"}
        wrapperImgBG={false}
      />
      <WeWork
        imgLeftTextRightAlign={false}
        variant='secondary'
        title={"Technology Partner"}
        desc={"Partnership with us enables our partners to have the tools and expertise required to bring integrated solutions. We provide innovative cybersecurity services customized to their customers needs. Whether you are a software development company, hosting provider, ISP, Telecom Company, tech service provider or web Development Company, we have room for everyone.Our search for the right partners continues until we can deliver smart data protection to our customers and clients."}
        image={globalImages?.technologyPartner}
        alt={"How We Work"}
        wrapperImgBG={false}
      />
      <CTABanner color="primary" data={{
        title: "BECOME A MEMBER OF TECHFORING NETWORK",
        desc: "Our IT Security Resellers will help",
        btn: { src: "/get_start/", label: "Apply Now" }
      }} />
      <BlogSlider color="secondary" />
    </main>
  )
}

export default page;