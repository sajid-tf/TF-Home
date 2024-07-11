import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png';
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { WhyChooseFAQDataForCryptoScamInvestigation } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection"
import { cryptoScamsTypes } from "@/utils/mock/WeDealWithData/WeDealWithData"
import OfferServices from "@/components/dynamicSections/OfferServices"
import { OfferServicesData, faqDataForCryptoScam } from "@/utils/mock/dummyData"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import Link from "next/link"
import hero from "@/asset/personal-cybersecurity/cyber-investigation/crypto-scam-investigation/hero.webp";
import cryptoAssets from "@/asset/personal-cybersecurity/cyber-investigation/crypto-scam-investigation/crypto-assets.webp";
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import WeWorkGridSection from "@/components/dynamicSections/WeWorkGridSection/WeWorkGridSection"
import { WeWorkGridDataCyberScam } from "@/utils/mock/WeServeSectionData/weServeCardData"
import csiWhyChoose from "@/asset/personal-cybersecurity/cyber-investigation/crypto-scam-investigation/CSI-WhyChoose.webp";
import csiCTA from "@/asset/personal-cybersecurity/cyber-investigation/crypto-scam-investigation/CSI-CTA.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Crypto Recovery Services: Recover Your Crypto | TechForing",
  description: "Looking for a fast & effective crypto recovery service? Our team of experts can help you recover it quickly and securely. Contact us to get started!",
  keywords: "crypto scam investigation (crypto recovery service, crypto recovery services, recover stolen crypto, best crypto recovery service)",
  canonical: "https://techforing.com/crypto_scam_investigation/",
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
      <FourVectorHero
        bgImg={hero?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          CRYPTO RECOVERY SERVICE
        </h1>}
        description={"Crypto scams are making headlines every day. If you have lost cryptocurrency to a scam, our team of expert cybersecurity and blockchain investigators can help you recover your assets."}
        btnTxt={"Reclaim Your Crypto Assets"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <AssessmentServiceSection
        title={"Lost Your Crypto Assets <br/> to a Scam? We Can Help"}
        paragraph="Have you already become a victim of a cryptocurrency scam? Was it from backing a new company or a new project? Are you unable to withdraw any of your investments, or you’re unable to withdraw your assets without paying unnecessary taxes or fees? Or have the founders have disappeared without a trace? Recovering funds in cases like this might not be simple, but our experts can help you recover your stolen funds with ease!"
        image={cryptoAssets}
        alt={"Lost Your Crypto Assets To A Scam? "}
        position='bottom'
        variant="secondaryTwo"
      />
      <WeDealWithSection
        title={"Types of Crypto Scams We Deal With"}
        renderedData={cryptoScamsTypes}
        variant='secondaryTwo'
      />
      <OfferServices renderData={OfferServicesData} color="secondaryTwo" />
      <WeWorkGridSection
        title={"How we Recover Your Crypto Asset"}
        renderedData={WeWorkGridDataCyberScam}
        variant='secondaryTwo'
      />
      <WhyChooseSection
        headline={"Why Choose Us to Recover Your Crypto?"}
        responsiveImgURL={csiWhyChoose}
        renderedData={WhyChooseFAQDataForCryptoScamInvestigation}
        variant="secondaryTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Request a Quote
            </Link>
          </Button>
        }
        img={csiCTA}
        className={{ borderColor: 'border-redThree' }}
        title="Fallen Victim to a Cryptocurrency Scam?"
        subTitle="Your stolen crypto doesn’t have to be gone forever - Contact us for an effective cryptocurrency scam recovery before it’s too late!"
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <Faq questions={faqDataForCryptoScam} title={'Frequently Asked Questions'} color="secondaryTwo" />
      <BlogSlider color="secondaryTwo" />
    </div>
  )
}

export default page