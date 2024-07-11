import { ExploitationIcon, InformationGatheringIcon, MonitoringsIcon, ThreatModelingIcon, VulnerabilityIcon } from "@/components/icons/BusinessCybersecurity";



export const AssessmentProcessData = [
    {
        title: 'Information Gathering',
        icon: <InformationGatheringIcon />,
        desc: "At first, we gather information about our client's networks, security controls, documents, etc."
    },
    {
        title: 'Threat Modeling',
        icon: <ThreatModelingIcon />,
        desc: "After collecting all the necessary information, we will compile a threat model documenting the vulnerabilities of your system and the threats your organization could be facing."
    },
    {
        title: 'Vulnerability Analysis',
        icon: <VulnerabilityIcon />,
        desc: "Based on our threat model, we will run more in-depth research. Once the issues are determined, we calculate the level of impact the attack had on your organization."
    },
    {
        title: 'Exploitation',
        icon: <ExploitationIcon />,
        desc: "Our team will attempt exploitations on your IT system based on our findings in step 3. This step will help us determine the exploits that can affect your system and require your attention."
    },
    {
        title: 'Monitoring',
        icon: <MonitoringsIcon />,
        desc: "After exploitation attempts, the team monitors your systems to detect further attacks on systems and business services. Monitoring helps you to ensure that the systems are working properly and being used in accordance with organizational policies."
    },
]