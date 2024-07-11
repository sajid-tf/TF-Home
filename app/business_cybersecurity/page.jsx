import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import { bcsWeServeCardsData } from "@/utils/mock/WeServeSectionData/weServeCardData";
import WeServeSection from "@/components/dynamicSections/WeServeSection/WeServeSection";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import { organizationData } from "@/utils/mock/dummyData";
import Organization from "@/components/HomePage/services/trustedOrganization/Organization";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import ProvidedServiceSection from "@/components/dynamicSections/ProvidedServiceSection/ProvidedServiceSection";
import { ProvidedServiceData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import skyEbook from "@/asset/common/ebook/bgEbook/sky-ebook.png";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import bcCTAImg from "@/asset/business-cybersecurity/bc-cta.webp";
import Link from "next/link";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Enterprise Cybersecurity Solutions for Businesses | TechForing",
  description: "Empower your business with robust cybersecurity solutions. Safeguard your operations with TechForing's industry-leading expertise today!",
  keywords: "cybersecurity for business (cyber security for business, business cybersecurity, enterprise cybersecurity)",
  canonical: "https://techforing.com/business_cybersecurity/",
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
        variants='sky'
        description={"Cyber threats are more sophisticated than ever. Don't let your business be the next victim. Safeguard your reputation and finances with TechForing's comprehensive cybersecurity solutions and get unmatched protection in the face of evolving digital threats."}
      />
      <EbookSection
        bg={skyEbook?.src}
        renderedData={EbookData}
        variant="skyThree"
      />
      <ProvidedServiceSection
        title={"Business Cybersecurity Services We Provide"}
        desc={"At TechForing, we are dedicated to safeguarding your business with tailored solutions and proactive defense. We prioritize your organization’s digital security, providing a comprehensive suite of services to keep you ahead of the curve:"}
        renderedData={ProvidedServiceData}
        imgAlignRight={true}
      />
      <WeServeSection
        title={"Industries We Serve"}
        cardItem={bcsWeServeCardsData}
        variant='redThree'
      />
      <TestimonialSection variant="skyThree" data={bcsTestimonialData} />
      <Organization
        title={<h4 className={`text-lightBGText text-lg lg:text-4xl font-bold text-center py-10`}>Trusted By WORLD’S <span className='text-skyThree'>Top</span> Organizations</h4>}
        renderedData={organizationData}
        BGColor='light'
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='sky' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started Today!
            </Link>
          </Button>
        }
        variant="sky"
        img={bcCTAImg}
        className={{ borderColor: 'border-sky' }}
        title="The average cost of a data breach is $4.45 million"
        subTitle="Can you afford to take the risk? Invest in TechForing's Business cybersecurity solutions and get the peace of mind you need to grow your business with confidence"
      />
      <BlogSlider color="sky" />
    </div>
  )
}

export default page