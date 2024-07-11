const { WeServeCard } = require("@/components/common");
import { FaComputer } from "react-icons/fa6";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { GoLaw } from "react-icons/go";
import { MdCurrencyExchange } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoHammerOutline } from "react-icons/io5";
import { PiHandshakeLight } from "react-icons/pi";
import { BsHospital } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { Finance, Healthcare, Hospitality, Manufacturing, Mining, OilGas, PersonalReputationManagement, PropertyManagement, Retail, SportAndEntertainment, TelevisonAndMovie } from "@/components/icons/PersonalCybersecurity";
import { Banking, Buisness, ECommerceBusiness, Education, EducationalInstitutions, FinancialInstitute, GovermentAgencies, HealthCare, HealthCareInstituion, ISPCompanies, IT, LawEnforcements, LawFirm, PenetrationHospitality, PetrationRetail, SoftwareCompanies, TelecommunicationCompanies, Transport, WealthManagement } from "@/components/icons/BusinessCybersecurity";

const weServeCardData = [
    {
        id: 1,
        card: <WeServeCard
            content={{
                title: 'Software Companies',
                svg: <FaComputer className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 2,
        card: <WeServeCard
            content={{
                title: 'Government Agencies',
                svg: <HiOutlineBuildingOffice className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 3,
        card: <WeServeCard
            content={{
                title: 'Law Enforcement',
                svg: <GoLaw className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 4,
        card: <WeServeCard
            content={{
                title: "Financial Institutie's",
                svg: <MdCurrencyExchange className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 5,
        card: <WeServeCard
            content={{
                title: 'Telecommunication Companies',
                svg: <PiTelegramLogoLight className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 6,
        card: <WeServeCard
            content={{
                title: 'Educational Institutions',
                svg: <MdCastForEducation className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 7,
        card: <WeServeCard
            content={{
                title: 'ISP Companies',
                svg: <FaInternetExplorer className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 8,
        card: <WeServeCard
            content={{
                title: 'E-commerce Business',
                svg: <HiOutlineShoppingCart className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 9,
        card: <WeServeCard
            content={{
                title: 'Law Firm',
                svg: <IoHammerOutline className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 10,
        card: <WeServeCard
            content={{
                title: 'Small / Medium Business',
                svg: <PiHandshakeLight className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 11,
        card: <WeServeCard
            content={{
                title: 'Health Care Institutions',
                svg: <BsHospital className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 12,
        card: <WeServeCard
            content={{
                title: 'Wealth Management',
                svg: <LiaMoneyBillWaveSolid className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
];

const whatWeWorkData_MS_HACK = [
    {
        id: 1,
        point: 'Minimize the damage'
    },
    {
        id: 2,
        point: "Stop the attack if it's still in progress"
    },
    {
        id: 3,
        point: "Return your account's access to you"
    },
    {
        id: 4,
        point: 'Prevent possible future attacks from taking place'
    }
]
const whatWeWorkData = [
    {
        id: 1,
        point: 'Minimize the damage'
    },
    {
        id: 2,
        point: "Stop the attack if it's still in progress"
    },
    {
        id: 3,
        point: "Return your account's access to you"
    },
    {
        id: 4,
        point: 'Prevent possible future attacks from taking place'
    }
]
const whatWeWorkData_MS_Remove_Malware = [
    {
        id: 1,
        point: 'Windows PC'
    },
    {
        id: 2,
        point: "MacOS devices"
    },
    {
        id: 3,
        point: "iOS devices"
    },
    {
        id: 4,
        point: 'Android devices'
    },
    {
        id: 4,
        point: 'Other Smart Devices'
    }
]

const pcsBenefits = [
    {
        id: 1,
        point: 'Protection from all types of cyber threats and malicious activity'
    },
    {
        id: 2,
        point: 'Simple, easy, and effective solutions'
    },
    {
        id: 3,
        point: 'Worry-free security (We will deal with it)'
    },
    {
        id: 4,
        point: 'Cover all areas of your digital footprint'
    },
    {
        id: 5,
        point: 'Total confidentiality'
    },
    {
        id: 6,
        point: 'Advice and training where needed'
    },
    {
        id: 7,
        point: 'Get 24/7 support from a dedicated security expert'
    },
]

const whatWeWorkCheckBoxData = [
    {
        id: 1,
        checkbox: 'Financial'
    },
    {
        id: 2,
        checkbox: 'Healthcare'
    },
    {
        id: 3,
        checkbox: 'Government'
    },
    {
        id: 4,
        checkbox: 'Energy & Utilities'
    },
    {
        id: 5,
        checkbox: 'Retail'
    },
    {
        id: 6,
        checkbox: 'Manufacturing'
    }
];
const nftServicesData = [
    {
        id: 1,
        point: "Fraudulent NFT Investigation"
    },
    {
        id: 2,
        point: "NFT recovery services"
    },
    {
        id: 3,
        point: "Investigate NFT scams"
    },
    {
        id: 4,
        point: "NFT wallet transaction analysis"
    },
    {
        id: 5,
        point: "Stolen NFT tracing and recovery"
    },
    {
        id: 6,
        point: "NFT Investment Platforms Investigation"
    },
    {
        id: 7,
        point: "NFT wallet security and protection"
    },
    {
        id: 8,
        point: "Stolen/Lost NFT recovery"
    },
    {
        id: 9,
        point: "NFT hack investigation"
    }
];
const nftServicespara = [
    {
        id: 1,
        paragraph: 'Our NFT scam investigation specializes in investigating and uncovering NFT scams, as well as helping individuals who have fallen victim to NFT scams recover their funds or assets. Our services include:'
    }
]


const whatWeWorkBulletWithDescData = [
    {
        id: 1,
        point: 'Reducing downtime in events of attacks'
    },
    {
        id: 2,
        point: 'Provide a well-rounded security system in the cloud infrastructure'
    },
    {
        id: 3,
        point: 'Comprehensive security measures tailored for the cloud environment.'
    },
    {
        id: 4,
        point: 'Frees up your IT team to focus on core business tasks.'
    },
    {
        id: 5,
        point: 'Helps meet industry and regulatory requirements for data protection.'
    },
    {
        id: 6,
        point: 'Early identification and mitigation of security risks.'
    },
    {
        id: 7,
        point: 'Faster incident response and recovery to limit disruptions.'
    },
    {
        id: 8,
        point: 'Defends against common threats like denial-of-service (DoS) and distributed denial-of-service (DDoS) attacks.'
    },
]
const malwareRemovealBulletData = [
    {
        id: 1,
        point: 'CMS Website Malware Removal'
    },
    {
        id: 2,
        point: 'Custom Made Web Application Malware Clean'
    },
    {
        id: 3,
        point: 'Workstation Ransomware Removal'
    },
    {
        id: 5,
        point: 'Cloud Server Crypto Mining Malware Removal'
    },
    {
        id: 6,
        point: 'Network Virus Removal'
    },
]

const malwareRemovalParagraphData = [
    {
        id: 1,
        paragraph: 'TechForing brings over a decade of cybersecurity expertise in cybersecurity to protect your organization with our malware removal service. We remove malware for both small businesses and large enterprises.'
    }

]
const whatWeWorkBulletWithDescParagraphData = [
    {
        id: 1,
        paragraph: 'Our Managed Security Services (MSS) use high-availability operation centers to provide outsourced monitoring and management of your security devices and services, reducing the need for in-house security personnel for your enterprise. Cloud security managed services are a specialized form of MSS, focused on protecting cloud environments and helping organizations with their cloud journey to run their cloud environment efficiently. Cloud-managed security services can help your organization with:'
    }
]

const WeWorkGridData = [
    {
        id: 1,
        title: 'Documentation and Background Check',
        description: 'We\'ll take the victim\'s statement regarding the cyber attack, then check the public and private records and databases to learn about the individuals involved in the situation.'
    },
    {
        id: 2,
        title: 'Gathering Evidence',
        description: 'Evidence gathering is the most important part of any investigation process. We\'ll try to gather evidence from the source of the incident and analyze the situation.'
    },
    {
        id: 3,
        title: 'Digital Forensics Analysis',
        description: 'Our experts meticulously analyze the gathered evidence, using advanced <strong>digital forensics</strong>  techniques to uncover hidden clues and identify the perpetrators.'
    },
    {
        id: 4,
        title: 'Tracking Down the Cyber Criminals',
        description: 'With the help of law enforcement agencies and a court order, we work with the internet service provider, as well as telecommunications, and network companies to trace the IP addresses and online activities of the criminals, leading to their takedown.'
    }
]
const WeWorkGridDataCyberScam = [
    {
        id: 1,
        title: 'Crypto Transfer Analysis',
        description: 'We start our cryptocurrency scam recovery process by examining the narrative of events and the timeline of the scheme. Then, our cryptocurrency recovery experts will analyze the available data & trace your virtual assets. This process helps us identify the exchange wallet address with a digital forensic investigation. Once we know who is holding your cryptocurrency, we go after that criminal.'
    },
    {
        id: 2,
        title: 'Digital Forensic',
        description: 'We will perform <a class="text-sky hover:underline" target="_blank" href="/mysecurity/osint_investigations/">open-source intelligence (OSINT)</a> to extract data, and analyze said data using our <a class="text-sky hover:underline" target="_blank" href="/digital_forensic_investigation/">digital forensic services</a> from millions of data points on the Blockchain.'
    },
    {
        id: 3,
        title: 'Scammer Identification',
        description: 'We will try to trace the scammers by attacking their devices directly. With the help of zero-day vulnerability, we can trace their IP, location, and true identity.'
    },
    {
        id: 4,
        title: 'Crypto Asset Recovery',
        description: 'We will hunt down the scammers and force them to return your digital assets to you. You '
    }
]

const empowerBulletWithDescData = [
    {
        id: 1,
        point: 'Because of the high demand for specialized cybersecurity services, you have a unique selling point to capture a huge potential market.'
    },
    {
        id: 2,
        point: 'We provide your training, appliances, and consultation for free.'
    }
]
const empowerBulletWithDescData_pricing = [
    {
        id: 1,
        point: 'Electronic Devices to Audit'
    },
    {
        id: 2,
        point: 'Social Media Accounts to Secure'
    },
    {
        id: 3,
        point: 'Cloud Storage or Servers to Secure'
    },
    {
        id: 4,
        point: 'Data or Bad Links to Remove'
    },
    {
        id: 5,
        point: 'Devices to Investigate for Crime and Digital Forensics'
    },
]

const empowerBulletWithDescData_data_removal = [
    {
        id: 1,
        checkbox: 'Your name, signature, address, phone number, date of birth, etc.'
    },
    {
        id: 2,
        checkbox: 'Email accounts'
    },
    {
        id: 3,
        checkbox: 'Credit information'
    },
    {
        id: 4,
        checkbox: 'Bank account documentation'
    },
    {
        id: 5,
        checkbox: ' Public Records'
    },
    {
        id: 6,
        checkbox: 'Employment information'
    },
    {
        id: 7,
        checkbox: 'Photographs'
    },
    {
        id: 8,
        checkbox: 'Internet Protocol (IP) address'
    },
    {
        id: 9,
        checkbox: 'Browser history'
    },
    {
        id: 10,
        checkbox: 'Location data'
    },
    {
        id: 11,
        checkbox: 'Voice print and facial recognition data'
    },
    {
        id: 12,
        checkbox: 'GPS data from a mobile device.'
    },
]
const academicPartner = [
    {
        id: 1,
        point: 'By taking training from us and spreading awareness to your school, colleague, or university.'
    },
    {
        id: 2,
        point: 'By introducing our cybersecurity training course to your institute or any other educational institute'
    },
    {
        id: 3,
        point: "Many universities in their computer science or IT departments want to provide a Cybersecurity course as an elective. Still, they might not have a lecturer or don't know how to develop the syllabus. So we step in."
    },
    {
        id: 4,
        point: 'You can work with our cybersecurity academy team by enrolling in faculty training and developing a better lab setup or course delivery options.'
    }
]

const empowerBulletWithDescParagraphData = [
    {
        id: 1,
        paragraph: 'Data brokers & cybercriminals are always mining data from the internet, which includes'
    }
]

const osIntInvestigationData = {
    desc: [
        {
            id: 1,
            paragraph: "In the cybersecurity world, collecting the correct information can make or break the whole process of both cyber offense and cyber defense."
        },
        {
            id: 2,
            paragraph: "TechForing’s OSINT investigation can help investigators gather data from public resources, ensuring the authenticity and legitimacy of the data."
        },
        {
            id: 3,
            paragraph: "OSINT is intelligence built upon publicly accessible data. This intelligence then goes through analysis and aids any kind of investigation."
        },
        {
            id: 4,
            paragraph: "Some of the vital open-source intelligence techniques include"
        }
    ],
    techniques: [
        {
            id: 1,
            point: 'Human Intelligence (HUMINT)'
        },
        {
            id: 2,
            point: "Imagery Intelligence And Measurement (IMINT)"
        },
        {
            id: 3,
            point: "Measurement And Signatures Intelligence (MASINT)"
        },
        {
            id: 4,
            point: 'Signals Intelligence (SIGINT)'
        },
        {
            id: 5,
            point: 'Social Media Intelligence (SOCMINT)'
        }
    ]
}


const empowerBulletWithDescParagraphData_pricing = [
    {
        id: 1,
        paragraph: 'Personal Cybersecurity cost depends on the number of-'
    }
]


const manageWithSolutionBulletWithDescData = [
    {
        id: 1,
        point: 'We discuss and assess clients’ requirements and provide the best-fit solutions for threat hunting based on their pain points and business objectives.'
    },
    {
        id: 2,
        point: 'Our cybersecurity consultants will train your IT team in understanding and defending against present or imminent cyber dangers.'
    },
    {
        id: 3,
        point: 'We can provide remote support to your security in charge through secured video conference calls in case of an emergency.'
    },
    {
        id: 4,
        point: 'We deliver monthly reports as per the deal with individual businesses. Our hands-on solutions are always available to download.'
    }
]

const cybercrimeInvestigationProcess = [
    {
        id: 1,
        checkbox: 'Cyber Harassment & Bullying'
    },
    {
        id: 2,
        checkbox: 'Financial Account Hacks'
    },
    {
        id: 3,
        checkbox: 'Cyber Scams & Phishing Attacks'
    },
    {
        id: 4,
        checkbox: 'Identity Theft'
    },
    {
        id: 5,
        checkbox: 'Personal Email Recovery'
    },
    {
        id: 6,
        checkbox: 'Social Media Hack Recovery'
    },
    {
        id: 7,
        checkbox: "Personal Device Hack Recovery"
    },
    {
        id: 8,
        checkbox: 'Mobile Forensic Investigation'
    }
];

const osintServices = [
    {
        id: 1,
        card: <WeServeCard
            content={{
                title: 'Finance',
                svg: <Finance className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 2,
        card: <WeServeCard
            content={{
                title: 'Healthcare',
                svg: <Healthcare className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 3,
        card: <WeServeCard
            content={{
                title: 'Hospitality',
                svg: <Hospitality className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 4,
        card: <WeServeCard
            content={{
                title: "Manufacturing",
                svg: <Manufacturing className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 5,
        card: <WeServeCard
            content={{
                title: 'Mining',
                svg: <Mining className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 6,
        card: <WeServeCard
            content={{
                title: 'Oil & Gas',
                svg: <OilGas className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 7,
        card: <WeServeCard
            content={{
                title: 'Personal Reputation Management',
                svg: <PersonalReputationManagement className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },

    {
        id: 8,
        card: <WeServeCard
            content={{
                title: 'Property Management',
                svg: <PropertyManagement className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 9,
        card: <WeServeCard
            content={{
                title: 'Retail',
                svg: <Retail className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },

    {
        id: 10,
        card: <WeServeCard
            content={{
                title: 'Sports & Entertainment',
                svg: <SportAndEntertainment className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 11,
        card: <WeServeCard
            content={{
                title: 'Television & Movie Studios',
                svg: <TelevisonAndMovie className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },

];

const bcsWeServeCardsData = [
    {
        id: 1,
        card: <WeServeCard
            content={{
                title: 'Software Companies',
                svg: <SoftwareCompanies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 2,
        card: <WeServeCard
            content={{
                title: 'Government Agencies',
                svg: <GovermentAgencies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 3,
        card: <WeServeCard
            content={{
                title: 'Law Enforcement',
                svg: <LawEnforcements className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 4,
        card: <WeServeCard
            content={{
                title: "Financial Institutie's",
                svg: <FinancialInstitute className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 5,
        card: <WeServeCard
            content={{
                title: 'Telecommunication Companies',
                svg: <TelecommunicationCompanies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 6,
        card: <WeServeCard
            content={{
                title: 'Educational Institutions',
                svg: <EducationalInstitutions className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 7,
        card: <WeServeCard
            content={{
                title: 'ISP Companies',
                svg: <ISPCompanies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 8,
        card: <WeServeCard
            content={{
                title: 'E-commerce Business',
                svg: <ECommerceBusiness className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 9,
        card: <WeServeCard
            content={{
                title: 'Law Firm',
                svg: <LawFirm className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 10,
        card: <WeServeCard
            content={{
                title: 'Small / Medium Business',
                svg: <Buisness className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 11,
        card: <WeServeCard
            content={{
                title: 'Health Care Institutions',
                svg: <HealthCareInstituion className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 12,
        card: <WeServeCard
            content={{
                title: 'Wealth Management',
                svg: <WealthManagement className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
];

const penetrationService = [
    {
        id: 1,
        card: <WeServeCard
            content={{
                title: 'Retail',
                svg: <PetrationRetail className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'odd'}
            moreThanSixCard={true}
        />,
    },
    {
        id: 2,
        card: <WeServeCard
            content={{
                title: 'Transport',
                svg: <Transport className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'even'}
            moreThanSixCard={true}
        />,
    },
    {
        id: 3,
        card: <WeServeCard
            content={{
                title: 'Education',
                svg: <Education className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'odd'}
            moreThanSixCard={true}
        />,
    },
    {
        id: 4,
        card: <WeServeCard
            content={{
                title: "Banking",
                svg: <Banking className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'even'}
            moreThanSixCard={true}
        />,
    },
    {
        id: 5,
        card: <WeServeCard
            content={{
                title: 'Healthcare',
                svg: <HealthCare className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'odd'}
            moreThanSixCard={true}
        />,
    },
    {
        id: 6,
        card: <WeServeCard
            content={{
                title: 'Hospitality',
                svg: <PenetrationHospitality className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'even'}
            moreThanSixCard={true}
        />,
    },
    {
        id: 7,
        card: <WeServeCard
            content={{
                title: 'IT',
                svg: <IT className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
            moreThanSixCard={true}
        />,
    }
];

const plugAndPlayServiceCardData = [
    {
        id: 1,
        card: <WeServeCard
            content={{
                title: "Financial Institutes",
                svg: <FinancialInstitute className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 2,
        card: <WeServeCard
            content={{
                title: 'Educational Institutes',
                svg: <EducationalInstitutions className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 3,
        card: <WeServeCard
            content={{
                title: 'E-Commerce Businesses',
                svg: <ECommerceBusiness className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 4,
        card: <WeServeCard
            content={{
                title: 'Law Firm',
                svg: <LawEnforcements className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 5,
        card: <WeServeCard
            content={{
                title: 'Small & Medium Businesses',
                svg: <Buisness className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 6,
        card: <WeServeCard
            content={{
                title: 'Software Companies',
                svg: <SoftwareCompanies className="w-[50px] h-[50px] text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
];

const compliance_consulting_Serve_data = [
    {
        id: 1,
        card: <WeServeCard
            content={{
                title: 'Software Companies',
                svg: <SoftwareCompanies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 2,
        card: <WeServeCard
            content={{
                title: 'Government Agencies',
                svg: <GovermentAgencies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 3,
        card: <WeServeCard
            content={{
                title: 'Law Enforcement',
                svg: <LawEnforcements className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 4,
        card: <WeServeCard
            content={{
                title: "Financial Institutie's",
                svg: <FinancialInstitute className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 5,
        card: <WeServeCard
            content={{
                title: 'Telecommunication Companies',
                svg: <TelecommunicationCompanies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'odd'}
        />,
    },
    {
        id: 6,
        card: <WeServeCard
            content={{
                title: 'Wealth Management',
                svg: <WealthManagement className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 7,
        card: <WeServeCard
            content={{
                title: 'Educational Institutions',
                svg: <EducationalInstitutions className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 8,
        card: <WeServeCard
            content={{
                title: 'ISP Companies',
                svg: <ISPCompanies className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 9,
        card: <WeServeCard
            content={{
                title: 'E-commerce Business',
                svg: <ECommerceBusiness className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },
    {
        id: 10,
        card: <WeServeCard
            content={{
                title: 'Law Firm',
                svg: <LawFirm className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
    {
        id: 11,
        card: <WeServeCard
            content={{
                title: 'Small / Medium Business',
                svg: <Buisness className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'even'}
        />,
    },

    {
        id: 12,
        card: <WeServeCard
            content={{
                title: 'Health Care Institutions',
                svg: <HealthCareInstituion className="w-full h-full text-lightBGText" />
            }}
            childEvenOdd={'oddBottom'}
        />,
    },
];

export {
    weServeCardData,
    whatWeWorkData,
    whatWeWorkData_MS_HACK,
    whatWeWorkCheckBoxData,
    whatWeWorkBulletWithDescData,
    whatWeWorkBulletWithDescParagraphData,
    WeWorkGridData,
    empowerBulletWithDescData,
    empowerBulletWithDescParagraphData,
    academicPartner,
    malwareRemovealBulletData,
    malwareRemovalParagraphData,
    pcsBenefits,
    whatWeWorkData_MS_Remove_Malware,
    empowerBulletWithDescData_data_removal,
    nftServicesData,
    nftServicespara,
    osIntInvestigationData,
    empowerBulletWithDescParagraphData_pricing,
    empowerBulletWithDescData_pricing,
    manageWithSolutionBulletWithDescData,
    cybercrimeInvestigationProcess,
    osintServices,
    bcsWeServeCardsData,
    penetrationService,
    plugAndPlayServiceCardData,
    compliance_consulting_Serve_data,
    WeWorkGridDataCyberScam
}