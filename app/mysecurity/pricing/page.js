import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png'
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import CTABanner from "@/components/common/CTABanner"
import { controlDigitalSecurityData_pricing } from "@/utils/mock/dummyData"
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner"
import { empowerBulletWithDescData_pricing, empowerBulletWithDescParagraphData_pricing } from "@/utils/mock/WeServeSectionData/weServeCardData"

import ExploreHero from "@/components/dynamicSections/HeroVariants/ExploreHero"
import exploreHeroBG from '@/assets/hero/more-hero/exploreHeroBG.png';
import { pricing } from "@/utils/images"
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Prices & Plans| Cybersecurity Services | TechFroing",
  description: "TechForing cybersecurity service pricing. Get started.",
  keywords: "",
  canonical: "https://techforing.com/mysecurity/pricing/",
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
      <ExploreHero
        title={"CUSTOM PRICING PLANS TAILORED TO YOUR NEEDS"}
        isDesc={false}
        bgImage={exploreHeroBG?.src}
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondary'
      />
      <StrategicPartner
        imgLeftTextRightAlign={true}
        title={"Our cost of cyber security solutions is tailored to your requirements. You don’t need to pay a cent more than you need."}
        image={pricing?.introImg}
        alt={"cost of cyber security solutions"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        onlyDesc={false}
        renderedData={empowerBulletWithDescData_pricing}
        renderParagraph={empowerBulletWithDescParagraphData_pricing}
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
      {/* <PricingForm /> */}
      <CTABanner color="primary" data={controlDigitalSecurityData_pricing} />
    </div>
  )
}

export default page