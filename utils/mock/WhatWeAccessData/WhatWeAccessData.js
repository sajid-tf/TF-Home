import { CrimeWare, DigitalFootprint, FeedService, Persistent, ThreatHunting, ThreatInfrastructureTracking } from "@/components/icons/BusinessCybersecurity";
import { APIAssessmentSVG, CloudInfrastructureSVG, DataCenterSVG, DesktopAppSVG, MobileAppSVG, PhysicalNetworkSVG, ServerNetworkSVG, WebAppSVG } from "@/utils/svg/SVGImg";

export const WhatWeAccessData = [
    {
        id: 1,
        title: 'Web Application',
        icon: <WebAppSVG fillColor="#2C2C33" />,
        heading: '30,000 New Websites Are Hacked Every Day',
        desc: "Our risk assessment framework will assess OWASP's top 10 cyber vulnerabilities. We research and identify exploitable loopholes and deliver proposals in a complete report for you to work on. Precise execution of our remediation guidance will harden your database and front end."
    },
    {
        id: 2,
        title: 'Server & Network',
        icon: <ServerNetworkSVG fillColor="#2C2C33" />,
        heading: '73% of hackers said firewalls can’t protect your system.',
        desc: "Most companies' network elements are usually not up to date whereas the company server has all the data. It makes it easier for attackers to simply bypass the firewall and get access to the server; download the data slowing down the system. So, we keep your server up to date and apply security patch; It is also crucial to do risk assessment of the server configuration, third-party libraries, and network settings."
    },
    {
        id: 3,
        title: 'Cloud Infrastructure',
        icon: <CloudInfrastructureSVG fillColor="#2C2C33" />,
        heading: 'Cloud servers must have robust data security features.',
        desc: "Even if you have an existing IP policy and user group rules in place, it's always a good idea to have experts look into your system and hand out proper risk assessments."
    },
    {
        id: 4,
        title: 'API Assessment',
        icon: <APIAssessmentSVG fillColor="#2C2C33" />,
        heading: 'Hackers can access APIs by attaching some sensitive data to the request.',
        desc: "API security is critical to organizations as they often leak sensitive data during transfer processes. We do manual API risk assessments for a wide range of APIs, including but not limited to Web Service APIs (SOAP, REST, JSON), Web Socket APIs, Class-Based APIs, etc."
    },
    {
        id: 5,
        title: 'Mobile Application',
        icon: <MobileAppSVG fillColor="#2C2C33" />,
        heading: 'Mobile application security saves your business\'s reputation.',
        desc: "Mobile apps can be vulnerable to many issues, which endangers your business data integrity. Whether you have an android or iOS device, we do source code auditing for both. We will also consult our clients about the best practices regarding risk assessment."
    },
    {
        id: 6,
        title: 'Desktop Application',
        icon: <DesktopAppSVG fillColor="#2C2C33" />,
        heading: 'Business desktop apps are usually interconnected',
        desc: "Hackers can infiltrate all the desktops of a business just by accessing one of the apps. Our cyber security risk assessment team will perform source code auditing on the desktop applications and let you know about the cyber threats."
    },
    {
        id: 7,
        title: 'Data Center',
        icon: <DataCenterSVG fillColor="#2C2C33" />,
        heading: 'Complex Infrastructures need deep level Cybersecurity',
        desc: "Data storage centers are dynamic and supported by highly connected networks and cloud computing. Our risk management plan for information security covers any data center server, both physical and virtual levels."
    },
    {
        id: 8,
        title: 'Physical Network',
        icon: <PhysicalNetworkSVG fillColor="#2C2C33" />,
        heading: 'Workstation connections can be penetrated/intruded on by outside interferences.',
        desc: "Data centers or office networks are usually connected with different servers through a Wi-Fi connection, VLAN where the connectivity is mostly physical. We protect your network from the most prominent attacks."
    }
];
export const cyberThreatIntelligenceAccessData = [
    {
        id: 1,
        title: 'Threat Intelligence Feed Service',
        icon: <FeedService className="text-lightBGText w-full h-full" fillColor="#2C2C33" />,
        // heading: '30,000 New Websites Are Hacked Every Day',
        desc: "A threat intelligence feed service is a subscription-based service that provides organizations with timely and relevant information about potential cyber threats. We will collect, analyze, and distribute information about emerging and ongoing cyber threats, as well as various security threats like malware, phishing attacks, and advanced persistent threats (APTs)."
    },
    {
        id: 2,
        title: 'Persistent Threat Intelligence',
        icon: <Persistent className="text-lightBGText w-full h-full" />,
        // heading: '30,000 New Websites Are Hacked Every Day',
        desc: "Persistent threat intelligence (PTI) is a type of threat intelligence that describes the characteristics, behaviors, and motivations of persistent threat actors. PTI goes beyond traditional threat intelligence and focuses on understanding the threat actors and their motivations."
    },
    {
        id: 3,
        title: 'Crimeware Intelligence Reporting',
        icon: <CrimeWare className="text-lightBGText w-full h-full" />,
        // heading: '30,000 New Websites Are Hacked Every Day',
        desc: "Crimeware Intelligence Reporting is a security and risk management process where organizations share information about cybercriminal activities with law enforcement and the wider public so that everyone can respond to cyberattacks faster. Crimeware intelligence reporting also helps companies to improve their cybersecurity poster by identifying and mitigating weaknesses in their systems."
    },
    {
        id: 4,
        title: 'Threat Hunting',
        icon: <ThreatHunting className="text-lightBGText w-full h-full" />,
        // heading: '30,000 New Websites Are Hacked Every Day',
        desc: "Threat hunting is a method of cybersecurity that focuses on identifying and investigating potential threats against an organization. It involves searching for indicators of malicious activity, such as anomalies in network traffic or abnormal access to sensitive data."
    },
    {
        id: 5,
        title: 'Digital Footprint Intelligence',
        icon: <DigitalFootprint className="text-lightBGText w-full h-full" />,
        // heading: '30,000 New Websites Are Hacked Every Day',
        desc: "Digital Footprint Intelligence determines the footprint of an organization on the web. It assesses the potential risk of compromise for an organization by analyzing digital footprints against a predefined standard."
    },
    {
        id: 6,
        title: 'Threat Infrastructure Tracking',
        icon: <ThreatInfrastructureTracking className="text-lightBGText w-full h-full" />,
        // heading: '30,000 New Websites Are Hacked Every Day',
        desc: "Threat infrastructure tracking is a cybersecurity practice that helps organizations keep track of their digital assets, enabling them to detect anomalies and take corrective measures on time. It also helps them identify existing vulnerabilities and prevent future attacks."
    }
];