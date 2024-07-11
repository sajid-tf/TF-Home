import Subtitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import WeWorkBulletPoint from "@/components/common/WeWorkBulletPoint/WeWorkBulletPoint";
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero";
import clientHeroBG from '@/assets/hero/more-hero/client-stories-hero.png';
import privacyPolicyImg from '@/asset/privacy-policy/Privacy-Policy.webp';
import termsImg from '@/asset/privacy-policy/Terms-of-use.webp';
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "TechForing | Cybersecurity Consulting for Businesses & Individuals",
  description: "TechForing protects business and personal IT infrastructure with tailored cybersecurity consulting services for ironclad protection. Contact us to learn more,",
  keywords: "cybersecurity privacy policy, cybersecurity terms and conditions, cybersecurity terms of use",
  canonical: "https://techforing.com/trust/",
};

const page = () => {
  return (
    <div className="flex flex-col md:gap-20 gap-10 pb-8">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <CompanyHero
        titleFirstLine={"Shaping"}
        titleMiddleLine={"Tomorrows"}
        titleLowerLine={"CyberSecurity"}
        desc={"WE'RE A CYBERSECURITY COMPANY WITH A HUMBLE BEGINNING, AIMING TO SHAPE TOMORROW'S CYBERSECURITY LANDSCAPE"}
        textColorVariant={'secondary'}
        bgImage={clientHeroBG?.src}
      />
      <section className="md:max-w-[1200px] w-full mx-auto">
        <Title className={'py-[20px] border-b-4 border-secondary'}>YOUR TRUSTED PARTNER IN CYBERSECURITY</Title>
        <div className="text-lightBGBodyText md:px-[100px] px-[50px] py-[10px] md:py-[20px]">
          <p>
            For data security, we have made a reputation in providing long-term solutions for various Government and non-Government Agencies that are always under threat from cybercriminals. Our clients are bound with us in the Data Agreement Policy, having signed the NDA. Last, we are obligated by strict privacy policies. So you can be rest assured that your data is in safe hands.
          </p>
          <p className="pt-4">
            We try our level best to stay consistent with industry best practices, considering all the disruptions to our employees, applications, vendors, and everything.
          </p>
        </div>
      </section>
      <section>
        <Subtitle className="text-center py-6">
          TRUST IS FOUNDATIONAL TO OUR COMPANY AND HOW WE
          ENGAGE WITH OUR CLIENTS
        </Subtitle>
        <WeWorkBulletPoint
          imgLeftTextRightAlign={true}
          title={"TECHFORING PRIVACY POLICY"}
          image={privacyPolicyImg}
          alt={"Privacy Policy"}
          bulletPoint={false}
          checkBox={true}
          bulletWithDesc={false}
          desc={"We strictly maintain the key principles of transparency and accountability, Reliable third parties, information integrity and control, client and customer benefit."}
          lowerDesc={""}
          variant='secondary'
        />
        <WeWorkBulletPoint
          imgLeftTextRightAlign={false}
          title={"TECHFORING TERMS OF USE"}
          image={termsImg}
          alt={"Terms of Use"}
          bulletPoint={false}
          checkBox={true}
          bulletWithDesc={false}
          desc={"Please read these Terms and Conditions carefully before using our service. It conditioned your access to and use of the Service on your acceptance of and compliance with these terms."}
          lowerDesc={""}
          variant='secondary'
        />
      </section>
    </div>
  )
}

export default page;

