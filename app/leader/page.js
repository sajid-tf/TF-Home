import Title from "@/components/common/Title"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero"
import { leaders } from "@/utils/images";
import hero from "@/asset/company/leadership/hero.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Meet the Leaders | TechForing",
  description: "Get to know the driving force behind TechForing, leading the way towards shaping the future of cybersecurity.",
  keywords: "cybersecurity leaders, techforing leadership, cybersecurity company leaders",
  canonical: "https://techforing.com/leader/",
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

      <section className="md:max-w-[1200px] w-full mx-auto">
        <Title className={'py-[20px] border-b-4 border-secondary'}>PROVEN EXPERIENCE, COMBINED LEADERSHIP</Title>
        <div className="text-lightBGBodyText md:px-[100px] px-[50px] py-[10px] md:py-[20px]">
          <p>
            TechForing Ltd. is a premier team of certified professionals. For years, we've remained committed to delivering quality service to individuals, small business owners, and enterprises alike. Our information technology solutions are proven and repeatable. Our team uses a data security approach that synergistically integrates People, Process, and Platform. Also, we place a strong focus on our client's requirements. Employing streamlined methodologies and providing best-of-class service.
          </p>
          <p className="pt-4">
            The groundbreaking leadership you need to consult with you or manage your online team is available. We take pride in our ability to provide seamless integration with no disruption to your workflow. Our team comprises certified professionals with over 120 years of combined experience in our specific industry.
          </p>
        </div>
      </section>
      <AssessmentServiceSection
        role={"Chairman"}
        title={"REHANA PARVEEN"}
        paragraph={"Rehena Parveen is the Chairman of TechForing Ltd. She holds a Bachelor's Degree in Economics from the National University of BD and has over 25 years of industrial experience and excellent command over management, recruitment, and financial data analysis. She has co-founded and has been leading TechForing since day one."}
        variant='secondary'
        image={leaders.chairman}
        alt={"TechForing Chairman"}
        position='center'
      />
      <AssessmentServiceSection
        role={"CEO & MANAGING </br> DIRECTOR"}
        title={"MD. RABIUL ISLAM"}
        paragraph={"Rabiul Islam is the founder and managing director of TechForing Ltd. He is a serial entrepreneur with a passion for technology and engineering and holds a Bachelor's Degree in Information Technology and a Master’s Degree in Electronics and Computer Engineering. He is also C|EH, CISA, CISSP, AWS, CCNA, CCNP certified."}
        variant='secondary'
        image={leaders?.ceo}
        alt={"TechForing Ceo & Managing Director"}
        position='center'
        reverse={true}
      />
      <AssessmentServiceSection
        role={"Managing Partner"}
        title={"PHILLIP R MORAN"}
        paragraph={"Phillip R Moran is the Managing Partner of TechForing Ltd. He is an expert in Nuclear Power Technology and a seasoned business professional. He had served in the US Navy as a Nuclear Machinist. At present he leads the TechForing operation in the USA. He is the driving force behind TechForing's thriving success in America."}
        variant='secondary'
        image={leaders.partner}
        alt={"TechForing Managing Partner"}
        position='center'
      />
      <AssessmentServiceSection
        role={"ADVISOR"}
        title={"SALIM HARIRI"}
        paragraph={"Salim Hariri is a professor and University of Arizona site director of the NSF-funded Center for Cloud and Autonomic Computing. He founded the IEEE/ACM International Symposium on High Performance Distributed Computing, or HPDC, and is the co-founder of the IEEE/ACM International Conference on Cloud and Autonomic Computing. He also serves as editor-in-chief of the scientific journal Cluster Computing."}
        variant='secondary'
        image={leaders.advisor}
        alt={"TechForing Advisor"}
        position='center'
        reverse={true}
      />
    </main>
  )
}

export default page