import Organization from '@/components/HomePage/services/trustedOrganization/Organization'
import CourseDetailSection from '@/components/dynamicSections/CourseDetailSection/CourseDetailSection'
import ExpertInstructors from '@/components/dynamicSections/ExpertInstructors/ExpertInstructors'
import FeaturedInSection from '@/components/dynamicSections/FeaturedInSection/FeaturedInSection'
import GuidelineSection from '@/components/dynamicSections/GuidelineSection/GuidelineSection'
import OpportunityExpertSection from '@/components/dynamicSections/OpportunityExpertSection/OpportunityExpertSection'
import OurFocusSection from '@/components/dynamicSections/OurFocusSection/OurFocusSection'
import VulnerabilityAssessmentSection from '@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection'
import WeDealWithSection from '@/components/dynamicSections/WeDealWithSection/WeDealWithSection'
import { globalImages } from '@/utils/images/globaIImages'
import { GuidelinesLeftSideData, GuidelinesRightSideData } from '@/utils/mock/GuidelineData/GuidelineData'
import { OurFocusData } from '@/utils/mock/OurFocusData/OurFocusData'
import { VulnerabilityAssessmentData } from '@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData'
import { organizationData, featuredData } from '@/utils/mock/dummyData'
import { IdentityTheftData, weDealWithData } from '@/utils/mock/WeDealWithData/WeDealWithData';
import React from 'react'
import ProvidedServiceSection from '@/components/dynamicSections/ProvidedServiceSection/ProvidedServiceSection'
import WeWork from '@/components/common/WeWork/WeWork'
import WeWorkBulletPoint from '@/components/common/WeWorkBulletPoint/WeWorkBulletPoint'
import { WeWorkGridData, empowerBulletWithDescData, empowerBulletWithDescParagraphData, whatWeWorkBulletWithDescData, whatWeWorkBulletWithDescParagraphData, whatWeWorkCheckBoxData, whatWeWorkData } from '@/utils/mock/WeServeSectionData/weServeCardData'
import WeManageCard from '@/components/common/WeManageCard/WeManageCard'
import { WeManageCardData } from '@/utils/mock/WeManageCardData/WeManageCardData'
import WeWorkGridSection from '@/components/dynamicSections/WeWorkGridSection/WeWorkGridSection'
import { ConciergeServiceGridData, FinestSolutionsData, InvestigationMethodData, OSINTServiceData, ProvidedServiceData, WeServeWhomData } from '@/utils/mock/ProvidedServiceData/ProvidedServiceData'
import StayAhead from '@/components/dynamicSections/StayAhead/StayAhead'
import WeServeWhom from '@/components/dynamicSections/WeServeWhom/WeServeWhom'
import ComplianceService from '@/components/dynamicSections/ComplianceService/ComplianceService'
import { ComplianceCertificationsData, ComplianceServiceData, GDPRComplianceData, HIPAAConsultingServicesData, LevelOfPCIData } from '@/utils/mock/ComplianceServiceData/ComplianceServiceData'
import InvestigationMethod from '@/components/dynamicSections/InvestigationMethod/InvestigationMethod'
import IdentityTheft from '@/components/dynamicSections/IdentityTheft/IdentityTheft'
import ConciergeService from '@/components/dynamicSections/ConciergeService/ConciergeService'
import OSINTService from '@/components/dynamicSections/OSINTService/OSINTService'
import HappyClient from '@/components/dynamicSections/HappyClient/HappyClient'
import { HappyClientData } from '@/utils/mock/HappyClientData/HappyClientData'
import OperatingCountries from '@/components/dynamicSections/OperatingCountries/OperatingCountries'
import { OperatingCountriesData } from '@/utils/mock/OperatingCountriesData/OperatingCountriesData'
import TrustedORG from '@/components/dynamicSections/TrustedORG/TrustedORG'
import { OpportunityExportData, OpportunityExportNumberData } from '@/utils/mock/OpportunityExpertData/OpportunityExpertData'
import StrategicPartner from '@/components/dynamicSections/StrategicPartner/StrategicPartner'
import AcademyHero from '@/components/dynamicSections/HeroVariants/AcademyHero'
import CompanyHero from '@/components/dynamicSections/HeroVariants/CompanyHero'
import ExploreHero from '@/components/dynamicSections/HeroVariants/ExploreHero'
import companyHeroBG from '@/assets/hero/more-hero/company-hero.png';
import exploreHeroBG from '@/assets/hero/more-hero/exploreHeroBG.png';
import LegalizedInvestigation from '@/components/dynamicSections/LegalizedInvestigation/LegalizedInvestigation'
import { LegalInvestigationData } from '@/utils/mock/LegalInvestigation/LegalInvestionData'
import WhyChooseTwo from '@/components/dynamicSections/WhyChooseTwo/WhyChooseTwo'
import { WhyChooseTwoData } from '@/utils/mock/WhyChooseTwoData/WhyChooseTwoData'

const page = () => {
    return (
        <main>
            <CompanyHero
                titleFirstLine={"Shaping"}
                titleMiddleLine={"Tomorrows"}
                titleLowerLine={"CyberSecurity"}
                desc={"WE'RE A CYBERSECURITY COMPANY WITH A HUMBLE BEGINNING, AIMING TO SHAPE TOMORROW'S CYBERSECURITY LANDSCAPE"}
                textColorVariant={'secondary'}
                bgImage={companyHeroBG?.src}
            />
            <div className='py-10'>
                <AcademyHero
                    title={<h2 className='text-3xl lg:text-[64px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'>Train With Us <br className='hidden lg:visible' /> To Become A <span className='text-secondary'>Certified</span> <br className='hidden lg:visible' /> Cybersecurity Professional</h2>}
                    btnText={"Get Started"}
                    textColorVariant={'secondary'}
                    bgImage={companyHeroBG?.src}
                />
            </div>
            <div className='py-10'>
                <ExploreHero
                    title={"Secure Your Digital World Today"}
                    isDesc={true}
                    desc={"Cybercriminals are constantly finding new ways to target high-net-worth individuals like you. Don't leave your finances and personal data vulnerable."}
                    bgImage={exploreHeroBG?.src}
                />
            </div>
            <div className='py-10'>
                <ExploreHero
                    title={"CUSTOM PRICING PLANS TAILORED TO YOUR NEEDS"}
                    isDesc={false}
                    bgImage={exploreHeroBG?.src}
                />
            </div>
            <div className='py-10'>
                <ExploreHero
                    title={"HOW CAN WE HELP YOU?"}
                    isDesc={true}
                    desc={"Find advice and answers from our support team fast or get in touch"}
                    bgImage={exploreHeroBG?.src}
                />
            </div>
            <div className='py-10'>
                <Organization
                    title={<h4 className={`text-lightBGText text-lg lg:text-4xl font-bold text-center py-10`}>Trusted By WORLD’S <span className='text-sky'>Top</span> Organizations</h4>}
                    renderedData={organizationData}
                />
            </div>
            <div className='py-10'>
                <Organization
                    title={<h4 className={`text-lightBGText text-lg lg:text-4xl font-bold text-center py-10`}>Trusted By WORLD’S <span className='text-sky'>Top</span> Organizations</h4>}
                    isTitle={false}
                    renderedData={organizationData}
                    BGColor={'light'}
                />
            </div>
            <div className='py-10'>
                <FeaturedInSection
                    isTitle={true}
                    title={"Featured In"}
                    renderedData={featuredData}
                    variants='secondary'
                />
            </div>
            <div className='py-10'>
                <FeaturedInSection
                    isTitle={false}
                    renderedData={featuredData}
                    variants='secondary'
                />
            </div>
            <GuidelineSection
                title={"Tools & Guidelines We Use"}
                desc={"At TechForing, besides automated tools, we use manual testing techniques to validate all automated results and to uncover vulnerabilities and security weaknesses in a manner that is consistent with industry-leading security frameworks highlighted below:"}
                leftSideRenderedData={GuidelinesLeftSideData}
                rightSideRenderedData={GuidelinesRightSideData}
                variants='red'
            />
            <VulnerabilityAssessmentSection
                title={"Steps For Vulnerability Assessments"}
                desc={"TechForing's complete vulnerability assessment services are designed to test your organization's internal and external infrastructure against known vulnerabilities and exposures. You can efficiently fix the issues once you identify vulnerabilities. Our first step is to study the threats that specifically apply to your protected environment. We work from the point of view of an adversary. During this process, we determine all potential avenues adversaries might take to infiltrate, exploit, steal or attack ."}
                renderedData={VulnerabilityAssessmentData}
                variants='red'
            />
            <div className='py-10'>
                <OpportunityExpertSection
                    title={"Opportunity For Cybersecurity Experts"}
                    description={"Lorem ipsum dolor sit amet consectetur. Tellus tortor eu morbi sed suscipit enim suscipit sit ullamcorper. Lorem ipsum dolor sit consectetu Tellus tortor "}
                    variant='secondary'
                    renderData={OpportunityExportData}
                />
            </div>
            <div className='py-10'>
                <OpportunityExpertSection
                    title={"How Fatal Human Error Can Be For Cybersecurity"}
                    isDesc={false}
                    variant='secondary'
                    isNumberTitle={true}
                    renderData={OpportunityExportNumberData}
                />
            </div>
            <div className='py-10'>
                <ExpertInstructors
                    img={globalImages?.exportInstructorBG}
                    title={"Our Instructors Are Industry Expert"}
                    paraOne={"Our instructors are cybersecurity experts who earned their reputation globally by serving individuals and businesses with Ethical Hacking, Data Protection, and Privacy Services. Having worked with different cybersecurity projects for Government agencies and industry-leading private companies, they have established themselves as some of the finest in this business. Our security specialists hold industry top security certifications like C|EH, CHFI, CISA, CISSP, and Security+."}
                    paraTwo={"They call themselves ‘Ethical hackers’ who want to share their long-learned lesson among cybersecurity enthusiasts. As a company, we use their advanced knowledge of computer systems to find vulnerabilities in the most renowned security systems around. Under their guidance, you will be able to sharpen your cybersecurity skillset."}
                    variant='red'
                />
            </div>
            <div className='py-10'>
                <CourseDetailSection
                    title={"Course Details"}
                    desc={"This eight-week course consists of instructional content and expert-led lab classes, which will be a massive boost to becoming certified cybersecurity professional. All you need is a positive attitude and a desire to learn. No prior knowledge is required. Download the course curriculum to unravel the course content."}
                    btnTxt={"Download Curriculum"}
                    variant='secondary'
                />
            </div>
            <div className='py-10'>
                <OurFocusSection
                    title={"Our Focus"}
                    smallTitle={"Pen Testing That Leaves No Stones Unturned"}
                    desc={"We provide penetration testing for many targets–both externally and internally accessible infrastructure and services. This includes web applications, networks, hardware, mobile devices or even humans, through our physical testing. We can deliver our services as a one-time service or on a recurring service for maximum protection."}
                    lowerTitle={"Our Penetration Testing Services Focus on:"}
                    img={globalImages?.ourFocusImg}
                    renderedData={OurFocusData}
                    variant='redThree'
                />
            </div>
            <div className='py-10'>
                <WeDealWithSection
                    title={"Types of Ransomware We Deal With"}
                    renderedData={weDealWithData}
                    variant='secondary'
                />
            </div>
            <div className='py-10'>
                <ProvidedServiceSection
                    title={"Services We Provide"}
                    desc={"At TechForing, we prioritize your organization’s digital security with a focus on tailored solutions and proactive defense. Our expert teams are dedicated to safeguarding your business from the evolving landscape of cyber threats. Our services include:"}
                    renderedData={ProvidedServiceData}
                    imgAlignRight={true}
                />
            </div>
            <div className='py-10'>
                <ProvidedServiceSection
                    title={"Experience The Finest Cybersecurity Solutions"}
                    desc={"We take pride in safeguarding the digital lives of High-Net-Worth Individuals and Corporate Executives, along with their family and households. Our exclusive white-glove personal cybersecurity services include:"}
                    renderedData={FinestSolutionsData}
                    imgAlignRight={false}
                />
            </div>
            <div className='py-10'>
                <div className='w-[360px] lg:w-[1200px] h-fit mx-auto flex flex-col gap-16'>
                    <WeWork
                        imgLeftTextRightAlign={true}
                        variant='tertiary'
                        title={"Who We Serve"}
                        desc={"Our SMB cybersecurity solutions are designed for customers who want simple, affordable protection from cyber threats. Our cybersecurity solutions are scalable and easy to install. They consist of software, hardware, and services that help businesses to protect their data and networks from hackers. Our SMB cybersecurity solutions also help small businesses with threat detection and response and provide training for your employees about cybersecurity best practices."}
                        image={globalImages?.howWeWorkImg}
                        alt={"How We Work"}
                        wrapperImgBG={false}
                    />
                    <WeWork
                        imgLeftTextRightAlign={false}
                        variant='primary'
                        title={"How We Work"}
                        desc={"Our SMB cybersecurity solutions are designed for customers who want simple, affordable protection from cyber threats. Our cybersecurity solutions are scalable and easy to install. They consist of software, hardware, and services that help businesses to protect their data and networks from hackers. Our SMB cybersecurity solutions also help small businesses with threat detection and response and provide training for your employees about cybersecurity best practices."}
                        image={globalImages?.providedServiceImg}
                        alt={"Who We Serve"}
                        wrapperImgBG={false}
                    />
                    <WeWork
                        imgLeftTextRightAlign={true}
                        variant='redThree'
                        title={"How It Work =="}
                        desc={"Our SMB cybersecurity solutions are designed for customers who want simple, affordable protection from cyber threats. Our cybersecurity solutions are scalable and easy to install. They consist of software, hardware, and services that help businesses to protect their data and networks from hackers. Our SMB cybersecurity solutions also help small businesses with threat detection and response and provide training for your employees about cybersecurity best practices."}
                        image={globalImages?.howWeWorkImg}
                        alt={"Who We Serve"}
                        wrapperImgBG={true}
                    />
                    <WeWork
                        imgLeftTextRightAlign={false}
                        variant='primary'
                        title={"How It Work"}
                        desc={"Our SMB cybersecurity solutions are designed for customers who want simple, affordable protection from cyber threats. Our cybersecurity solutions are scalable and easy to install. They consist of software, hardware, and services that help businesses to protect their data and networks from hackers. Our SMB cybersecurity solutions also help small businesses with threat detection and response and provide training for your employees about cybersecurity best practices."}
                        image={globalImages?.providedServiceImg}
                        alt={"Who We Serve"}
                        wrapperImgBG={true}
                    />
                    <WeWorkBulletPoint
                        imgLeftTextRightAlign={true}
                        title={"How We Work With Your Security Provider"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={true}
                        checkBox={false}
                        bulletWithDesc={false}
                        renderedData={whatWeWorkData}
                        variant='redThree'
                    />
                    <WeWorkBulletPoint
                        imgLeftTextRightAlign={false}
                        title={"How We Work With Your Security Provider"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={true}
                        checkBox={false}
                        bulletWithDesc={false}
                        renderedData={whatWeWorkData}
                        variant='secondary'
                    />
                    <WeWorkBulletPoint
                        imgLeftTextRightAlign={true}
                        title={"Who Needs Enterprise Security ?"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={true}
                        bulletWithDesc={false}
                        renderedData={whatWeWorkCheckBoxData}
                        desc={"Every organization, regardless of industry, must prioritize its cybersecurity posture. However, certain industries are particularly vulnerable to cyber-attacks and data breaches due to the sensitive and confidential data they handle, such as-"}
                        lowerDesc={"No Matter what your industry is, TechForing has got you covered."}
                        variant='redThree'
                    />
                    <WeWorkBulletPoint
                        imgLeftTextRightAlign={false}
                        title={"Who Needs Enterprise Security ?"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={true}
                        bulletWithDesc={false}
                        renderedData={whatWeWorkCheckBoxData}
                        desc={"Every organization, regardless of industry, must prioritize its cybersecurity posture. However, certain industries are particularly vulnerable to cyber-attacks and data breaches due to the sensitive and confidential data they handle, such as-"}
                        lowerDesc={"No Matter what your industry is, TechForing has got you covered."}
                        variant='secondary'
                    />
                    <WeWorkBulletPoint
                        imgLeftTextRightAlign={true}
                        title={"Why Cloud Security Managed Services ?"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={false}
                        bulletWithDesc={true}
                        renderedData={whatWeWorkBulletWithDescData}
                        renderParagraph={whatWeWorkBulletWithDescParagraphData}
                        variant='redThree'
                    />
                    <WeWorkBulletPoint
                        imgLeftTextRightAlign={false}
                        title={"Why Cloud Security Managed Services ?"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={false}
                        bulletWithDesc={true}
                        renderedData={whatWeWorkBulletWithDescData}
                        renderParagraph={whatWeWorkBulletWithDescParagraphData}
                        variant='secondary'
                    />
                    <StrategicPartner
                        imgLeftTextRightAlign={true}
                        title={"How We Empower Our Partners"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={false}
                        bulletWithDesc={true}
                        onlyDesc={false}
                        renderedData={empowerBulletWithDescData}
                        renderParagraph={empowerBulletWithDescParagraphData}
                        variant='secondary'
                        topLightBG={true}
                        bottomLightBG={true}
                        leftLightBG={false}
                        rightLightBG={false}
                        topDeepBG={false}
                        bottomDeepBG={false}
                        leftDeepBG={false}
                        rightDeepBG={false}
                    />
                    <StrategicPartner
                        imgLeftTextRightAlign={true}
                        title={"Strategic Partner"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={false}
                        bulletWithDesc={false}
                        onlyDesc={true}
                        renderParagraph={[
                            {
                                id: 1,
                                paragraph: 'Our strategic partners provide the logistics and process counseling from time to time. With their constant support and valuable suggestions, we have been able to penetrate the most far-end markets to reach our customers, who enjoy our robust cybersecurity solutions. We work to improve the resilience of our partners and their customers against cyber threats.'
                            },
                            {
                                id: 2,
                                paragraph: 'Being true strategic partners to us, we are constantly advised on strategy and get solutions tailored to the information security industry. We manage their entire security operations as our partnership stays on in mutually beneficial collaboration.'
                            },
                        ]}
                        variant='secondary'
                        topLightBG={false}
                        bottomLightBG={false}
                        leftLightBG={false}
                        rightLightBG={false}
                        topDeepBG={false}
                        bottomDeepBG={false}
                        leftDeepBG={false}
                        rightDeepBG={true}
                        bigDeepWidth={true}
                    />
                    <StrategicPartner
                        imgLeftTextRightAlign={false}
                        title={"Technology Partner"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={false}
                        bulletWithDesc={false}
                        onlyDesc={true}
                        renderParagraph={[
                            {
                                id: 1,
                                paragraph: 'Partnership with us enables our partners to have the tools and expertise required to bring integrated solutions. We provide innovative cybersecurity services customized to their customers’ needs. Whether you are a software development company, hosting provider, ISP, Telecom Company, tech service provider or web Development Company, we have room for everyone.'
                            },
                            {
                                id: 2,
                                paragraph: 'Our search for the right partners continues until we can deliver smart data protection to our customers and clients.'
                            },
                        ]}
                        variant='secondary'
                        topLightBG={false}
                        bottomLightBG={false}
                        leftLightBG={false}
                        rightLightBG={false}
                        topDeepBG={false}
                        bottomDeepBG={false}
                        leftDeepBG={true}
                        rightDeepBG={false}
                        bigDeepWidth={true}
                    />
                    <StrategicPartner
                        imgLeftTextRightAlign={true}
                        title={"Importance Of Corporate Training"}
                        image={globalImages?.ourFocusImg}
                        alt={"How We Work"}
                        bulletPoint={false}
                        checkBox={false}
                        bulletWithDesc={false}
                        onlyDesc={false}
                        dropDownExpandable={true}
                        renderedData={[
                            {
                                id: 1,
                                title: 'Understanding Today’s Digital Landscape',
                                desc: 'A business needs to stay up to date with the best use and understanding of the digital tools and assets (websites, social networks, mobile devices, and cloud platforms) to avoid lagging the competitor.'
                            },
                            {
                                id: 2,
                                title: 'IoT Developments',
                                desc: 'Businesses need to react quickly to IoT devices’ growing needs, as customer expectations are always changing.'
                            },
                            {
                                id: 3,
                                title: 'The Rise of Ransomware',
                                desc: 'Business executives need proper training to spot phishing, social engineering, or unsecured websites to survive the dramatic rise of ransomware attacks.'
                            },
                            {
                                id: 4,
                                title: 'Data Breaches Are Getting Worse',
                                desc: 'Corporate Employees must be well-versed in data protection, including keeping digital tools updated, data encryption, etc.'
                            },
                            {
                                id: 5,
                                title: 'Automated Data Manipulation',
                                desc: 'This rising trend in cyber attacks mostly refers to data theft or data deletion. It potentially can turn into a long-term earning opportunity for the attackers that businesses need to be wary of.'
                            },
                        ]}
                        variant='secondary'
                        topLightBG={false}
                        bottomLightBG={true}
                        leftLightBG={false}
                        rightLightBG={false}
                        topDeepBG={false}
                        bottomDeepBG={false}
                        leftDeepBG={false}
                        rightDeepBG={true}
                    />
                </div>
            </div>
            <div className='py-10'>
                <WeManageCard
                    title={"Cybersecurity We Manage"}
                    renderedData={WeManageCardData}
                    variant='tertiary'
                />
            </div>
            <div className='py-10'>
                <WeWorkGridSection
                    title={"How We Work"}
                    desc={"Cybercrime investigation techniques differ from one case to another since they're all unique. However, recovering file systems from hacked systems, acquiring digital evidence that could be used to prosecute crimes or writing reports for use in legal proceedings are some of the common tasks a computer crime investigator performs. A general workflow of cybercrime investigations is as follows:"}
                    renderedData={WeWorkGridData}
                    variant='secondaryTwo'
                />
            </div>
            <div className='py-10'>
                <StayAhead
                    variant='green'
                />
            </div>
            <div className='py-10'>
                <WeServeWhom
                    title={"Whom We Serve"}
                    renderedData={WeServeWhomData}
                    variant='green'
                />
            </div>
            <div className='py-10'>
                <ComplianceService
                    titleSection={'Our Approach'}
                    isDesc={false}
                    numberOfGrid={1}
                    renderData={ComplianceServiceData}
                    variant={'sky'}
                    noOfPaddingBottomAfterTitle={2}
                />
            </div>
            <div className='py-10'>
                <ComplianceService
                    titleSection={'Services We offer For GDPR Compliance'}
                    isDesc={true}
                    descSection={'If you have a small business and wish to be GDPR compliant with full security enabled, our managed security services can help your SMB achieve complete GDPR compliance. Let’s take a look at a list of our available GDPR consulting services before heading into details'}
                    numberOfGrid={3}
                    renderData={GDPRComplianceData}
                    variant={'sky'}
                />
            </div>
            <div className='py-10'>
                <ComplianceService
                    titleSection={'Steps Of Our HIPAA Consulting Services'}
                    isDesc={true}
                    descSection={'Our HIPAA consulting services follow these steps to ensure your organization has complete HIPAA compliance.'}
                    descCenterAlign={true}
                    numberOfGrid={1}
                    renderData={HIPAAConsultingServicesData}
                    variant={'sky'}
                />
            </div>
            <div className='py-10'>
                <ComplianceService
                    titleSection={'Types Of Compliance Certifications'}
                    isDesc={false}
                    numberOfGrid={3}
                    renderData={ComplianceCertificationsData}
                    variant={'sky'}
                    topBorder={true}
                    noOfPaddingBottomAfterTitle={4}
                />
            </div>
            <div className='py-10'>
                <ComplianceService
                    titleSection={'Our Approach'}
                    isDesc={true}
                    descSection={'Our PCI DSS services follow these steps:'}
                    descCenterAlign={true}
                    numberOfGrid={2}
                    renderData={LevelOfPCIData}
                    variant={'sky'}
                    leftRightBorder={true}
                    isSubTitle={true}
                    subTitle={'Identifying the Levels of PCI'}
                    isSubDesc={true}
                    subDesc={'PCI compliance has 4 levels purely based on transaction volume, or how many transactions that go through an organization. Each of these levels requires you to undergo a different set of validations:'}
                />
            </div>
            <div className='py-10'>
                <InvestigationMethod
                    title={"Methods That TechForing Follow For Cyber Crime Investigation"}
                    noOfGrid={5}
                    renderData={InvestigationMethodData}
                    variant={'secondaryTwo'}
                />
            </div>
            <div className='py-10'>
                <IdentityTheft
                    title={'Types Of Identity Theft We Deal With'}
                    renderedData={IdentityTheftData}
                    variant='secondary'
                />
            </div>
            <div className='py-10'>
                <ConciergeService
                    title={"TechForing Concierge Cybersecurity Service"}
                    desc={"At TechForing, we provide premier cybersecurity services for high-net-worth individuals, their families, assets, and privacy. Our services include-"}
                    renderedData={ConciergeServiceGridData}
                    variant='green'
                />
            </div>
            <div className='py-10'>
                <OSINTService
                    title={'OSINT Services We provide'}
                    variant='secondary'
                    renderedData={OSINTServiceData}
                />
            </div>
            <div className='py-10'>
                <OSINTService
                    title={'OSINT Services We provide'}
                    variant='purple'
                    renderedData={OSINTServiceData}
                    squareShape={true}
                />
            </div>
            <div className='py-10'>
                <div className='w-[360px] lg:w-[1200px] h-fit mx-auto flex flex-col gap-[28px]'>
                    <div className='flex flex-col gap-[18px]'>
                        <h3 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold capitalize text-center'>We Have A Lot Of Happy Clients</h3>
                        <h4 className='text-lg lg:text-2xl text-lightBGText font-tertiary font-bold capitalize text-center'>With Lot Of Services</h4>
                    </div>
                    <HappyClient
                        title={'Business Cybersecurity'}
                        renderedData={HappyClientData}
                        variant='sky'
                    />
                    <HappyClient
                        title={'Personal Cybersecurity'}
                        renderedData={HappyClientData}
                        variant='green'
                    />
                    <HappyClient
                        title={'Academy'}
                        renderedData={HappyClientData}
                        variant='secondary'
                    />
                </div>
            </div>
            <div className='py-10'>
                <OperatingCountries
                    title={'Countries We Are Operating'}
                    renderedData={OperatingCountriesData}
                    variant='secondary'
                />
            </div>
            <div className='py-10'>
                <TrustedORG variant='sky' />
            </div>
            <div className='py-10'>
                <LegalizedInvestigation
                    renderData={LegalInvestigationData}
                    variant='secondaryTwo'
                    percentage='100%'
                    title={"LEGALIZED INVESTIGATION PROCESS PERFORMED BY THE BOOK"}
                    paragraph={"At TechForing, we believe in processes that are legalized and transparent. We aren’t using any process here that borderlines its legitimacy. Every bit of data we collect is gathered through publicly available information, which falls under the fair use rule. All our intelligence collection methods are also performed while keeping ethical and civil liberties in mind. We utilize everything we can to ensure a good night’s sleep for our clients under security. We don’t use any sort of"}
                />
            </div>
            <div className='py-10'>
                <WhyChooseTwo
                    title={"WHY SUCCESSFUL PEOPLE CHOOSE TECHFORING"}
                    subTitle={"At TechForing, we are committed to safeguarding the digital lives of successful people from all over the world. Our White-Glove Cybersecurity & Threat Detection Solutions are designed to provide you with a seamless, personalized solution."}
                    underSubTitle={"Our commitment to you:"}
                    renderedData={WhyChooseTwoData}
                />
            </div>
        </main>
    )
}

export default page;