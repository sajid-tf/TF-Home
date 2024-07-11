import { Button, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png'
import TechForingDifference from "@/components/common/TFDifference"
import { TFDifferenceData, controlDigitalSecurityData, protectionBannerData, whiteGloveProtectionData } from "@/utils/mock/dummyData"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import { globalImages } from "@/utils/images/globaIImages"
import WhiteGloveProtection from "@/components/dynamicSections/WhiteGloveProtection"
import ProtectionBanner from "@/components/dynamicSections/ProtectionBanner"
import CTABanner from "@/components/common/CTABanner"
import ExploreHero from "@/components/dynamicSections/HeroVariants/ExploreHero"
import exploreHeroBG from '@/asset/personal-cybersecurity/explore/on-boarding/hero.webp';
import Link from "next/link"
import WeManageCard from "@/components/common/WeManageCard/WeManageCard"
import { onBoardCardData } from "@/utils/mock/WeManageCardData/WeManageCardData"
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Client Onboarding | TechForing",
  description: "Ready to get onboard?",
  keywords: "",
  canonical: "https://techforing.com/mysecurity/on_board/",
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
        title={"Secure Your Digital World Today"}
        isDesc={true}
        desc={"Cybercriminals are constantly finding new ways to target high-net-worth individuals like you. Don't leave your finances and personal data vulnerable."}
        bgImage={exploreHeroBG?.src}
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondary'
      />
      <WeManageCard
        title={"How Our Concierge Cybersecurity Process Protects You"}
        renderedData={onBoardCardData}
        variant='secondary'
      />
      <TechForingDifference color="secondary" data={TFDifferenceData} />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondary' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started Today!
            </Link>
          </Button>
        }
        img={globalImages.secureOrganizationImg}
        className={{ borderColor: 'border-secondary' }}
        title="Get Around-the-Clock Protection and Rapid Response!"
        subTitle="No matter where you are or what you're doing online, our vigilant analysts monitor your security 24/7. At the first sign of any threat, we rapidly investigate, diagnose, and resolve the issue."
        variant="secondary"
      />
      <WhiteGloveProtection color="secondary" data={whiteGloveProtectionData} />
      <ProtectionBanner color="secondary" data={protectionBannerData} />
      <CTABanner color="primary" data={controlDigitalSecurityData} />
    </div>
  )
}

export default page