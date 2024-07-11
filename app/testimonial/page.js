import CTABanner from "@/components/common/CTABanner"
import HappyClient from "@/components/dynamicSections/HappyClient/HappyClient"
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero"
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import TrustedORG from "@/components/dynamicSections/TrustedORG/TrustedORG"
import { academiClients, bscHappyClients, pcsHappyClients } from "@/utils/mock/HappyClientData/HappyClientData"
import { controlDigitalSecurityData } from "@/utils/mock/dummyData"
import hero from "@/asset/company/client-and-their-stories/hero.webp";
import VideoTestmonial from "@/components/dynamicSections/VideoTestimonial/VideoTestmonial"
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Clients & Testimonials | TechForing",
  description: "Discover why clients trust TechForing. Explore testimonials showcasing our dedication to excellence.",
  keywords: "cybersecurity company testimonials, client testimonials, cybersecurity company clients",
  canonical: "https://techforing.com/testimonial/",
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
        bgImage={hero?.src}
      />
      <VideoTestmonial />
      <TestimonialSection variant='secondary' data={bcsTestimonialData} />
      <TrustedORG variant='sky' />
      <div className='w-[1200px] h-fit mx-auto flex flex-col gap-[28px]'>
        <div className='flex flex-col gap-[18px]'>
          <h3 className='text-4xl text-lightBGText font-tertiary font-bold capitalize text-center'>We Have A Lot Of Happy Clients</h3>
          <h4 className='text-2xl text-lightBGText font-tertiary font-bold capitalize text-center'>With Lot Of Services</h4>
        </div>
        <HappyClient
          title={'Business Cybersecurity'}
          renderedData={bscHappyClients}
          variant='sky'
        />
        <HappyClient
          title={'Personal Cybersecurity'}
          renderedData={pcsHappyClients}
          variant='green'
        />
        <HappyClient
          title={'Academy'}
          renderedData={academiClients}
          variant='secondary'
        />
      </div>
      <CTABanner color="primary" data={controlDigitalSecurityData} />
    </main>
  )
}

export default page