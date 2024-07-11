import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png'
import IdentityTheft from "@/components/dynamicSections/IdentityTheft/IdentityTheft"
import { IdentityTheftData } from "@/utils/mock/WeDealWithData/WeDealWithData"
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { identity_theft_WhyChooseFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection"
import { identity_theft_VulnerabilityAssessmentData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData"
import heroTheftImg from "@/asset/personal-cybersecurity/cyber-investigation/identity-theft-investigation/hero.webp";
import Link from "next/link"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import introIdentity from "@/asset/personal-cybersecurity/cyber-investigation/identity-theft-investigation/Identity_theft_investigation-Intro.webp"
import ctaIdentity from "@/asset/personal-cybersecurity/cyber-investigation/identity-theft-investigation/Identity_CTA.webp"
import whyChooseIdentity from "@/asset/personal-cybersecurity/cyber-investigation/identity-theft-investigation/Identity_Why.webp"
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Identity Theft Investigation: Recover Your Identity | TechForing",
  description: "Uncover the truth behind identity theft with our expert identity theft investigation services. Safeguard your identity and reclaim your peace of mind today!",
  keywords: "identity theft investigation (identity theft, identity theft protection, best identity theft protection, identity protection)",
  canonical: "https://techforing.com/mysecurity/identity_theft_investigation/",
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
        bgImg={heroTheftImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          IDENTITY THEFT INVESTIGATION
        </h1>}
        description={"Identity theft is a silent predator, exploiting your personal information and leading to complete financial and reputational ruin. If you’ve fallen victim to an identity scam, act immediately!"}
        btnTxt={"Reclaim Your Identity"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <AssessmentServiceSection
        title={"Reclaim Your Digital Identity <br/> With TechForing Identity  <br/> Theft Protection"}
        paragraph="Identity theft is increasing at an alarming rate. Automated protections & software cannot always provide complete safety. TechForing’s active security measurements and in-depth investigations ensure you never become a victim of identity theft."
        image={introIdentity}
        alt={"Reclaim Your Digital Identity"}
        position='bottom'
        variant="secondaryTwo"
      />
      <IdentityTheft
        title={'Types Of Identity Theft We Deal With'}
        renderedData={IdentityTheftData}
        variant='secondaryTwo'
      />
      <VulnerabilityAssessmentSection
        title={"How We Approach The Situation"}
        renderedData={identity_theft_VulnerabilityAssessmentData}
        desc={'Performing an online identity theft investigation requires a systematic and thorough approach. Here are the steps we follow:'}
        variants='secondaryTwo'
      />
      <WhyChooseSection
        headline={"Why Trust TechForing to Reclaim Your Identity?"}
        responsiveImgURL={whyChooseIdentity}
        renderedData={identity_theft_WhyChooseFAQData}
        variant="secondaryTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Talk To An Expert
            </Link>
          </Button>
        }
        img={ctaIdentity}
        className={{ borderColor: 'border-redThree' }}
        title="Don't Become a Statistic: Protect Your Identity Today"
        subTitle="Identity theft is a serious crime with far-reaching consequences. Don’t wait until it’s too late, contact TechForing today and safeguard your identity and your future!"
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <BlogSlider color="secondaryTwo" />
    </div>
  )
}

export default page