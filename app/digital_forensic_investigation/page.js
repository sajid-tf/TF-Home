import { Button, FourVectorHero, Performance, ProvideServices, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { Why_Choose_For_digital_forensic_investigation } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { cyberCrimeInvestigateData } from "@/utils/mock/dummyData";
import Link from "next/link";
import { crimeAndDigitalForensic } from "@/utils/images";
import hero from "@/asset/business-cybersecurity/crime-digital-forensic-investigation/hero.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import whyChooseImg from "@/asset/business-cybersecurity/crime-digital-forensic-investigation/C&DF_WhyChoose.webp";
import ctaImg from "@/asset/business-cybersecurity/crime-digital-forensic-investigation/C&DF_CTA.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Digital Forensic Services | Expert Cyber Investigators | TechForing",
  description: "Investigate and solve cybercrimes with our thorough digital forensic investigation services, tailored for businesses and corporations of all sizes.",
  keywords: "digital forensic investigation (digital forensic, digital forensic investigator, digital forensic analyst)",
  canonical: "https://techforing.com/digital_forensic_investigation/",
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
          CRIME & DIGITAL <span className='text-yellowTwo'>FORENSIC</span> <br className='hidden lg:visible' /> SERVICES
        </h1>}
        description={'TechForing\'s digital forensic experts are here to help you recover and rebuild after a cyber attack. We meticulously investigate, uncover culprits, and help you restore your business operations.'}
        btnTxt={'Investiage A Cybercrime'}
        variants='yellow'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellow'
      />
      <AssessmentServiceSection
        title={"Detect Cybercrime, <br/> Uncover Cybercriminals & <br/> Recover Your Business"}
        paragraph={"Digital forensic cases are unique from one another. Intruders steal data from devices, hackers breach websites and wreak havoc. Our specialized cybercrime investigators take on each unique case with precision, meticulously searching for physical evidence, analyzing the hacker’s footprints, and unraveling their motives. We expose the perpetrators, identify backdoors, and help your business to make a complete recovery."}
        variant='yellow'
        image={crimeAndDigitalForensic.service}
        alt={"Digital Forensic Services"}
        position='bottom'
      />
      <ProvideServices renderData={cyberCrimeInvestigateData} color="yellow" />
      <Performance data={performanceData} />
      <WhyChooseSection
        headline={"Why Choose TechForing for Your Digital Forensic Needs?"}
        responsiveImgURL={whyChooseImg}
        renderedData={Why_Choose_For_digital_forensic_investigation}
        variant="yellow"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellow' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Initiate Investigation
            </Link>
          </Button>
        }
        variant="yellow"
        img={ctaImg}
        className={{ borderColor: 'border-yellowTwo' }}
        title="Don't let cybercriminals disrupt your business!"
        subTitle="Contact TechForing today for expert cybercrime & digital forensic investigation and recover your business!"
      />
      <TestimonialSection variant="yellowTwo" data={bcsTestimonialData} />
      <BlogSlider color="yellow" />
    </section>
  )
}

export default page

const performanceData = [
  {
    value: `50<span class='text-yellowTwo text-xl md:text-5xl'>%</span>`,
    text: 'Of Cyber Attacks are driven by “Hacktivism”',
  },
  {
    value: `<span class='text-yellowTwo'>97</span>`,
    text: 'average cyber crime victims per hour',
  },
  {
    value: `59<span class='text-yellowTwo text-xl md:text-5xl'>%</span>`,
    text: 'Of Employees Steal Data When They Quit or Get Fired',
  },
];