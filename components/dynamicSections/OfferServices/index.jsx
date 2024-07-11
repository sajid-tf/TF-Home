import Title from "@/components/common/Title";

const OfferServices = ({ renderData, color = "sky" }) => {
  const bgColor = {
    secondary: "bg-secondary",
    redThree: "bg-redThree",
    primary: "bg-primary",
    sky: "bg-sky",
    yellow: "bg-yellow",
    secondaryTwo: "bg-secondaryTwo",
  }
  const outerLightBG = {
    secondary: "bg-secondary/20",
    redThree: "bg-redThree/20",
    primary: "bg-primary/20",
    sky: "bg-sky/20",
    yellow: "bg-yellow/20",
    secondaryTwo: "bg-secondaryTwo/20",
  }
  return (
    <section className="w-full md:w-[1200px] md:mx-auto mx-3">
      <Title className="mb-[22px]">{renderData?.title}</Title>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center py-6 gap-[18px]">
        {renderData?.services?.map((item, index) => (
          <div className="w-[300px] lg:w-[346px] h-fit flex justify-center items-center gap-[18px]" key={index}>
            <div>
              <div className={`w-[106px] h-[106px] rounded-full ${outerLightBG[color]} flex items-center justify-center shadow-sm`}>
                <div className={`w-[78px] h-[78px] rounded-full ${bgColor[color]} flex items-center justify-center shadow-md`}>
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    {item?.icon}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h5 className="text-lg text-lightBGText font-semibold font-tertiary" dangerouslySetInnerHTML={{ __html: item?.title || "" }}></h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferServices;