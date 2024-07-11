import highNetIndividual from '@/asset/personal-cybersecurity/high-net-worth-person.webp';
import cLevelBusiness from '@/asset/personal-cybersecurity/business-executive.webp';
import politicalLeader from '@/asset/personal-cybersecurity/political-leader.webp';
import mediaCeleb from '@/asset/personal-cybersecurity/media-celebrity.webp';
import { businessCybersecurity, pcsMySecurity } from "@/utils/images";
import { AssessmentParameters, BountyProgram, BugBountyPolicy, CRMData, CloudServices, CustomerData, EmailServers, FinanCialData, ManageVendors, PlayPlugEightIcon, PlayPlugFiveIcon, PlayPlugFourIcon, PlayPlugOneIcon, PlayPlugSevenIcon, PlayPlugSixIcon, PlayPlugThreeIcon, PlayPlugTwoIcon, RewardIcon, RiskIcon, TechnicalFindings, VerificationMethods, VirtualNetworks, Vulnerabilitymanagement } from "@/components/icons/BusinessCybersecurity";
import { Audit, BackgroundCheck, EmployeeMonitor, Exposer, IdentifyingSecurityGap, MonitoringProtection } from "@/components/icons/PersonalCybersecurity";
import { CLevelEightIcon, CLevelFiveIcon, CLevelFourIcon, CLevelNineIcon, CLevelOneIcon, CLevelSevenIcon, CLevelSixIcon, CLevelTenIcon, CLevelThreeIcon, CLevelTwoIcon, ConciergeServiceEightIcon, ConciergeServiceFiveIcon, ConciergeServiceFourIcon, ConciergeServiceNineIcon, ConciergeServiceOneIcon, ConciergeServiceSevenIcon, ConciergeServiceSixIcon, ConciergeServiceTenIcon, ConciergeServiceThreeIcon, ConciergeServiceTwoIcon, MediaCelebEightIcon, MediaCelebFiveIcon, MediaCelebFourIcon, MediaCelebNineIcon, MediaCelebOneIcon, MediaCelebSevenIcon, MediaCelebSixIcon, MediaCelebTenIcon, MediaCelebThreeIcon, MediaCelebTwoIcon, PoliticalEightIcon, PoliticalFiveIcon, PoliticalFourIcon, PoliticalNineIcon, PoliticalOneIcon, PoliticalSevenIcon, PoliticalSixIcon, PoliticalTenIcon, PoliticalThreeIcon, PoliticalTwoIcon } from '@/components/dynamicSections/ConciergeService/ConciergeSVG';

const ProvidedServiceData = [
    {
        id: 1,
        itemName: "Risk Assessment",
        variant: "red",
        data: {
            title: "Discover Hidden Vulnerabilities Before They're Exploited",
            desc: "Do you know where your most valuable data is? Or which employees might pose a risk, intentionally or not? Our comprehensive risk assessment examines your technology, employees, and external threats from cybercriminals and cyberattacks. By proactively identifying and addressing these vulnerabilities, we’ll help you strengthen your security posture before an attack can strike.",
            image: businessCybersecurity?.riskAssesment,
            alt: "Risk Assessment",
            btnTxt: "Learn More",
            btnUrl: "/cybersecurity_risk_assessment/"
        }
    },
    {
        id: 2,
        itemName: "Incident Response",
        variant: "yellow",
        data: {
            title: "Recover Swiftly from Cyber Attacks",
            desc: "Even with the best preparations, cyberattacks can still occur. And when they do, our incident response team will be the first to respond. We’ll work swiftly to investigate, contain, and neutralize the cyber attack, minimize the damage, identify the culprit, and restore your business operations as quickly as possible, so you can navigate the aftermath of the attack and emerge stronger.",
            image: businessCybersecurity?.incidentResponse,
            alt: "Incident Response",
            btnTxt: "Explore More",
            btnUrl: "/incident_response_service/"
        }
    },
    {
        id: 3,
        itemName: "Managed Security Services",
        variant: "purple",
        data: {
            title: "Fully Managed, Affordable, 24/7 Protection",
            desc: "Don't let cybersecurity drain your resources. Our fully managed solution provides round-the-clock monitoring, threat detection, and incident response, all at a price that fits your budget. Utilizing advanced security tools like firewalls and intrusion detection systems, we'll defend your IT infrastructure, giving you the peace of mind to focus on what you do best – running your business.",
            image: businessCybersecurity?.managedSecuritySolution,
            alt: "Managed Security Services",
            btnTxt: "Explore More",
            btnUrl: "/managed_solution/"
        }
    },
    {
        id: 4,
        itemName: "Security Compliance",
        variant: "sky",
        data: {
            title: "Stay Ahead of The Constantly Changing Compliances",
            desc: "The government body, regulatory bodies, and industry standards organizations enforce stringent compliance requirements, which are always developing. Staying compliant with these industry standards can be a maze of overlapping requirements. We are one of the best cyber security consulting firms to determine your organization’s specific needs to suit frameworks like HIPAA, GDPR, PCI DSS, and ISO 27001, so you can stay compliant, avoid costly penalties, and maintain customer trust.",
            image: businessCybersecurity?.securityCompliance,
            alt: "Security Compliance",
            btnTxt: "Explore More",
            btnUrl: "/compliance_consulting/"
        }
    },
]

const FinestSolutionsData = [
    {
        id: 1,
        itemName: "Data & Privacy Protection",
        variant: "yellowThree",
        data: {
            title: "Locate The Endangered Information Assets To Prevent A Potential Cyber Attack",
            desc: "Protect your sensitive data with our exclusive Data &amp; Privacy Protection Service. With personalized solutions, secure communication, and vigilant monitoring, we safeguard your sensitive information and digital assets from advanced threat actors and evolving threats.",
            image: pcsMySecurity?.dataPrivacy,
            alt: "Data & Privacy Protection",
            btnTxt: "Explore More",
            points: [
                {
                    id: 1,
                    name: 'Financial Assets'
                },
                {
                    id: 2,
                    name: 'Reputation'
                },
                {
                    id: 3,
                    name: 'Smart Home'
                },
                {
                    id: 4,
                    name: 'Family Assets'
                }
            ]
        }
    },
    {
        id: 2,
        itemName: "Cyber Investigation",
        variant: "secondaryTwo",
        data: {
            title: "Locate The Endangered Information Assets To Prevent A Potential Cyber Attack",
            desc: "Discover the world of Cyber Investigation Services. Our team of experts will unravel digital mysteries to safeguard your online well-being and reveal vital insights. We work with law enforcement agencies to counter illegal monitoring, online harassment, scamming, and hacking, as well as performing personal investigations using OSINT.",
            image: pcsMySecurity?.cyberInvestigation,
            alt: "Cyber Investigation",
            btnTxt: "Explore More",
            points: [
                {
                    id: 1,
                    name: 'Online Scam'
                },
                {
                    id: 2,
                    name: 'Identity Theft'
                },
                {
                    id: 3,
                    name: 'Cyber Harassment'
                },
                {
                    id: 4,
                    name: 'Online Blackmail'
                }
            ]
        }
    },
    {
        id: 3,
        itemName: "Incident Response",
        variant: "purpleThree",
        data: {
            title: "Locate The Endangered Information Assets To Prevent A Potential Cyber Attack",
            desc: "On average, around 2244 cyberattacks take place every day, one every 39 seconds. If you have encountered suspicious activity, suffered from a data breach, or simply want to fortify your cybersecurity defenses, our ironclad protection has got you covered 24/7. Safeguard your online world with cutting-edge solutions today!",
            image: pcsMySecurity?.incidentResponse,
            alt: "Incident Response",
            btnTxt: "Explore More",
            points: [
                {
                    id: 1,
                    name: 'Hacking'
                },
                {
                    id: 2,
                    name: 'Personal Data'
                },
                {
                    id: 3,
                    name: 'Devices'
                },
                {
                    id: 4,
                    name: 'Social Media'
                }
            ]
        }
    },
]

const WeServeWhomData = [
    {
        id: 1,
        url: "/mysecurity/vip_cyber_defense/",
        image: highNetIndividual,
        alt: "High-Net-Worth Individual",
        title: "High-Net-Worth Individual",
        desc: 'Being people with substantial wealth and assets, High-Net-Worth individuals are always a high-priority target of cybercriminals.'
    },
    {
        id: 2,
        url: "/mysecurity/executive_protection/",
        image: cLevelBusiness,
        alt: "C-Level Business Executive",
        title: "C-Level Business Executive",
        desc: 'High-level business executives are the key figures of their respective organizations, making them the prime targets for cybercriminals seeking to gain unauthorized access to company information.'
    },
    {
        id: 3,
        url: "/mysecurity/cyber_security_for_government/",
        image: politicalLeader,
        alt: "Political Leaders",
        title: "Political <br/> Leaders",
        desc: 'In the world of politics, maintaining a secure digital footprint is vital. Cybercriminals are always targeting politicians and their family members to gain leverage over them or sell their vital data to adversaries.'
    },
    {
        id: 4,
        url: "/mysecurity/media_celebrities/",
        image: mediaCeleb,
        alt: "Media Celebrities",
        title: "Media <br/> Celebrities",
        desc: 'With their fame and public image, celebrities often face the risk of online harassment and reputation damage. Cybercriminals, as well as journalists and paparazzi, are always targeting celebrities trying to gain access to their private information.'
    }
]

const InvestigationMethodData = [
    {
        id: 1,
        itemName: 'Information Gathering'
    },
    {
        id: 2,
        itemName: 'Investigation'
    },
    {
        id: 3,
        itemName: 'Evidence Collection'
    },
    {
        id: 4,
        itemName: 'Uncovered Truth'
    },
    {
        id: 5,
        itemName: 'Final Result'
    }
]


const ConciergeServiceGridData = [
    {
        id: 1,
        title: 'Threat Intelligence and Monitoring',
        icon: <ConciergeServiceOneIcon />,
        details: [
            {
                id: 1,
                title: 'Continuous Monitoring',
                description: 'We ensure your safety through real-time monitoring and advanced threat intelligence.'
            },
            {
                id: 2,
                title: 'Tailored Threat Assessments',
                description: 'Our personalized threat assessments ensure a targeted and effective approach to safeguarding your digital assets.'
            }
        ]
    },
    {
        id: 2,
        title: 'Digital Footprint Management',
        icon: <ConciergeServiceTwoIcon />,
        details: [
            {
                id: 1,
                title: 'Digital Presence Optimization',
                description: 'We will optimize your digital presence to enhance your security without compromising your online visibility.'
            },
            {
                id: 2,
                title: 'Reputation Protection',
                description: 'Our strategies for reputation management mitigate online risks just in time to keep your and your brand’s reputation intact.'
            }
        ]
    },
    {
        id: 3,
        title: 'Secure Communication Channels',
        icon: <ConciergeServiceThreeIcon />,
        details: [
            {
                id: 1,
                title: 'Encrypted Communication',
                description: 'We will protect you against security compromises and maintain the confidentiality of your information by adopting encrypted communication channels.'
            },
            {
                id: 2,
                title: 'VPN and Secure Email Services',
                description: 'We will help you shield your communication from potential threats with VPNs and secure email services.'
            }
        ]
    },
    {
        id: 4,
        title: 'Family Cybersecurity Awareness and Protection',
        icon: <ConciergeServiceFourIcon />,
        details: [
            {
                id: 1,
                title: 'Comprehensive Family Training',
                description: 'Tailored cybersecurity education for all family members, including children and elderly relatives.'
            },
            {
                id: 2,
                title: 'Holistic Protection Measures',
                description: 'Specialized support and resources to safeguard family members of all ages from cyber threats, promoting a secure online environment for everyone.'
            }
        ]
    },
    {
        id: 5,
        title: 'Incident Response Planning',
        icon: <ConciergeServiceFiveIcon />,
        details: [
            {
                id: 1,
                title: 'Proactive Incident Response',
                description: 'Our dedicated incident response team is always prepared to mitigate and manage security breaches instantly and effectively.'
            },
            {
                id: 2,
                title: 'Reputation Management',
                description: 'Our incident response team also works diligently to protect your reputation, and maintain trust and credibility after a security incident.'
            }
        ]
    },
    {
        id: 6,
        title: 'Phishing Awareness and Training',
        icon: <ConciergeServiceSixIcon />,
        details: [
            {
                id: 1,
                title: 'Phishing Simulation',
                description: 'Our custom-made regular phishing simulation exercises train you to recognize and combat evolving phishing tactics effectively.'
            },
            {
                id: 2,
                title: 'Ongoing Education',
                description: 'Our experts will also provide you with continuous informative materials to keep you well-informed about evolving phishing threats.'
            }
        ]
    },
    {
        id: 7,
        title: 'Endpoint Protection',
        icon: <ConciergeServiceSevenIcon />,
        details: [
            {
                id: 1,
                title: 'Device Security',
                description: 'Our experts will secure your devices from compromises and malware attacks through robust endpoint protection.'
            },
            {
                id: 2,
                title: 'Regular Security Updates',
                description: 'We will ensure to keep your devices safe from all potential threats by prioritizing regular, timely updates.'
            }
        ]
    },
    {
        id: 8,
        title: 'Access Controls and Authentication',
        icon: <ConciergeServiceEightIcon />,
        details: [
            {
                id: 1,
                title: 'Strong Access Controls',
                description: 'Our experts will protect your sensitive data by implementing strong access controls to prevent unauthorized access to your devices and accounts.'
            },
            {
                id: 2,
                title: 'Multi-Factor Authentication',
                description: 'Mitigate the risk of compromised accounts with our multi-factor authentication and stop any unauthorized access to your accounts.'
            }
        ]
    },
    {
        id: 9,
        title: 'Personal Cybersecurity Awareness',
        icon: <ConciergeServiceNineIcon />,
        details: [
            {
                id: 1,
                title: 'Ongoing Education',
                description: 'We provide continuous cybersecurity education for VIPs, their families, and their support staff so they can have an informed approach to personal cybersecurity.'
            },
            {
                id: 2,
                title: 'Customized Training',
                description: 'We pair tailored training programs based on recent cybersecurity trends so you can better recognize and respond to evolving cybersecurity threats.'
            }
        ]
    },
    {
        id: 10,
        title: 'Privacy Protection',
        icon: <ConciergeServiceTenIcon />,
        details: [
            {
                id: 1,
                title: 'Personal Data Handling',
                description: 'Our advanced data handling ensures top-tier protection through encryption, robust access controls, and continuous monitoring.'
            },
            {
                id: 2,
                title: 'Legal Compliance',
                description: 'Get seamless legal compliance with our deep understanding of legal intricacies, ensuring that your privacy aligns with the latest regulations.'
            }
        ]
    }
]

const OSINTServiceData = [
    {
        id: 1,
        icon: <BackgroundCheck className='w-[50px] h-[50px] text-inherit' />,
        title: 'Personal Information Audit',
        description: 'Gain a comprehensive understanding of what information about you is publicly available online. We\'ll analyze social media, forums, data breaches, and more to provide you with a detailed report.'
    },
    {
        id: 2,
        icon: <EmployeeMonitor className='w-[50px] h-[50px] text-inherit' />,
        title: 'Online Reputation Management',
        description: 'Take control of your online narrative. We\'ll identify potential threats to your reputation, help you address negative content, and craft a positive online image.'
    },
    {
        id: 3,
        icon: <IdentifyingSecurityGap className='w-[50px] h-[50px] text-inherit' />,
        title: 'Background Checks',
        description: 'Whether it\'s for personal relationships, potential roommates, or online connections, our background checks provide valuable insights into someone\'s online presence and activities.'
    },
    {
        id: 4,
        icon: <Exposer className='w-[50px] h-[50px] text-inherit' />,
        title: 'Doxxing and Harassment Investigations',
        description: 'If you\'re a victim of online harassment or doxxing, we can help. We\'ll identify perpetrators, gather evidence, and provide you with the information you need to protect yourself.'
    }
]

const BugBountyGridItemsData = [
    {
        id: 1,
        icon: <AssessmentParameters className='text-white w-[50px] h-[50px]' />,
        title: 'Assessment Parameters'
    },
    {
        id: 2,
        icon: <Vulnerabilitymanagement className='text-white w-[50px] h-[50px]' />,
        title: 'Vulnerability Management'
    },
    {
        id: 3,
        icon: <BountyProgram className='text-white w-[50px] h-[50px]' />,
        title: 'Bounty Program'
    },
    {
        id: 4,
        icon: <BugBountyPolicy className='text-white w-[50px] h-[50px]' />,
        title: 'Bug Bounty Policy'
    },
    {
        id: 5,
        icon: <VerificationMethods className='text-white w-[50px] h-[50px]' />,
        title: 'Verification Methods'
    },
    {
        id: 6,
        icon: <TechnicalFindings className='text-white w-[50px] h-[50px]' />,
        title: 'Technical Findings To Be Shared'
    },
]

const EnterpriseGridItemsData = [
    {
        id: 1,
        icon: <ManageVendors className="h-[50px] w-[49.98px]" />,
        title: 'Managing Vendors'
    },
    {
        id: 2,
        icon: <VirtualNetworks className="h-[50px] w-[48.018px]" />,
        title: 'Virtual/Physical Networks'
    },
    {
        id: 3,
        icon: <CloudServices className="h-[50.038px] w-[50px]" />,
        title: 'Cloud Servers'
    },
    {
        id: 4,
        icon: <EmailServers className="h-[50px] w-[43.543px]" />,
        title: 'Email Servers'
    },
    {
        id: 5,
        icon: <CRMData className="h-[50px] w-[49.94px]" />,
        title: 'Sales Teams’ CRM Data'
    },
    {
        id: 6,
        icon: <CustomerData className="h-[50px] w-[42.728px]" />,
        title: 'Customer Data'
    },
    {
        id: 7,
        icon: <FinanCialData className="h-[49.847px] w-[50px]" />,
        title: 'Financial Data'
    },
]

const concierge_executive_protectionData = [
    {
        id: 1,
        title: 'Bespoke Security Strategies',
        icon: <CLevelOneIcon />,
        details: [
            {
                id: 1,
                title: 'Bespoke Security Strategies',
                description: "We don't believe in one-size-fits-all, your cybersecurity strategy will be as unique as your fingerprint. We meticulously crafted a security strategy to align with your unique role, responsibilities, and vulnerabilities."
            }
        ]
    },
    {
        id: 2,
        title: 'Proactive Threat Hunting',
        icon: <CLevelTwoIcon />,
        details: [
            {
                id: 1,
                title: 'Proactive Threat Hunting',
                description: 'Our state-of-the-art AI and human expertise work in tandem to identify and neutralize threats before they impact you or your organization.'
            }
        ]
    },
    {
        id: 3,
        title: '360° Defense',
        icon: <CLevelThreeIcon />,
        details: [
            {
                id: 1,
                title: '360° Defense',
                description: 'We safeguard every aspect of your digital presence – from personal devices and home networks to corporate systems and cloud accounts, leaving no room for cybercriminals to exploit.'
            }
        ]
    },
    {
        id: 4,
        title: 'Comprehensive Device Protection',
        icon: <CLevelFourIcon />,
        details: [
            {
                id: 1,
                title: 'Comprehensive Device Protection',
                description: 'We secure all your devices – smartphones, laptops, tablets, and even home IoT devices – with advanced security measures to safeguard your data and privacy.'
            }
        ]
    },
    {
        id: 5,
        title: 'Social Media Protection',
        icon: <CLevelFiveIcon />,
        details: [
            {
                id: 1,
                title: 'Social Media Protection',
                description: 'We meticulously monitor and protect your social media accounts, protecting you from social engineering, phishing attacks, and reputational damage.'
            }
        ]
    },
    {
        id: 6,
        title: 'Complete Cloud Security',
        icon: <CLevelSixIcon />,
        details: [
            {
                id: 1,
                title: 'Complete Cloud Security',
                description: 'We secure your cloud environments and data, ensuring confidentiality, integrity, and availability for your critical business operations.'
            }
        ]
    },
    {
        id: 7,
        title: 'Family & Home Security',
        icon: <CLevelSevenIcon />,
        details: [
            {
                id: 1,
                title: 'Family & Home Security',
                description: "We understand that your personal life is directly linked to your professional one. That's why we extend our protection to your home network and family devices, safeguarding what matters most."
            }
        ]
    },
    {
        id: 8,
        title: 'Continuous Education & Empowerment',
        icon: <CLevelEightIcon />,
        details: [
            {
                id: 1,
                title: 'Continuous Education & Empowerment',
                description: 'We provide you with the knowledge and tools to make informed decisions and stay ahead of the latest threats, building your resilience against cyberattacks.'
            }
        ]
    },
    {
        id: 9,
        title: 'Travel Security',
        icon: <CLevelNineIcon />,
        details: [
            {
                id: 1,
                title: 'Travel Security',
                description: "We provide specialized protection for your devices and data while you're on the move, ensuring you stay secure wherever your business takes you."
            }
        ]
    },
    {
        id: 10,
        title: 'Incident Response and Recovery',
        icon: <CLevelTenIcon />,
        details: [
            {
                id: 1,
                title: 'Incident Response and Recovery',
                description: "In the event of a cyberattack, our experts will swiftly respond to contain the threat, mitigate damage, and restore your systems and data."
            }
        ]
    },

]

const ConciergeServiceForPoliticData = [
    {
        id: 1,
        title: 'Bespoke Protection',
        icon: <PoliticalOneIcon />,
        details: [
            {
                id: 1,
                title: 'Bespoke Protection',
                description: 'We customize security measures to your specific needs and responsibilities, ensuring a robust defense against targeted cyber threats.'
            },
        ]
    },
    {
        id: 2,
        title: 'Advanced Threat Detection',
        icon: <PoliticalTwoIcon />,
        details: [
            {
                id: 1,
                title: 'Advanced Threat Detection',
                description: 'Our cutting-edge technology proactively identifies and neutralizes potential risks before they escalate, protecting your assets and reputation'
            },
        ]
    },
    {
        id: 3,
        title: '24/7 Monitoring',
        icon: <PoliticalThreeIcon />,
        details: [
            {
                id: 1,
                title: '24/7 Monitoring',
                description: 'Our vigilant team monitors your digital environment around the clock, providing real-time alerts and rapid response to any emerging threats.'
            },
        ]
    },
    {
        id: 4,
        title: 'Proactive Risk Mitigation',
        icon: <PoliticalFourIcon />,
        details: [
            {
                id: 1,
                title: 'Proactive Risk Mitigation',
                description: 'We anticipate and address threats before they become critical, ensuring your digital defenses remain ahead of the curve.'
            },
        ]
    },
    {
        id: 5,
        title: 'Empowerment Through Education',
        icon: <PoliticalFiveIcon />,
        details: [
            {
                id: 1,
                title: 'Empowerment Through Education',
                description: 'We offer comprehensive training programs to educate you and your team on best practices for cybersecurity, fostering a security-conscious culture.'
            },
        ]
    },
    {
        id: 6,
        title: 'Secure Communications',
        icon: <PoliticalSixIcon />,
        details: [
            {
                id: 1,
                title: 'Secure Communications',
                description: 'Our solutions protect your digital communications from interception and manipulation, guaranteeing the confidentiality and integrity of your information.'
            },
        ]
    },
    {
        id: 7,
        title: 'Family Security',
        icon: <PoliticalSevenIcon />,
        details: [
            {
                id: 1,
                title: 'Family Security',
                description: 'We extend our protection to your family, implementing measures to safeguard their privacy and security in the digital realm.'
            },
        ]
    },
    {
        id: 8,
        title: 'Two-Factor Authentication',
        icon: <PoliticalEightIcon />,
        details: [
            {
                id: 1,
                title: 'Two-Factor Authentication',
                description: "We reinforce your digital security with two-factor authentication, adding an extra layer of protection against unauthorized access."
            },
        ]
    },
    {
        id: 9,
        title: 'Global Threat Intelligence',
        icon: <PoliticalNineIcon />,
        details: [
            {
                id: 1,
                title: 'Global Threat Intelligence',
                description: 'We leverage global threat intelligence networks to stay ahead of emerging cyber threats, ensuring your defenses are always up-to-date.'
            },
        ]
    },
    {
        id: 10,
        title: 'Confidentiality and Trust',
        icon: <PoliticalTenIcon />,
        details: [
            {
                id: 1,
                title: 'Confidentiality and Trust',
                description: 'We operate with the utmost discretion and maintain strict confidentiality, giving you peace of mind that your cybersecurity is in expert hands.'
            },
        ]
    }
]

const ConciergeServiceForMediaChelibratyData = [
    {
        id: 1,
        title: 'Adaptive Threat Intelligence',
        icon: <MediaCelebOneIcon />,
        details: [
            {
                id: 1,
                title: 'Adaptive Threat Intelligence',
                description: 'Stay one step ahead with our advanced threat intelligence. We continuously monitor the evolving cyber landscape, ensuring that your defenses are always ready to counter the latest threats targeting media personalities.'
            },
        ]
    },
    {
        id: 2,
        title: 'Personalized Security Strategies',
        icon: <MediaCelebTwoIcon />,
        details: [
            {
                id: 1,
                title: 'Personalized Security Strategies',
                description: ' Embrace security designed exclusively for you. Our concierge services understand the intricacies of your public profile, creating personalized strategies that address the nuances of your online presence, from social media engagements to private communications.'
            },
        ]
    },
    {
        id: 3,
        title: 'Real-time Monitoring and Response',
        icon: <MediaCelebThreeIcon />,
        details: [
            {
                id: 1,
                title: 'Real-time Monitoring and Response',
                description: 'Experience the peace of mind that comes with 24/7 monitoring. Our experts vigilantly watch over your digital footprint, swiftly responding to any anomalies or potential threats to ensure immediate mitigation.'
            },
        ]
    },
    {
        id: 4,
        title: 'Comprehensive Social Media Protection',
        icon: <MediaCelebFourIcon />,
        details: [
            {
                id: 1,
                title: 'Comprehensive Social Media Protection',
                description: 'Safeguard your interactions on social media platforms. Our services extend beyond traditional security measures to encompass the unique risks associated with your pervasive social media presence, shielding you from impersonation, reputation damage, and privacy breaches.'
            },
        ]
    },
    {
        id: 5,
        title: 'Proactive Training and Awareness',
        icon: <MediaCelebFiveIcon />,
        details: [
            {
                id: 1,
                title: 'Proactive Training and Awareness',
                description: 'Empower yourself against evolving threats through personalized training sessions. We equip you with the knowledge to recognize and thwart cyber risks, fostering a proactive cybersecurity mindset that enhances your resilience in the face of sophisticated attacks.'
            },
        ]
    },
    {
        id: 6,
        title: 'Secure Connectivity, Anywhere, Anytime',
        icon: <MediaCelebSixIcon />,
        details: [
            {
                id: 1,
                title: 'Secure Connectivity, Anywhere, Anytime',
                description: "Embrace constant connectivity without compromising security. Our solutions are designed to accommodate your need for seamless online engagement, providing robust protection whether you're working on set, traveling, or enjoying downtime."
            },
        ]
    },
    {
        id: 7,
        title: 'Rapid Incident Response and Recovery',
        icon: <MediaCelebSevenIcon />,
        details: [
            {
                id: 1,
                title: 'Rapid Incident Response and Recovery',
                description: 'In the unfortunate event of a cyber incident, trust our rapid response and recovery capabilities. We minimize downtime, mitigate damages, and expedite your return to a secure and functional digital environment.'
            },
        ]
    },
    {
        id: 8,
        title: 'Identity Protection and Digital Footprint Management',
        icon: <MediaCelebEightIcon />,
        details: [
            {
                id: 1,
                title: 'Identity Protection and Digital Footprint Management',
                description: "Manage your digital identity with precision. Our services encompass comprehensive identity protection, minimizing the risk of impersonation, and actively managing your digital footprint to enhance both security and privacy."
            },
        ]
    },
    {
        id: 9,
        title: 'Cutting-edge Technologies',
        icon: <MediaCelebNineIcon />,
        details: [
            {
                id: 1,
                title: 'Cutting-edge Technologies',
                description: ' Stay at the forefront of cybersecurity with our utilization of cutting-edge technologies. From AI-driven threat detection to encryption advancements, our services leverage the latest innovations to fortify your defenses against emerging threats.'
            },
        ]
    },
    {
        id: 10,
        title: 'Confidentiality and Trust',
        icon: <MediaCelebTenIcon />,
        details: [
            {
                id: 1,
                title: 'Confidentiality and Trust',
                description: 'Your privacy is our utmost priority. TechForing operates with the highest standards of confidentiality and trust, ensuring that your cybersecurity measures align seamlessly with your personal and professional values.'
            },
        ]
    }
]
const OSINTServiceDataForPlugAndPlay = [
    {
        id: 1,
        icon: <PlayPlugOneIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Cybersecurity & Privacy Program',
        description: 'Any organization facing major cyber threats must implement AI through a well-thought-out, integrated strategy; instead of adding additional capabilities bolted onto the existing systems. To do so, we provide a multi-pronged Cybersecurity & Privacy Program, a customizable IT security service tailored for small and medium-sized businesses that need easy access to administrative controls. This Program deals with complex data collection, storage, disclosure, transfer, and removal issues.'
    },
    {
        id: 2,
        icon: <PlayPlugTwoIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Risk Assessment',
        description: "Cybersecurity analysts collect necessary information on the existing system and detect fatal threats that can sabotage the security controls of the business. After vulnerability analysis, we put together a report detailing every loophole and the potential threat that needs immediate care and deliver actionable recommendations to the decision-makers. Every organization's digital asset, i.e. data center, mobile application, server & network, cloud infrastructure, and desktop application is thoroughly analyzed and assessed to ensure their overall safety."
    },
    {
        id: 3,
        icon: <PlayPlugThreeIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Data Privacy & Protection',
        description: 'Comprehensive data protection is mandatory for avoiding security breaches and regulatory non-compliance. Failure to secure your data can result in lost productivity, diminished reputation, fines, and lawsuits. Our SMB turnkey cyber solutions help you protect your personal and business information. We serve around-the-clock privacy protection strategies to offset risks to ensure secure data transfer and internal data exchange regularly.'
    },
    {
        id: 4,
        icon: <PlayPlugFourIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Vendor Screening',
        description: "Businesses should protect their customers' data from being freely available on the internet but unfortunately, it often happens through a vendor breach. Our compliance program validates that any third-party vendor with data access to the system is as careful as you are with your data. We identify high-risk vendors and harden your business cybersecurity with this process."
    },
    {
        id: 5,
        icon: <PlayPlugFiveIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Incident Response Strategy',
        description: "Small businesses can't plan for sudden cyberattacks as new hacking techniques are evolving daily. They need to regain control and mitigate future risks. We provide an incident response strategy encompassing a hack recovery plan, malware removal, and digital forensic investigation. The strategy consists of five phases, where we predetermine guidelines tailored to your kind of business. Then, the detection and reporting phase is initiated, followed by triage and endpoint analysis. Our cybersecurity experts have in-depth knowledge of live system responses and memory analysis. Using that, we finally contain and neutralize the compromised system and provide incident reports."
    },
    {
        id: 6,
        icon: <PlayPlugSixIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Awareness & Training',
        description: "We are equipped with industry-based awareness training that prepares IT and security representatives to safeguard present digital assets and train their users on secure operation tactics. As the employees are the weakest link in the cybersecurity chain, a timely awareness program ensures maximum business data protection. Our training program tests employees with phishing attacks, social engineering, general data protection regulation, password security, ransomware, malware, and many other security actions. To accommodate even the remote and most job-occupied individuals, we have both online and offline class systems, which they can attend at their convenience."
    },
    {
        id: 7,
        icon: <PlayPlugSevenIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Continuous consultation',
        description: "Despite the limited scope of our turnkey cyber solutions, it's sufficient for the most necessary security control management. Clients can reach us anytime to consult relevant issues. We continuously provide consultation through newsletters and webinars about the latest updates and further network modification scopes for you to assess on deploying more advanced controls."
    },
    {
        id: 8,
        icon: <PlayPlugEightIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Certification',
        description: "After assessing your business through our plug-and-play solution, we verify and certify that your business has security measures in place. This certification helps you with industry-standard compliance. This certificate is valid for one year that can be used as a logo on your website to earn customer trust and confidence."
    },
]

const stepsForBugBounty = [
    {
        id: 1,
        icon: <BackgroundCheck className='w-[50px] h-[50px] text-inherit' />,
        title: 'Setting Parameters',
        description: 'We work with companies to set the scope and budget for the program, define what systems can be tested, what types of vulnerabilities are eligible for rewards, and how much they are willing to pay for each detection.'
    },
    {
        id: 2,
        icon: <EmployeeMonitor className='w-[50px] h-[50px] text-inherit' />,
        title: 'Inviting Testers',
        description: 'We invite independent security researchers/ethical hackers from around the world to participate in the program, either publicly or privately.'
    },
    {
        id: 3,
        icon: <IdentifyingSecurityGap className='w-[50px] h-[50px] text-inherit' />,
        title: 'Bug Hunting',
        description: 'The hackers look for bugs in the target systems and submit detailed reports when they find them. The reports must include steps to reproduce, impact analysis, and proof-of-concept code or screenshots.'
    },
    {
        id: 4,
        icon: <Exposer className='w-[50px] h-[50px] text-inherit' />,
        title: 'Report Review',
        description: 'We work together with the companies to review the reports and verify the validity of the bugs. After that, we pay the hackers according to the reward scheme and publicly acknowledge their contributions. We may also offer additional incentives like leaderboards, badges, or invitations to exclusive events.'
    },
    {
        id: 5,
        icon: <Audit className='w-[50px] h-[50px] text-inherit' />,
        title: 'Follow-Up',
        description: 'We fix the bugs and restest them to ensure they are properly resolved.'
    },
]

const stepsForCompliance_consulting = [
    {
        id: 1,
        icon: <RiskIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Risk Assessment and Gap Analysis',
        description: 'We thoroughly assess your existing security controls, policies, and procedures to identify vulnerabilities and areas of non-compliance.'
    },
    {
        id: 2,
        icon: <EmployeeMonitor className='w-[50px] h-[50px] text-inherit' />,
        title: 'Compliance Roadmap Development',
        description: 'We create a tailored roadmap outlining the steps needed to achieve and maintain compliance with relevant regulations.'
    },
    {
        id: 3,
        icon: <RewardIcon className='w-[50px] h-[50px] text-inherit' />,
        title: 'Remediation and Implementation Support',
        description: 'We assist you in implementing the necessary security controls, policies, and procedures to address identified gaps and vulnerabilities.'
    },
    {
        id: 4,
        icon: <MonitoringProtection className='w-[50px] h-[50px] text-inherit' />,
        title: 'Ongoing Monitoring and Review',
        description: 'We continuously monitor your compliance status, provide regular updates, and recommend adjustments as regulations evolve.'
    },
]

export {
    ProvidedServiceData,
    FinestSolutionsData,
    WeServeWhomData,
    InvestigationMethodData,
    ConciergeServiceGridData,
    OSINTServiceData,
    BugBountyGridItemsData,
    EnterpriseGridItemsData,
    concierge_executive_protectionData,
    ConciergeServiceForPoliticData,
    ConciergeServiceForMediaChelibratyData,
    OSINTServiceDataForPlugAndPlay,
    stepsForBugBounty,
    stepsForCompliance_consulting,
};