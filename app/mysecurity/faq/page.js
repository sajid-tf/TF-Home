import { Faq } from "@/components/common"
import CTABanner from "@/components/common/CTABanner"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import {controlDigitalSecurityData_faq, faqData_PS, faqData_TC, faqData_pricing_payment, faq_ACC, faq_ACI, faq_general } from "@/utils/mock/dummyData"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png'
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import Title from "@/components/common/Title"
import ExploreHero from "@/components/dynamicSections/HeroVariants/ExploreHero"
import exploreHeroBG from '@/asset/personal-cybersecurity/explore/faq/hero.webp';
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "FAQs | Personal Cybersecurity | TechForing",
  description: "Got a question about our personal cybersecurity services? Get your answers here!",
  keywords: "",
  canonical: "https://techforing.com/mysecurity/faq/",
};

const page = () => {
  return (
    <div className="flex flex-col  md:gap-24 gap-10 mb-10 md:mb-24">
       <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <ExploreHero
        title={"HOW CAN WE HELP YOU?"}
        isDesc={true}
        desc={"Find advice and answers from our support team fast or get in touch"}
        bgImage={exploreHeroBG?.src}
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondary'
      />
      <div className="flex flex-col gap-5">
        <Title >Frequently Asked Questions</Title>
        <Faq questions={faq_general} color="secondary" leftSubtitle="General" />
        <Faq questions={faq_ACC} color="secondary" leftSubtitle="About Concierge Cybersecurity" />
        <Faq questions={faq_ACI} color="secondary" leftSubtitle="About Cyber Investigation" />
        <Faq questions={faqData_TC} color="secondary" leftSubtitle="Trust & Confidentiality" />
        <Faq questions={faqData_pricing_payment} color="secondary" leftSubtitle="PRICING & PAYMENT" />
        <Faq questions={faqData_PS} color="secondary" leftSubtitle="Post Service" />
      </div>

      <CTABanner color="primary" data={controlDigitalSecurityData_faq} />
    </div>
  )
}

export default page