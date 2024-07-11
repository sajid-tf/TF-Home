import Organization from "@/components/HomePage/services/trustedOrganization/Organization"
import TermsPolicyTextCard from "@/components/common/TermsPolicy/TermsPolicyTextCard"
import Title from "@/components/common/Title"
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero"
import companyHeroBG from '@/assets/hero/more-hero/company-hero.png';
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "TechForing | Cybersecurity Consulting for Businesses & Individuals",
  description: "TechForing protects business and personal IT infrastructure with tailored cybersecurity consulting services for ironclad protection. Contact us to learn more,",
  keywords: "cybersecurity terms and conditions (terms and conditions, terms of use, terms of service, terms of agreement)",
  canonical: "https://techforing.com/terms/",
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
        bgImage={companyHeroBG?.src}
      />
      <section className="md:max-w-[1200px] w-full mx-auto px-3">
        <Organization
          title={
            <Title className={'text-center py-2 md:py-5 border-x-[20px] w-[200px] sm:w-[400px] md:w-[600px] text-[18px] sm:text-[24px] md:text-[36px] border-secondary mx-auto'}>TERMS AND CONDITIONS</Title>
          }
          BGColor={'light'}
        />
        <div className="text-lightBGBodyText py-[5px] md:py-[10px] mt-2">
          <p>
            Please read these Terms and Conditions carefully before using the <a href="https://www.techforing.com" target="_blank">https://www.techforing.com</a> website operated by TechForing Ltd.
            We condition your access to and use of the Service on your acceptance of and compliance with these terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <br />
          <b className="pt-4">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</b>
        </div>

        <TermsPolicyTextCard
          title="Acceptance of Terms"
          paragraph1="By accessing or using the TechForing website or services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not access the Service."
        />

        <TermsPolicyTextCard
          title="Purchases"
          paragraph1="When making purchases through our Service, you may be required to provide certain information relevant to your Purchase, including but not limited to your name, email, phone number, address, credit card information, or bank details."
          paragraph2="We prioritize the security and confidentiality of your personal information. All transactions are processed securely using industry-standard encryption protocols.
    "
        />

        <TermsPolicyTextCard
          title="Subscriptions"
          paragraph1="Certain parts of our Service may be offered on a subscription basis. By subscribing, you agree to recurring billing on a weekly, monthly, half-yearly, or yearly basis, depending on the subscription plan chosen."
          paragraph2="You may cancel your subscription at any time, and cancellation will take effect at the end of the current billing cycle."
        />

        <TermsPolicyTextCard
          title="User-Generated Content"
          paragraph1="Our Service may allow you to post, link, store, share, or otherwise make available information, text, graphics, videos, or other materials (Content).You are solely responsible for the Content you post and must ensure that it complies with applicable laws and regulations."
          paragraph2="We reserve the right to remove any Content that violates these Terms or is deemed inappropriate."
        />
        <TermsPolicyTextCard
          title="Links to Third-Party Websites"
          paragraph1="The TechForing website may contain links to third-party websites or services that are not owned or controlled by TechForing Ltd. We are not responsible for the content, privacy policies, or practices of any third-party websites or services."
          paragraph2="We encourage you to review the terms and privacy policies of any third-party websites you visit."
        />
        <TermsPolicyTextCard
          title="Links to Third-Party Websites"
          paragraph1="The TechForing website may contain links to third-party websites or services that are not owned or controlled by TechForing Ltd. We are not responsible for the content, privacy policies, or practices of any third-party websites or services."
          paragraph2="We encourage you to review the terms and privacy policies of any third-party websites you visit."
        />
        <TermsPolicyTextCard
          title="Changes to Terms"
          paragraph1="We reserve the right to modify or replace these Terms of Use at any time, at our sole discretion. If we make material changes to these terms, we will notify you by email or by posting a notice on our website at least 15 days before the changes take effect.
      "
          paragraph2="Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised terms.
      "
        />
        <TermsPolicyTextCard
          title="Contact Us"
          paragraph1="If you have any questions about these Terms of Use, please contact us.
      "
          paragraph2="Thank you for choosing TechForing!
      "
        />

        <p className="mt-2"> <b>TechForing Ltd.</b> </p>
      </section>

    </div>
  )
}

export default page