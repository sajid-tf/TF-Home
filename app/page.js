import EBook from "@/components/HomePage/eBook/EBook";
import Hero from "@/components/HomePage/heroSection/Hero";
import Services from "@/components/HomePage/services/Services";
import Schedule from "@/components/HomePage/schedule/Schedule";
import Products from "@/components/HomePage/products/Products";
import Help from "@/components/HomePage/help/Help";
import OurJourney from "@/components/HomePage/ourJourney/OurJourney";
import WhyChoose from "@/components/HomePage/whyChoose/WhyChoose";
import OurResources from "@/components/HomePage/ourResources/OurResources";
import SEOHead from '@/components/common/SEOHead/SEOHead';

export const metadata = {
  title: "TechForing | Cybersecurity Consulting for Businesses & Individuals",
  description: "TechForing protects business and personal IT infrastructure with tailored cybersecurity consulting services for ironclad protection. Contact us to learn more,",
  keywords: "cybersecurity consulting (cybersecurity consultants, cyber security consultants, cybersecurity consultant, cybersecurity consulting firm, cybersecurity consulting firms)",
  canonical: "https://techforing.com/",
};

export default function Home() {
  return (
    <section className="flex flex-col md:gap-24 gap-10">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <Hero />
      <EBook />
      <Services />
      <Schedule />
      <Products />
      <Help />
      <OurJourney />
      <WhyChoose />
      <OurResources />
    </section>
  );
}
