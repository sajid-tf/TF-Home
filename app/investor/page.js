
import Subtitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero";
import Image from "next/image"
import investorImg from '@/asset/company/investor-relation/investor.webp';
import hero from "@/asset/company/investor-relation/hero.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "TechForing | Cybersecurity Consulting for Businesses & Individuals",
  description: "TechForing protects business and personal IT infrastructure with tailored cybersecurity consulting services for ironclad protection. Contact us to learn more,",
  keywords: "cyber security investment (cybersecurity fund, cybersecurity investments, investment in cyber security, investments in cybersecurity)",
  canonical: "https://techforing.com/investor/",
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
      <section>
        <Title> TechForing LTD Is A Privately Held Company </Title>
        <Subtitle className={"text-center pt-4"}>We invite like-minded investors to learn more about us</Subtitle>
        <div className='md:w-[1000px] mx-auto mt-10'>
          <div className='w-full px-[20px] lg:px-[50px] border-y-[80px] lg:border-y-[120px] border-secondary/20'>
            <Image src={investorImg} alt={'Investor'} className='w-full h-fit -my-[40px] lg:-my-[60px] shadow-sm' />
          </div>
        </div>

        <Subtitle className={"text-center pt-8"}>Please Contact <a href="mailto:info@techforing.com" className="text-secondary">info@techforing.com</a> To Schedule A Meeting</Subtitle>
      </section>
    </main>
  )
}

export default page;