
const Accordion = ({ title, answer, lists, isActive, onToggle, color }) => {
  const border = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    secondaryTwo: 'border-secondaryTwo',
    redThree: 'border-redThree',
    yellow: 'border-yellowTwo',
    purple: 'border-purpleTwo',
    green: 'border-green',
    purpleTwo: 'border-purpleTwo',
    yellowTwo: 'border-yellowTwo'
  }
  const fill = {
    primary: 'fill-primary',
    secondary: 'fill-secondary',
    secondaryTwo: 'fill-secondaryTwo',
    redThree: 'fill-redThree',
    yellow: 'fill-yellowTwo',
    purple: 'fill-purpleTwo',
    green: 'fill-green',
    purpleTwo: 'fill-purpleTwo',
    yellowTwo: 'fill-yellowTwo'
  }
  return (
    <div className="bg-secondaryLightBG">
      <button
        onClick={onToggle}
        className={`p-6 flex justify-between items-center w-full ${isActive ? `border-b-2 ${border[color]}` : ""}`}
      >
        <span className="font-medium text-base md:text-lg leading-6 text-lightBGText">{title}</span>
        <svg
          className={`${fill[color]} shrink-0 ml-[10px]`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isActive && "!rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isActive && "!rotate-180"
              }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-lightBGText text-base font-normal px-[30px] ${isActive
          ? "grid-rows-[1fr] opacity-100 py-[30px]"
          : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: answer }}></p>
          {lists && (
            <ul className="ml-4 text-sm md:text-base mt-2">
              {lists.map((list, index) => (
                <li className="py-2" key={index}>
                  {list}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default Accordion;