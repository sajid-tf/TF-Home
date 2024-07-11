import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png';
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import { Button, MissionVision, SecureOrganization, StatisTics } from "@/components/common";
import Organization from "@/components/HomePage/services/trustedOrganization/Organization";
import { organizationData, regionalOfficeData } from "@/utils/mock/dummyData";
import RegionalOffice from "@/components/common/RegionalOffice/RegionalOffice";
import MissionVisionData from "@/utils/mock/MissionVisionData";
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero";
import hero from '@/asset/company/about-us/hero.webp';
import Link from "next/link";
import { aboutUs, common } from "@/utils/images";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "About Us | Top Cybersecurity Company | TechForing",
  description: "TechForing is a global cybersecurity company. We are revolutionizing cybersecurity with our experienced & talented team. Learn more about us here.",
  keywords: "cybersecurity company (top cybersecurity company, cybersecurity leaders, best cybersecurity company, fastest growing cybersecurity company)",
  canonical: "https://techforing.com/aboutus/",
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
      <CompanyHero
        titleFirstLine={"Shaping"}
        titleMiddleLine={"tomorrow's"}
        titleLowerLine={"CyberSecurity"}
        desc={"We're a cybersecurity company with a humble beginning, aiming to shape tomorrow's cybersecurity landscape"}
        textColorVariant={'secondary'}
        bgImage={hero?.src}
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondary'
      />
      <AssessmentServiceSection
        title={"Our Story"}
        paragraph={"The present CEO & MD Mr. Rabiul Islam has been globally consulting as a cybersecurity specialist since 2008. He never thought to start his career journey in the cybersecurity field, but having an immense amount of passion in cybersecurity, he quickly became a skilled cybersecurity professional."}
        variant='secondary'
        image={aboutUs?.ourStory}
        alt={"Rabiul Islam"}
        position='center'
      />
      <RegionalOffice data={regionalOfficeData} color="secondary" />
      <MissionVision data={MissionVisionData} />
      <StatisTics />
      <Organization
        title={<h4 className={`relative text-primary text-lg lg:text-2xl font-bold text-center py-10`}>
          LARGE ENTERPRISE, GOVERNMENT AGENCIES, LAW ENFORCEMENT, AND SMB, WE HAD THE HONOR TO WORK WITH ALL KINDS OF BUSINESSES.
          <span className="absolute h-full w-10 bg-secondary top-0 right-full"></span>
          <span className="absolute h-full w-10 bg-secondary top-0 left-full"></span>
        </h4>}
        renderedData={organizationData}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondary' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Partner With Us
            </Link>
          </Button>
        }
        img={common.secureOrganizationImg}
        variant='secondary'
        title="Keep Your Digital Assets Safe With TechForing Cybersecurity"
        subTitle="Whether you are a business safeguarding sensitive information or an individual protecting your assets, partner with TechForing and get tailored solutions that will help you thrive in today’s digital world!"
      />
    </div>
  )
}

export default page;