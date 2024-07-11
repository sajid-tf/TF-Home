const OurJourneyTopOneSvg = ({ color = "#182F59" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="202" viewBox="0 0 95 202" fill="none">
        <path d="M0 2H46.5V2C72.1812 2 93 22.8188 93 48.5V202" stroke={color} strokeWidth="4" />
    </svg>
)

const OurJourneyTopTwoSvg = ({ color = "#DB162F" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="202" viewBox="0 0 95 202" fill="none">
        <path d="M95 2H66C30.6538 2 2 30.6538 2 66V202" stroke={color} strokeWidth="4" />
    </svg>
)

const OurJourneyBottomOneSvg = ({ color = "#5BBC2E" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="202" viewBox="0 0 95 202" fill="none">
        <path d="M95 200H66C30.6538 200 2 171.346 2 136V0" stroke={color} strokeWidth="4" />
    </svg>
)

const OurJourneyBottomTwoSvg = ({ color = "#5BBC2E" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="202" viewBox="0 0 95 202" fill="none">
        <path d="M0 200H29C64.3462 200 93 171.346 93 136V0" stroke={color} strokeWidth="4" />
    </svg>
)


export { OurJourneyTopOneSvg, OurJourneyTopTwoSvg, OurJourneyBottomOneSvg, OurJourneyBottomTwoSvg};