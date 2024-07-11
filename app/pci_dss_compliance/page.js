import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-sky.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import ComplianceService from "@/components/dynamicSections/ComplianceService/ComplianceService";
import { LevelOfPCIData, LevelOfPCIStepTwoData } from "@/utils/mock/ComplianceServiceData/ComplianceServiceData";
import Link from "next/link";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { pci_dss_compliance_Faq_data } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import HeroPCIImg from "@/asset/business-cybersecurity/security-compliance/pci-dss/hero.webp";
import PCIImg from "@/asset/business-cybersecurity/security-compliance/pci-dss/dss-compliance.webp";
import pciWhyChooseImg from "@/asset/business-cybersecurity/security-compliance/pci-dss/pci-whyChoose.webp";
import pciCTAImg from "@/asset/business-cybersecurity/security-compliance/pci-dss/pci-cta.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "PCI Compliance Consulting | TechForing",
  description: "Track and meet PCI DSS security standards with our expert PCI compliance consultants. Contact us today to learn more.",
  keywords: "pci compliance consultants (pci dss, pci compliance, pci compliance requirements, pci compliance checklist, pci compliance certification)",
  canonical: "https://techforing.com/pci_dss_compliance/",
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
        bgImg={HeroPCIImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>PCI COMPLIANCE</span> <br className='hidden lg:visible' />
          <span>CONSULTANTS</span>
        </h1>}
        description={'Billions of credit card transactions happen every day. Protect your customers\' sensitive information with PCI DSS compliance – the industry standard for safeguarding cardholder data.'}
        btnTxt={'Secure Customer Card Data'}
        variants='skyFour'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='skyFour'
      />
      <StrategicPartner
        imgLeftTextRightAlign={false}
        title={"Benefits Of PCI DSS Compliance"}
        image={PCIImg}
        alt={"GDPR Compliance"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        onlyDesc={false}
        renderParagraph={[
          {
            id: 1,
            paragraph: 'PCI compliance builds a strong foundation for risk assessment, risk management, and ongoing protection. Other benefits include:'
          }
        ]}
        renderedData={[
          {
            id: 1,
            point: 'Building trust with your customers'
          },
          {
            id: 2,
            point: 'Keeping customer information secure and protected'
          },
          {
            id: 3,
            point: 'Preventing data breach'
          },
          {
            id: 4,
            point: 'Prioritizing security'
          },
          {
            id: 5,
            point: 'Helping you to meet global standards'
          },
          {
            id: 6,
            point: 'Providing a baseline for other regulations'
          },
          {
            id: 7,
            point: 'Saving costs from unnecessary fines'
          }
        ]}
        variant='skyFour'
        topLightBG={false}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={true}
        rightDeepBG={false}
        bigDeepWidth={false}
      />
      <ComplianceService
        titleSection={'Our Approach'}
        isDesc={true}
        descSection={'Our PCI DSS compliance consultancy follow 2 steps:'}
        descCenterAlign={true}
        numberOfGrid={2}
        renderData={LevelOfPCIData}
        variant={'sky'}
        leftRightBorder={true}
        isSubTitle={true}
        subTitle={'Identifying the Levels of PCI'}
        isSubDesc={true}
        subDesc={'PCI compliance has 4 levels purely based on transaction volume, or how many transactions go through an organization. Each of these levels requires you to undergo a different set of validations.'}
      />
      <ComplianceService
        descCenterAlign={true}
        numberOfGrid={1}
        renderData={LevelOfPCIStepTwoData}
        variant={'sky'}
        leftRightBorder={true}
        isSubTitle={true}
        subTitle={'Meeting the PCI Compliance Requirements'}
        isSubDesc={true}
        subDesc={'Organizations must satisfy 12 requirements for PCI compliance.'}
      />
      <WhyChooseSection
        headline={"Why Choose Our PCI Compliance Consultancy?"}
        responsiveImgURL={pciWhyChooseImg}
        renderedData={pci_dss_compliance_Faq_data}
        variant={'skyFour'}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='skyFour' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Secure Your Customers’ Data Today!
            </Link>
          </Button>
        }
        variant="skyFour"
        img={pciCTAImg}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Need Help with PCI DSS Compliance?"
        subTitle="TechForing is your trusted partner in achieving and maintaining PCI DSS compliance. Contact us today for a free consultation."
      />
      <BlogSlider color="skyFour" />
    </section>
  )
}

export default page