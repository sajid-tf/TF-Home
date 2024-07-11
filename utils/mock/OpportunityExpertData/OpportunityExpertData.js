import { TbDeviceImacSearch } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";
import { LuGoal } from "react-icons/lu";
import { AiOutlineRise } from "react-icons/ai";

const OpportunityExportData = [
    {
        id: 1,
        title: "Job Opportunity",
        desc: "Jobs in cybersecurity will continue to rise 31% through 2029, over seven times faster than the 4% job growth nationally",
        icon: <TbDeviceImacSearch />
    },
    {
        id: 2,
        title: "First Step To Expert",
        desc: "Our course is designed to set you up to go pro as a cybersecurity expert.",
        icon: <RiUserStarLine />
    },
    {
        id: 3,
        title: "Career Advancement",
        desc: "Skills you acquire in Techforing will map your career path.to advance to the next level confidently.",
        icon: <LuGoal />
    },
    {
        id: 4,
        title: "Increase Salary",
        desc: "IT professionals can demonstrate their cybersecurity skills and ask for a raise in their current organization.",
        icon: <AiOutlineRise />
    }
]

const 
OpportunityExportNumberData = [
    {
        id: 1,
        title: "25",
        titleStartSpan: null,
        titleEndSpan: "%",
        isStartSpanSymbol: false,
        isEndSpanSymbol: true,
        desc: "of data breaches are caused by Human Error",
    },
    {
        id: 2,
        title: "3.5",
        titleStartSpan: "$",
        isStartSpanSymbol: true,
        isEndSpanSymbol: false,
        titleEndSpan: "m",
        desc: "average total cause to remediate breach caused by human error",
    },
    {
        id: 3,
        title: "133",
        titleStartSpan: "$",
        titleEndSpan: "m",
        isStartSpanSymbol: true,
        isEndSpanSymbol: false,
        desc: "average per record cost of a breach caused by Human Error",
    },
    {
        id: 4,
        title: "242",
        titleStartSpan: null,
        titleEndSpan: null,
        isStartSpanSymbol: false,
        isEndSpanSymbol: false,
        desc: "days average time to identify and resolve a Data Breach",
    }
]

const 
humanErrorData = [
    {
        id: 1,
        title: "25",
        titleStartSpan: null,
        titleEndSpan: "%",
        isStartSpanSymbol: false,
        isEndSpanSymbol: true,
        desc: "of data breaches are caused by Human Error",
    },
    {
        id: 2,
        title: "3.5",
        titleStartSpan: "$",
        isStartSpanSymbol: true,
        isEndSpanSymbol: false,
        titleEndSpan: "m",
        desc: "average total cause to remediate breach caused by human error",
    },
    {
        id: 3,
        title: "133",
        titleStartSpan: "$",
        titleEndSpan: "m",
        isStartSpanSymbol: true,
        isEndSpanSymbol: false,
        desc: "average per record cost of a breach caused by Human Error",
    },
    {
        id: 4,
        title: "242",
        titleStartSpan: null,
        titleEndSpan: null,
        isStartSpanSymbol: false,
        isEndSpanSymbol: false,
        desc: "days average time to identify and resolve a Data Breach",
    }
]


const cyberCrimesReport = [
    {
        id: 1,
        title: "35",
        titleStartSpan: null,
        titleEndSpan: "%",
        isStartSpanSymbol: false,
        isEndSpanSymbol: true,
        desc: "of companies in a global survey were targeted by an SSL or TLS-based attack",
    },
    {
        id: 2,
        title: "200",
        titleStartSpan: null,
        isStartSpanSymbol: false,
        isEndSpanSymbol: true,
        titleEndSpan: "m",
        desc: "ransomware attacks occurred in the first nine months of 2020",
    },
    {
        id: 3,
        title: "54",
        titleStartSpan: null,
        titleEndSpan: "%",
        isStartSpanSymbol: false,
        isEndSpanSymbol: true,
        desc: "more organizations recorded a growth of insider threats in 2018",
    },
    {
        id: 4,
        title: "6.4",
        titleStartSpan: null,
        titleEndSpan: 'b',
        isStartSpanSymbol: false,
        isEndSpanSymbol: true,
        desc: "days average time to identify and resolve a Data Breach",
    }

]

export { OpportunityExportData, OpportunityExportNumberData ,humanErrorData,cyberCrimesReport}