import { GiCardPick } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaPersonWalkingWithCane } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaChildren } from "react-icons/fa6";
import { HiReceiptTax } from "react-icons/hi";
import { FaFileMedical } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa6";
import hackRecoverWeDealImg from '@/assets/we-deal/hack-recover.png';
import { bcsIncidentResponse, cryptoScam, hackRecoveryService, nftScam, onlineBlackmail, onlineFraud } from "@/utils/images";
import lockerRansomware from "@/asset/business-cybersecurity/ransomware-removal/locker.webp";
import cryptoRansomware from "@/asset/business-cybersecurity/ransomware-removal/crypto.webp";
import scareware from "@/asset/business-cybersecurity/ransomware-removal/scareware.webp";
import raas from "@/asset/business-cybersecurity/ransomware-removal/Raas.webp";
import leakware from "@/asset/business-cybersecurity/ransomware-removal/leakware.webp";
import cloudImg1 from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/iaas.webp";
import cloudImg2 from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/paas.webp";
import cloudImg3 from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/saas.webp";
import cloudImg4 from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/bdr.webp";
import cloudImg5 from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/iam.webp";
import cloudImg6 from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/network-security.webp";
import cloudImg7 from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/compliance.webp";

//Data Breach Investigation Image Imports
import WeDealOne from "@/asset/business-cybersecurity/data-breach-investigation/DB_1.webp";
import WeDealTwo from "@/asset/business-cybersecurity/data-breach-investigation/DB_2.webp";
import WeDealThree from "@/asset/business-cybersecurity/data-breach-investigation/DB_3.webp";
import WeDealFour from "@/asset/business-cybersecurity/data-breach-investigation/DB_4.webp";
import WeDealFive from "@/asset/business-cybersecurity/data-breach-investigation/DB_5.webp";
import WeDealSix from "@/asset/business-cybersecurity/data-breach-investigation/DB_6.webp";
import WeDealSeven from "@/asset/business-cybersecurity/data-breach-investigation/DB_7.webp";
import WeDealEight from "@/asset/business-cybersecurity/data-breach-investigation/DB_8.webp";

const weDealWithData = [
    {
        id: 1,
        title: "Crypto Ransomware",
        data: {
            img: hackRecoverWeDealImg,
            alt: 'cryptoScamMainImg',
            desc: "We provide incident response support for your entire security operations. If your organization's IT infrastructure is under attack, we can help. Our Hack Recovery experts will find the source, perform data breach responses, repair the damage, and secure the controls. We'll also make sure to lock all the backdoors to prevent any further threats, giving you the best remediation services.",
            btnText: "Explore More",
        }
    },
    {
        id: 2,
        title: "Digital Forensic Investigation",
        data: {
            img: hackRecoverWeDealImg,
            alt: 'cryptoScamMainImg',
            desc: "We provide incident response support for your entire security operations. If your organization's IT infrastructure is under attack, we can help. Our Hack Recovery experts will find the source, perform data breach responses, repair the damage, and secure the controls. We'll also make sure to lock all the backdoors to prevent any further threats, giving you the best remediation services.",
            btnText: "Explore More",
        }
    },
    {
        id: 3,
        title: "Cyber Threat Removal",
        data: {
            img: hackRecoverWeDealImg,
            alt: 'cryptoScamMainImg',
            desc: "We provide incident response support for your entire security operations. If your organization's IT infrastructure is under attack, we can help. Our Hack Recovery experts will find the source, perform data breach responses, repair the damage, and secure the controls. We'll also make sure to lock all the backdoors to prevent any further threats, giving you the best remediation services.",
            btnText: "Explore More",
        }
    },
    {
        id: 4,
        title: "Ransomware Removal",
        data: {
            img: hackRecoverWeDealImg,
            alt: 'cryptoScamMainImg',
            desc: "We provide incident response support for your entire security operations. If your organization's IT infrastructure is under attack, we can help. Our Hack Recovery experts will find the source, perform data breach responses, repair the damage, and secure the controls. We'll also make sure to lock all the backdoors to prevent any further threats, giving you the best remediation services.",
            btnText: "Explore More",
        }
    },
    {
        id: 5,
        title: "Data Breach Investigation",
        data: {
            img: hackRecoverWeDealImg,
            alt: 'cryptoScamMainImg',
            desc: "We provide incident response support for your entire security operations. If your organization's IT infrastructure is under attack, we can help. Our Hack Recovery experts will find the source, perform data breach responses, repair the damage, and secure the controls. We'll also make sure to lock all the backdoors to prevent any further threats, giving you the best remediation services.",
            btnText: "Explore More",
        }
    },
];

const incidentResponseDealWithData = [
    {
        id: 1,
        title: "Hack Recovery",
        data: {
            img: bcsIncidentResponse.hackRecovery,
            alt: 'Hack Recovery',
            desc: "We provide incident response support for your entire security operations. If your organization's IT infrastructure is under attack, we can help. Our Hack Recovery experts will find the source, perform data breach responses, repair the damage, and secure the controls. We'll also make sure to lock all the backdoors to prevent any further threats, giving you the best remediation services.",
            btnText: "Explore More",
            btnUrl: '/mysecurity/hack_recovery_service'
        }
    },
    {
        id: 2,
        title: "Digital Forensic Investigation",
        data: {
            img: bcsIncidentResponse.digitalForensicInvestigation,
            alt: 'Digital Forensic Investigation',
            desc: "Our structured Digital Forensics Investigation includes memory analysis, tracking left-out traces, and revealing the source's whereabouts to uncover and interpret vital company data compromised by a third party or insider threats. Our digital forensics experts will deal with law enforcement and save you from further hassle.",
            btnText: "Explore More",
            btnUrl: '/digital_forensic_investigation'
        }
    },
    {
        id: 3,
        title: "Malware Removal",
        data: {
            img: bcsIncidentResponse.cyberThreatRemoval,
            alt: 'malware removal',
            desc: "Common threats like malware, spyware, or ransomware attacks affect websites, office centers, and data centers in organizations worldwide. Our Cyber Threat Removal Services will quickly respond to malicious activity, minimize impact, strengthen your security posture, and provide end-to-end cybersecurity to avoid future threats.",
            btnText: "Explore More",
            btnUrl: '/best_malware_removal'
        }
    },
    {
        id: 4,
        title: "Ransomware Removal",
        data: {
            img: bcsIncidentResponse.ransomware,
            alt: 'Ransomware Removal',
            desc: "Ransomware is a type of malware that encrypts the victim’s files, making them inaccessible, and then demands a sum (ransom) in exchange for the decryption key. Our ransomware removal services will help you recover your encrypted files and remove the ransomware from your systems and fortify your systems against future attacks.",
            btnText: "Explore More",
            btnUrl: '/ransomware_removal_service'
        }
    },
    {
        id: 5,
        title: "Data Breach Investigation",
        data: {
            img: bcsIncidentResponse.dataBreachInvestigation,
            alt: 'Data Breach Investigation',
            desc: "A data breach is an unauthorized access to sensitive information, such as personal information, financial information, or confidential business information. Our data breach investigation services will help you determine the cause of the breach, the extent of the damage, and what steps you can take to prevent future breaches.",
            btnText: "Explore More",
            btnUrl: "/data_breach_investigation",
        }
    },
];

const cryptoScamsTypes = [
    {
        id: 1,
        title: "Initial Coin Offering (ICO)",
        data: {
            img: cryptoScam.coinOffering,
            alt: 'cryptoScamMainImg',
            desc: "An initial coin offering imitates the method a fundraising mechanism companies use to raise funds. Companies sell stocks at a cheaper rate in the stock market to get investment. Similarly, some crypto projects offer tokens to investors in exchange for fiat currency or established cryptos like Bitcoin or Ethereum. Scammers use this method to gain investors fast and then shut down the project, causing it to collapse entirely.",
        }
    },
    {
        id: 2,
        title: "Ponzi Schemes",
        data: {
            img: cryptoScam.ponziSchemes,
            alt: 'cryptoScamMainImg',
            desc: "A Ponzi scheme works by paying older investors with funds collected from new investors. A cryptocurrency Ponzi scheme works similarly. It starts with someone investing in a cryptocurrency and reselling it at a higher price, attracting new investors by promoting high returns. Eventually, the scheme falls apart, causing the newer investors to lose all their investments.",
        }
    },
    {
        id: 3,
        title: "Pump & Dump Scheme",
        data: {
            img: cryptoScam.pumpDumpScheme,
            alt: 'cryptoScamMainImg',
            desc: "A cryptocurrency pump & dump works just like a stock pump and dump. False claims and hype help to boost the price of a cryptocurrency in the market. Then the originators or dominant holders sell their cryptos at an all-time high artificial peak, rendering the rest of the cryptos to lose all their value.",
        }
    },
    {
        id: 4,
        title: "Market Manipulation",
        data: {
            img: cryptoScam.marketManipulation,
            alt: 'cryptoScamMainImg',
            desc: "Cryptocurrencies are decentralized, meaning they are not backed by central banks or governments. This lack of regulation makes it easy to manipulate the crypto market. Market manipulation works by artificially influencing crypto asset prices, or influencing investor sentiment. Some market manipulation process includes pump & dump, whale wall spoofing, wash trading, etc.",
        }
    },
    {
        id: 5,
        title: "Crypto-only Payment Retailers",
        data: {
            img: cryptoScam.paymentRetailer,
            alt: 'cryptoScamMainImg',
            desc: "Some retail establishments claim that they do not accept payments in any form of currency other than Bitcoin or Ethereum. In that case, they are probably trying to scam you. Also, since anyone can open a crypto wallet, and tracking the owner down can be difficult, they can easily take off with your assets.",
        }
    },
]

const nftScamsTypes = [
    {
        id: 1,
        title: "Phishing Scams",
        data: {
            img: nftScam.phisingScam,
            alt: 'Phishing Scams',
            desc: "Scammers create fake websites or social media accounts that mimic legitimate NFT platforms or customer support to trick people into sharing their private wallet keys or seed phrases, causing them to lose access to their NFT accounts in the process.",
        }
    },
    {
        id: 2,
        title: "Pump and Dump Scams/Rug Pull Scams",
        data: {
            img: nftScam.pumpDumpScam,
            alt: 'cryptoScamMainImg',
            desc: "A rug pull scam involves scammers promoting fake NFT projects/NFT collections so that people would invest money in them. Once they receive enough investment or mint enough NFTs, they shut down the project entirely scamming all the investors.",
        }
    },
    {
        id: 3,
        title: "Airdrop scams/Giveaway Scams",
        data: {
            img: nftScam.airdropScam,
            alt: 'cryptoScamMainImg',
            desc: "Some scammers use NFT marketplaces on social media to promote NFT giveaways, encouraging people to promote their fake NFT projects or sign up on the scammer’s website to win free NFT. However, when it comes to redeeming the free NFTs, the scammers would ask for crypto wallet information and infiltrate the victim’s account to steal their existing NFTs and Cryptocurrency.",
        }
    },
    {
        id: 4,
        title: "Catfishing Scam",
        data: {
            img: nftScam.catfishingScam,
            alt: 'cryptoScamMainImg',
            desc: "Sometimes scammers work together and trick people into buying fraudulent NFTs. Some of them would create fake social media profiles imitating real NFT creators or artists, and redirect people to spam websites, and other scammers create fake tech support accounts. They might ask for account information in messages to provide support and then steal the victim’s credentials and digital assets.",
        }
    },
    {
        id: 5,
        title: "Fake NFT Projects",
        data: {
            img: nftScam.fakeNftScam,
            alt: 'cryptoScamMainImg',
            desc: "Scammers would create fake NFTs or copy legitimate artwork and sell the counterfeit versions on reputable marketplaces as original, rare, or limited-edition NFTs to unsuspecting buyers. Fake and counterfeit NFTs have no real value and most of the time the victims find that out when it’s too late after buying the fake NFT.",
        }
    },
    {
        id: 6,
        title: "Ponzi Schemes",
        data: {
            img: nftScam.ponziScheme,
            alt: 'cryptoScamMainImg',
            desc: "The scammers would sometimes promise high returns on NFT investments in the secondary market, but instead, use the new investors’ funds to pay out the earlier investors, eventually leading to a collapse of the whole project.",
        }
    },
    {
        id: 7,
        title: "Bidding Scams",
        data: {
            img: nftScam.biddingScam,
            alt: 'cryptoScamMainImg',
            desc: "In some NFT auctions, scammers take part in the bidding and become the highest bidder, However, during payment, the scammer switches out the cryptocurrency to one of the lower-value ones, scamming the seller in the process.",
        }
    },
]

const IdentityTheftData = [
    {
        id: 1,
        cardTitle: 'Account Takeover Fraud',
        title: 'Account Takeover Fraud',
        icon: <GiCardPick className="text-full" />,
        description: 'Account takeover fraud refers to unauthorized access and control of one or more of your accounts without your knowledge or consent. We recover the infiltrated account and recover all personal data and finances of said account.'
    },
    {
        id: 2,
        cardTitle: 'Debit/Credit Card Fraud',
        title: 'Debit/Credit Card Fraud',
        icon: <BsFillCreditCard2FrontFill className="text-full" />,
        description: 'Debit/credit card fraud happens when someone makes unauthorized transactions with your card details without your knowledge or permission. Criminals can use your card information even if they don’t have your physical card in hand, using your credit card number, PIN, and security code. Our services allow you to gain access back to your card and stop further exploitation of your card data.'
    },
    {
        id: 3,
        cardTitle: 'Stolen Driver\'s License',
        title: 'Stolen Driver\'s License',
        icon: <FaAddressCard className="text-full" />,
        description: 'You may not pay much attention to your driver’s license, but it can be a golden ticket for criminals. Your driver’s license contains your address, license number, and other private information that can be used to steal your identity. We prevent any unauthorized usage of the data that a hacker picks from your driver\'s license and cooperate with law enforcement to prevent further misuse of your identity.'
    },
    {
        id: 4,
        cardTitle: 'Mail Identity <br/> Theft',
        title: 'Mail Identity Theft',
        icon: <IoIosMail className="text-full" />,
        description: 'Mailbox identity theft has become increasingly common in recent years. This involves stealing checks from mailboxes and altering them to transfer the money to the criminal’s account. Thieves may also steal credit card applications, bank statements, or other sensitive documents holding personal information. Our team can efficiently recover the stolen mail identity and restore secure personal access.'
    },
    {
        id: 5,
        cardTitle: 'Online Shopping Fraud',
        title: 'Online Shopping Fraud',
        icon: <FaCartShopping className="text-full" />,
        description: 'Online shopping fraud can happen in several ways. Scammers use fake websites, social media accounts, or emails to trick people into buying counterfeit products or paying for items that never arrive. They may also use stolen credit card information to make fraudulent purchases. Our services will ensure that your personal information spread across online shopping portals cannot be exploited, and no one is racking up credit bills in your name with unauthorized purchases.'
    },
    {
        id: 6,
        cardTitle: 'Stolen Social Security Number',
        title: 'Stolen Social Security Number',
        icon: <MdOutlineSecurity className="text-full" />,
        description: 'A stolen social security number can be a gateway to a wide range of identity theft schemes. Criminals can open credit accounts, file fraudulent tax returns, and commit other financial crimes in your name. Our team prevents any efforts to prevent any usage of your SSN unless it’s you who’s using your information.'
    },
    {
        id: 7,
        cardTitle: 'Senior Citizen <br/> Scams',
        title: 'Senior Citizen Scams',
        icon: <FaPersonWalkingWithCane className="text-full" />,
        description: 'Senior citizen scam refers to fraudulent acts or schemes ha target elderly people. Scammers often use phone calls or the internet to deceive seniors into providing personal information. These scams can take many forms like false charity solicitations, fake government agency calls, fake investment calls, etc. We offer training and personalized protection for senior citizens to save them from being scammed out of their lifelong savings.'
    },
    {
        id: 8,
        cardTitle: 'Child Identity <br/> Theft',
        title: 'Child Identity Theft',
        icon: <FaChildren className="text-full" />,
        description: 'Child identity theft is a form of identity theft where a criminal uses a child’s personal information like their social security number or date of birth to open new lines of credit or make unauthorized purchases. Since these can affect the child in the future as a grownup, our services are always ready to present a safe future for the children, free of identity theft.'
    },
    {
        id: 9,
        cardTitle: 'Tax Identity <br/> Theft',
        title: 'Tax Identity Theft',
        icon: <HiReceiptTax className="text-full" />,
        description: 'Tax identity theft occurs when someone uses your stolen social security number (SSN) to file a fraudulent tax return to claim a refund. Tax identity theft can cause serious problems such as delayed tax refunds, fines, and penalties. It can also harm your credit score, affecting your ability to obtain loans or credit cards. Our identity protection service collaborates with government agencies to prevent tax identity theft.'
    },
    {
        id: 10,
        cardTitle: 'Medical Identity <br/> Theft',
        title: 'Medical Identity Theft',
        icon: <FaFileMedical className="text-full" />,
        description: 'Medical identity theft happens when someone steals your personal information such as your social security number or medical insurance ID to access medical care, prescriptions, or insurance coverage. This can lead to false medical records, inaccurate billing, and even dangerous medical treatment.'
    }
]

const data_breach_DealWithData = [
    {
        id: 1,
        title: "Phising Protection",
        data: {
            img: WeDealOne,
            alt: 'phishingProtection',
            desc: "We analyze suspicious emails, investigate phishing incidents, and offer employee training to help them recognize and avoid these scams.",
        }
    },
    {
        id: 2,
        title: "Malware Infections",
        data: {
            img: WeDealTwo,
            alt: 'Malware Infections',
            desc: "Our experts investigate malware breaches, remove malicious software, and recommend security solutions to protect against future attacks.",
        }
    },
    {
        id: 3,
        title: "Insider Threats",
        data: {
            img: WeDealThree,
            alt: 'Insider Threat',
            desc: "We can conduct forensic investigations into suspected insider activity, implement access controls, and monitor for unusual behavior to mitigate insider risk.",
        }
    },
    {
        id: 4,
        title: "SQL Injection",
        data: {
            img: WeDealFour,
            alt: 'SQL Injection',
            desc: "Our team assesses your web applications for vulnerabilities, investigates SQL injection incidents, and helps implement security measures like web application firewalls.",
        }
    },
    {
        id: 5,
        title: "Ransomware Attacks",
        data: {
            img: WeDealFive,
            alt: 'Ransomware Attacks',
            desc: "We analyze ransomware incidents, assist in recovery efforts, and guide you through preventative measures like backups and disaster recovery planning.",
        }
    },
    {
        id: 6,
        title: "Cloud Security Breaches",
        data: {
            img: WeDealSix,
            alt: 'Cloud Storage Breaches',
            desc: "We investigate unauthorized access to cloud storage, assess your cloud security configuration, and recommend improvements for data protection.",
        }
    },
    {
        id: 7,
        title: "Social Engineering",
        data: {
            img: WeDealSeven,
            alt: 'Social Engineering',
            desc: "Our experts analyze social engineering attempts, provide guidance on preventative measures, and conduct training for your employees.",
        }
    },
    {
        id: 8,
        title: "Physical Security Breaches",
        data: {
            img: WeDealEight,
            alt: 'Physical Security Breaches',
            desc: "We investigate physical breaches, review security protocols, and recommend improvements like access controls, biometric authentication, and security cameras.",
        }
    },
];
const cloudManageDealWithData = [
    {
        id: 1,
        title: "Infrastructure as a Service (IaaS)",
        data: {
            img: cloudImg1,
            alt: 'Infrastructure as a Service (IaaS)',
            desc: "IaaS provides customers with access to virtualized computing resources, such as servers, storage, and networking.",

        }
    },
    {
        id: 2,
        title: "Platform as a Service (PaaS)",
        data: {
            img: cloudImg2,
            alt: 'Platform as a Service (PaaS)',
            desc: "PaaS gives customers access to a platform where they can develop, run, and manage their applications.",

        }
    },
    {
        id: 3,
        title: "Software as a Service (SaaS)",
        data: {
            img: cloudImg3,
            alt: 'Software as a Service (SaaS)',
            desc: "This type of service provides customers with access to software applications that they can use over the internet.",

        }
    },
    {
        id: 4,
        title: "Backup and Disaster Recovery (BDR)",
        data: {
            img: cloudImg4,
            alt: 'Backup and Disaster Recovery (BDR)',
            desc: "Backup and disaster recovery utilize a way to protect the customer’s data and applications in case of an unexpected event, such as a natural disaster or a cyber attack.",

        }
    },
    {
        id: 5,
        title: "Identity and Access Management (IAM)",
        data: {
            img: cloudImg5,
            alt: 'Identity and Access Management (IAM)',
            desc: "IAM provides customers with a way to manage and secure their user identities and access to their cloud resources.",

        }
    },
    {
        id: 6,
        title: "Network Security",
        data: {
            img: cloudImg6,
            alt: 'Network Security',
            desc: "Protects customer network from external threats and unauthorized access.",

        }
    },
    {
        id: 6,
        title: "Compliance and Governance",
        data: {
            img: cloudImg7,
            alt: 'Compliance and Governance',
            desc: " Regulation compliance is a vital part of every business. We’ll provide customers with a way to ensure compliance that their cloud deployments are compliant with relevant laws and regulations.",

        }
    },
];

const onlineFraudTypes = [
    {
        id: 1,
        title: "Government Agency Scams",
        data: {
            img: onlineFraud.govtScam,
            alt: 'Government Agency Scams',
            desc: "When a malicious actor sends out official-looking emails and letters, giving the impression that they are from a government department and have authority, asking for money or personal information.",
        }
    },
    {
        id: 2,
        title: "Online Dating Fraud",
        data: {
            img: onlineFraud.datingFraud,
            alt: 'Online Dating Fraud',
            desc: "These fraudsters create fake profiles on dating sites to persuade you to hand over your personal information and often your bank details. This can also occur through social media such as Facebook, Instagram, or LinkedIn to name a few.",
        }
    },
    {
        id: 3,
        title: "Bank Scams",
        data: {
            img: onlineFraud.bankScam,
            alt: 'Bank Scams',
            desc: "When fraudsters send out official-looking emails, letters, or even text messages giving the impression that they are from your banking institution. They may ask for personal information, say your account has been compromised, or request you move money to a new account they will help you set up",
        }
    },
    {
        id: 4,
        title: "Cryptocurrency Scams",
        data: {
            img: onlineFraud.cryptoScam,
            alt: 'Cryptocurrency Scams',
            desc: "Many fake companies promise big returns from cryptocurrency investment or trading. These scams often require you to send payments in difficult-to-trace cryptocurrencies such as Bitcoin or Ethereum, without ever returning your money or the promised gains.",
        }
    },
    {
        id: 5,
        title: "Work-From-Home Scams",
        data: {
            img: onlineFraud.workScam,
            alt: 'Work-From-Home Scams',
            desc: "These fraudsters create fake job adverts to steal your personal information or your money. These scams make it look like you’re being offered a job where you can make easy money working entirely from home.",
        }
    },
    {
        id: 6,
        title: "Online Shopping Fraud",
        data: {
            img: onlineFraud.shoppingFraud,
            alt: 'Online Shopping Fraud',
            desc: "These fraudsters misrepresent items online or fail to deliver items after buyers have paid. The goal here is to make it look like a natural delivery failure due to human error when in reality the cash paid for the product was already stolen.",
        }
    },
    {
        id: 7,
        title: "Internet Dialer Scams",
        data: {
            img: onlineFraud.internetDealer,
            alt: 'Internet Dialer Scams',
            desc: "This is when a person’s computer settings are changed, and their internet connection is re-routed via an expensive phone line. This can happen when a person opens a spam email or clicks a pop-up box.",
        }
    }
];

const online_blackmailing_DealWithData = [
    {
        id: 1,
        title: "Financial Extortion",
        data: {
            img: onlineBlackmail.financialExtortion,
            alt: 'cryptoScamMainImg',
            desc: "Most blackmail takes place intending to extort money from the victims. If you have been a victim of financial extortion, and still have a money transfer control number with you, we can help you bring the blackmailer to justice.",
        }
    },
    {
        id: 2,
        title: "Sextortion",
        data: {
            img: onlineBlackmail.sextortion,
            alt: 'cryptoScamMainImg',
            desc: "Some online blackmail is sexual, also called sextortion. Blackmailers usually target younger people, manipulating them to send sexual images or to perform sexual acts. After collecting enough sexual images, the blackmailer demands more pictures or money for confidentiality. Apart from that, adults can become sextortion victims too. Online relationships escalating to intimate moments can lead to sharing sexual photos and videos or engaging in sexual activities that can later lead to online blackmailing sometimes.",
        }
    },
    {
        id: 3,
        title: "Coercion",
        data: {
            img: onlineBlackmail.coercion,
            alt: 'cryptoScamMainImg',
            desc: "Sometimes blackmailers would obtain individuals' personal information, threaten their online, reputational & physical safety, instead of asking for money or sexual favors, and force their victims to perform unethical or criminal activities.",
        }
    },
];

const ransomware_weDealWithData = [
    {
        id: 1,
        title: "Locker Ransomware",
        data: {
            img: lockerRansomware,
            alt: 'cryptoScamMainImg',
            desc: "The name explains it all. Locker ransomware locks users out of their computers entirely by locking important files or the entire computer with a ransom demand. They don't usually damage any files, making them the least damaging ransomware.",

        }
    },
    {
        id: 2,
        title: "Crypto Ransomware",
        data: {
            img: cryptoRansomware,
            alt: 'cryptoScamMainImg',
            desc: "Crypto ransomware uses a technique called cryptovirology-extortion, encrypting the affected files. The cybercriminals can then threaten to delete the files permanently. Victims can pay the ransom to get a decryption key to restore the deleted files.",

        }
    },
    {
        id: 3,
        title: "Scareware",
        data: {
            img: scareware,
            alt: 'cryptoScamMainImg',
            desc: "Scareware attempts the scare the users into paying the ransom, filling the screen with popups with false claims about the computer being infected with a complex virus or malware, or impersonating law enforcement agencies demanding \"fines\" for violating a law.",

        }
    },
    {
        id: 4,
        title: "RaaS",
        data: {
            img: raas,
            alt: 'cryptoScamMainImg',
            desc: "Ransomware as a Service (RaaS) is a service offered by professional hackers to cybercriminals with low technical knowledge. The RaaS model is responsible for the huge rise of ransomware attacks in recent years.",

        }
    },
    {
        id: 5,
        title: "Leakware",
        data: {
            img: leakware,
            alt: 'cryptoScamMainImg',
            desc: "Leakware, also known as doxware threatens to release the data in the public domain and demand a ransom to prevent that from happening. Leakware usually targets businesses since businesses possess a lot of sensitive data.",

        }
    },
];

const digitalserviceHandles = [
    {
        id: 1,
        title: "Business Email Hacks",
        data: {
            img: hackRecoveryService.buisnessEmailHacks,
            alt: 'Business Email Hacks',
            desc: "Business emails are essential for any organization. Getting it hacked can bring catastrophic results for your business. Not only you’ll lose access to your client information, but cybercriminals will use your business email to send spam emails, sending threatening or annoying emails to your customers, damaging your business in the process. Fret not, we will recover your hacked business email account, and ensure maximum protection to prevent future attacks.",
        }
    },
    {
        id: 2,
        title: "Business Data Theft",
        data: {
            img: hackRecoveryService.buisnessDataTheft,
            alt: 'Business Data Theft',
            desc: "Businesses hold a lot of confidential and sensitive information, which is like a goldmine for cybercriminals. Cybercriminals are always trying to pry into businesses to steal valuable information from CRMs (contact names, titles, email addresses, social profiles, etc.), payment gateway, or mobile apps. If you experience any business data theft, we will recover your accounts and the data. We will also make necessary changes to further secure your infrastructure.",
        }
    },
    {
        id: 3,
        title: "Website Recovery",
        data: {
            img: hackRecoveryService.websiteRecovery,
            alt: 'Website Recovery',
            desc: "Your website is the front end of your business. Whether your website is using a CMS like WordPress or Joomla, or similar technologies; or using a highly sophisticated (Java or Python) code, it is always a target for hackers. Hackers test their skills by breaking into sites and pages. We scan the website for malware as part of our security check and tighten the security controls by upgrading the plugins, passwords, and overall CMS if necessary. We will also scan for other security loopholes to secure your website fully.",
        }
    },
    {
        id: 4,
        title: "Workstation & Office Network",
        data: {
            img: hackRecoveryService.workstationNetwork,
            alt: 'Workstation & Office Network',
            desc: 'Hackers perform coordinated attacks against business workstations, making them their "Slave Machines" for data theft. Office networks are also compromised by malware implants, phishing emails, man-in-the-middle attacks, packet sniffing, etc. Suppose you collect customer information for your business. In that case, you need to minimize the damage by making a hack recovery followed by putting necessary security controls, and we can do it for you.',
        }
    },
    {
        id: 5,
        title: "Servers & Data Center",
        data: {
            img: hackRecoveryService.serversDataCenter,
            alt: 'Servers & Data Center',
            desc: "System administrators usually install OS in default settings, leading to unwanted services, ads, sharing of sensitive information, etc. This causes unwanted traffic to the server and possibly a gateway for opportunist attackers. If you suspect any suspicious activity in your servers or data center, we can provide you with Hack Recovery Service to restore your server to full working order.",
        }
    },
    {
        id: 6,
        title: "Cloud Infrastructure",
        data: {
            img: hackRecoveryService.cloudInFrastructure,
            alt: 'Cloud Infrastructure',
            desc: "60% of top US companies have experienced cloud infrastructure penetrations that led to a severe cloud data breach. Google Cloud, Amazon Web Services, and Microsoft's Azure usually manage security for the underlying infrastructure, where users are responsible for securing the applications and database. Contact us if you think your company's cloud server is affected this way! We will stop the flood of breaches.",
        }
    },
];

export { weDealWithData, IdentityTheftData, incidentResponseDealWithData, cryptoScamsTypes, nftScamsTypes, online_blackmailing_DealWithData, data_breach_DealWithData, cloudManageDealWithData, onlineFraudTypes, ransomware_weDealWithData, digitalserviceHandles };
