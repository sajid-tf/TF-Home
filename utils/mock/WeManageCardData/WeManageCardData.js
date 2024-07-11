import { GoShieldCheck } from "react-icons/go";
import { GiLadybug } from "react-icons/gi";
import { GoTerminal } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Awarness, CryptographyAndCybersecurityIcon, EthicalHackingIcon, ForensicInvestigation, IncidentResponseIcon, NetworkSecurityIcon, OnlineIcon, PremiseIcon, SecureApplicationDevelopment, SelfPlacedIcon, WebSecurityIcon } from "@/components/icons/Academy";
import { Delete, ExplainNeeds, Monitor, PaperWork, Quate, Search, Welcome } from "@/components/icons/PersonalCybersecurity";
import { CybersecurityConsultation, OperationalThreatIntelligence, StrategicThreatIntelligence, TacticalThreatIntelligence } from "@/components/icons/BusinessCybersecurity";
import { Online, Premise, SelfPlaced } from "@/components/icons/Company";
import websiteIcon from "@/asset/business-cybersecurity/SMB/managed-security-solution/icons/website.svg";
import networkIcon from "@/asset/business-cybersecurity/SMB/managed-security-solution/icons/network-security.svg";
import dataCenterIcon from "@/asset/business-cybersecurity/SMB/managed-security-solution/icons/data-center.svg";
import cloudSecurityIcon from "@/asset/business-cybersecurity/SMB/managed-security-solution/icons/cloud-security.svg";
import Image from "next/image";
//plug and play icons
import errorImg from "@/asset/business-cybersecurity/SMB/plug-play-program/icons/error.png";
import instantImg from "@/asset/business-cybersecurity/SMB/plug-play-program/icons/instant.png";
import tailorImg from "@/asset/business-cybersecurity/SMB/plug-play-program/icons/tailor.png";
import resultImg from "@/asset/business-cybersecurity/SMB/plug-play-program/icons/result.png";
import budgetImg from "@/asset/business-cybersecurity/SMB/plug-play-program/icons/budget.png";

const WeManageCardData = [
    {
        id: 1,
        title: 'Strategic Threat Intelligence',
        paragraph: 'Includes national and international socio-economic and political situation analysis to predict future cyber challenges.',
        icon: <GoShieldCheck className='h-full w-full' />
    },
    {
        id: 2,
        title: 'Tactical Threat Intelligence',
        paragraph: 'Includes analyzing your cyber system, finding vulnerabilities, fixing bugs, and integrating your whole cyber system to protect against cybercriminals.',
        icon: <GiLadybug className='h-full w-full' />
    },
    {
        id: 3,
        title: 'Operational Threat Intelligence',
        paragraph: 'Includes factor analysis behind the threat like motives, techniques, and plans of the attackers, and estimates the financial loss for every possible attack.',
        icon: <GoTerminal className='h-full w-full' />
    },
    {
        id: 4,
        title: 'Cybersecurity Consultation',
        paragraph: 'Our experts will not only provide intelligence services but also provide consultation for your IT team.',
        icon: <MdOutlineSupportAgent className='h-full w-full' />
    }
]
const WeManageCardData_ms_data_removal = [
    {
        id: 1,
        title: 'Comprehensive Scan',
        paragraph: "We conduct a thorough search across search engines, data aggregators, and even the hidden corners of the deep web to identify where your personal information is exposed.",
        icon: <Search className='h-[50px] w-[50px] text-white' />
    },
    {
        id: 2,
        title: 'Targeted Remove',
        paragraph: "We contact each website directly and submit a removal request to remove your profile. No matter how complex the process is, we ensure that your personal information is erased from search engines and big broker sites.",
        icon: <Delete className='h-[50px] w-[50px] text-white' />
    },
    {
        id: 3,
        title: 'Ongoing Monitoring',
        paragraph: "We continuously monitor data broker sites and search results to ensure that your information doesn’t reappear. We also look out for your data on other sites as well. If your data reappears after removal (which can happen often), we repeat the removal process.",
        icon: <Monitor className='h-[50px] w-[50px] text-white' />
    }
]

const courseMode = [
    {
        id: 1,
        title: 'ON-PREMISE',
        paragraph: 'Our Cybersecurity analysts will visit your premises and provide training. Instructional material and hands-on counseling will be provided.',
        icon: <PremiseIcon className='size-[50px] text-white' />
    },
    {
        id: 2,
        title: 'ONLINE',
        paragraph: 'Suitable for Remotely working employees in your business. Browser-based hands-on training can be arranged at your convenience.',
        icon: <OnlineIcon className='size-[50px] text-white' />
    },
    {
        id: 3,
        title: 'SELF PACED',
        paragraph: 'The employee can complete this cybersecurity training at his or her own pace and repeat it as often as necessary.',
        icon: <SelfPlacedIcon className='size-[50px] text-white' />
    },
]

const tfEducationCourse = [
    {
        id: 1,
        title: 'ETHICAL HACKING',
        paragraph: 'With the consent of the owner, you will be able to legally hack into websites, databases, servers, networks and perform penetration testing and vulnerability assessment',
        icon: <EthicalHackingIcon className='w-[38px] h-[50px] text-white' />
    },
    {
        id: 2,
        title: 'WEB SECURITY',
        paragraph: "Focusing fully on OWASP top 10 and the most common web vulnerabilities, it'll help web developers learn to securely develop web applications.",
        icon: <NetworkSecurityIcon className='w-[50px] h-[50px] text-white' />
    },
    {
        id: 3,
        title: 'NETWORK SECURITY',
        paragraph: 'Teach about how to develop contingency planning for cybersecurity, hands-on training on hack recovery, malware removal, disaster recovery, etc',
        icon: <WebSecurityIcon className='w-[50px] h-[50px] text-white' />
    },
    {
        id: 4,
        title: 'INCIDENT RESPONSE',
        paragraph: 'There will be discussions on all 7 layers of security, infrastructure security, wifi security, secure network architecture development, suitable for network engineers.',
        icon: <IncidentResponseIcon className='w-[50px] h-[42px] text-white' />
    },
    {
        id: 5,
        title: 'CRYPTOGRAPHY & CYBERSECURITY',
        paragraph: 'Diving deep into cryptography, steganography including the most popular methods like hashing, salting, etc; different decryption techniques and their overall impact on cybersecurity',
        icon: <CryptographyAndCybersecurityIcon className='w-[50px] h-[50px] text-white' />
    },
    {
        id: 6,
        title: 'SECURE APPLICATION DEVELOPMENT',
        paragraph: 'It is focused on secure mobile and desktop application development using Java, .net, and Swift; best practices, using the right tools, know-how your apps will be used, etc.',
        icon: <SecureApplicationDevelopment className='w-[50px] h-[50px] text-white' />
    },
    {
        id: 7,
        title: 'FORENSIC INVESTIGATION',
        paragraph: 'This investigation training involves malware analysis, memory acquisition techniques, retrieve hard evidence from hard drives, analysis of image-video, and variously formatted files.',
        icon: <ForensicInvestigation className='w-[50px] h-[50px] text-white' />
    },
    {
        id: 8,
        title: 'CYBERSECURITY AWARENESS PROGRAM',
        paragraph: 'Cybersecurity fundamentals like setting strong passwords, two-factor authentication, social engineering, phishing, safe surfing, secure email communication, etc.',
        icon: <Awarness className='w-[50px] h-[50px] text-white' />
    },
]

const PartnerBenefitsData = [
    {
        id: 1,
        title: 'Collaboration',
        paragraph: 'We provide you with data security, resources, and expertise for strategic support.',
        icon: <Premise className='h-full w-full' />
    },
    {
        id: 2,
        title: 'Enablement',
        paragraph: 'We infuse cybersecurity into your IT professionals.',
        icon: <Online className='h-full w-full' />
    },
    {
        id: 3,
        title: 'Growth',
        paragraph: 'We help you generate an additional revenue stream and achieve informational growth with adaptive strategies and security.',
        icon: <SelfPlaced className='h-full w-full' />
    },
]

const expertAreas = [
    {
        id: 1,
        title: 'Strategic Threat Intelligence',
        paragraph: 'Includes national and international socio-economic and political situation analysis to predict future cyber challenges.',
        icon: <StrategicThreatIntelligence className='h-full w-full' />
    },
    {
        id: 2,
        title: 'Tactical Threat Intelligence',
        paragraph: 'Includes analyzing your cyber system, finding vulnerabilities, fixing bugs, and integrating your whole cyber system to protect against cybercriminals.',
        icon: <TacticalThreatIntelligence className='h-full w-full' />
    },
    {
        id: 3,
        title: 'Operational Threat Intelligence',
        paragraph: 'Includes factor analysis behind the threat like motives, techniques, and plans of the attackers, and estimates the financial loss for every possible attack.',
        icon: <OperationalThreatIntelligence className='h-full w-full' />
    },
    {
        id: 4,
        title: 'Cybersecurity Consultation',
        paragraph: 'Our experts will not only provide intelligence services but also provide consultation for your IT team.',
        icon: <CybersecurityConsultation className='h-full w-full' />
    }
]

const managed_cybersecurity_service_card_data = [
    {
        id: 1,
        title: 'Website',
        paragraph: 'We will take essential steps to maintain your website such as keeping software & plug-ins up-to-date, adding certificates, implementing smart passwords, etc. to protect your website from a security breach.',
        icon: <Image src={websiteIcon} alt={"website"} className='h-[40px] w-[40px]' />
    },
    {
        id: 2,
        title: 'Network Security',
        paragraph: 'Our managed security services will perform vulnerability scanning on your network and take the necessary steps to ensure that the cybercriminals are out of your network.',
        icon: <Image src={networkIcon} alt={"network"} className='h-[40px] w-[40px]' />
    },
    {
        id: 3,
        title: 'Cloud Infrastructure',
        paragraph: 'Many businesses store data in prominent cloud vendors like Amazon and Microsoft. Our managed Cloud Infrastructure services will help to protect your data and alert you of nefarious activities.',
        icon: <Image src={cloudSecurityIcon} alt={"Cloud Infrastructure"} className='h-[40px] w-[40px]' />
    },
    {
        id: 4,
        title: 'Server & Data Centers',
        paragraph: 'Servers and data centers require top security to preserve sensitive data. Our managed security services will eliminate known vulnerabilities, keep everything up-to-date, and use the right security tools to report on and protect against digital threats.',
        icon: <Image src={dataCenterIcon} alt={"data center"} className='h-[40px] w-[40px]' />
    }
]
const play_plug_card_data = [
    {
        id: 1,
        title: 'Error-Proof Simplicity',
        paragraph: 'Our pre-configured solutions eliminate complex setups, reducing the risk of human mistakes.',
        icon: <Image src={errorImg} alt={"website"} className='h-[40px] w-[40px]' />
    },
    {
        id: 2,
        title: 'Instant Protection',
        paragraph: 'Get up and running immediately with our ready-to-go solutions, saving valuable time and resources.',
        icon: <Image src={instantImg} alt={"network"} className='h-[40px] w-[40px]' />
    },
    {
        id: 3,
        title: 'Tailored to You',
        paragraph: 'Our adaptable solutions can be fully customized to meet the unique needs of your business.',
        icon: <Image src={tailorImg} alt={"Cloud Infrastructure"} className='h-[40px] w-[40px]' />
    },
    {
        id: 4,
        title: 'Rapid Results',
        paragraph: 'Experience faster implementation and a quicker return on your investment with our streamlined solutions.',
        icon: <Image src={resultImg} alt={"data center"} className='h-[40px] w-[40px]' />
    },
    {
        id: 5,
        title: 'Budget-Friendly',
        paragraph: 'Enjoy comprehensive protection without breaking the bank, perfect for small businesses and tight budgets.',
        icon: <Image src={budgetImg} alt={"Cloud Infrastructure"} className='h-[40px] w-[40px]' />
    }
]
const onBoardCardData = [
    {
        id: 1,
        icon: <ExplainNeeds className="w-[50px] h-[50px]" />,
        title: "Private Cybersecurity Consultation",
        paragraph: 'We’ll gain a deep understanding of your digital footprint, risk exposure, and protection needs.'
    },
    {
        id: 2,
        icon: <Quate className="w-[50px] h-[50px]" />,
        title: "Customized Solution Plan and Pricing",
        paragraph: 'Our analysts will design a multi-layered security blueprint tailored to your unique needs with full transparency.'
    },
    {
        id: 3,
        icon: <PaperWork className="w-[50px] h-[50px]" />,
        title: "Simple Onboarding Process",
        paragraph: 'Just go through a few straightforward onboarding steps, and we’ll handle the rest seamlessly.'
    },
    {
        id: 3,
        icon: <Welcome className="w-[50px] h-[50px]" />,
        title: "Enjoy Elite White-Glove Solution",
        paragraph: 'Relax as our expert team implements, monitors, and maintains your personalized security protocols around the clock.'
    }
]
export {
    WeManageCardData,
    PartnerBenefitsData,
    courseMode,
    tfEducationCourse,
    WeManageCardData_ms_data_removal,
    expertAreas,
    managed_cybersecurity_service_card_data,
    onBoardCardData,
    play_plug_card_data
}