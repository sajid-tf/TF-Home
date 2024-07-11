const TermsPolicyTextCard = ({ title, paragraph1, paragraph2, lists,lists2 }) => {
    return (
        <div>
            {/* <div className=" border-t-8 border-secondary w-[20%]  mt-3 -mb-3"></div> */}
            <h3 className="roboto text-[24px] font-medium text-[#333] border-w mt-3">{title}</h3>
            <div className='greenDivider  md:w-[30%] w-[60%] mt-1'></div>
            <p className="roboto text-[16px] leading-6 text-light-gray pe-3 mt-3">{paragraph1}</p>
            {lists && lists.length > 0 && (
                <ul className="list-disc text-light-gray ms-[50px] mt-2">
                    {lists.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
          {
            paragraph2 && <p className="roboto text-[16px] leading-6 text-light-gray pe-3 mt-3">{paragraph2}</p>
          }
           {lists2 && lists2.length > 0 && (
                <ul className="list-disc text-light-gray ms-[50px] mt-2">
                    {lists.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TermsPolicyTextCard;


