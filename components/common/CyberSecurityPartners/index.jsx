import cn from "@/utils/helper/cn";

const CyberSecurityPartners = ({ renderData, color = "sky" }) => {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col gap-5 p-3 md:p-0">
      <h3 className="text-2xl  md:text-4xl font-bold text-lightBGText">{renderData.title}</h3>
      <p className="text-sm md:text-base font-normal text-justify text-lightBGText">{renderData.para1}</p>
      <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        {renderData.process.map((item, index) => (
          <div className="flex justify-center items-center text-center flex-col gap-[18px] max-w-[106px]" key={index}>
            <div
              className={cn(
                " w-[92px] h-[92px] rounded-full flex items-center justify-center",
                {
                  "bg-secondary/20": color === "secondary",
                  "bg-redThree/20": color === "redThree",
                  "bg-primary/20": color === "primary",
                  "bg-sky/20": color === "sky",
                  "bg-yellow/20": color === "yellow",
                }
              )}
            >
              <div
                className={cn(
                  "bg-secondary w-[78px] h-[78px] rounded-full flex items-center justify-center",
                  {
                    "bg-secondary": color === "secondary",
                    "bg-redThree": color === "redThree",
                    "bg-primary": color === "primary",
                    "bg-sky": color === "sky",
                    "bg-yellow": color === "yellow",
                  }
                )}
              >
                {item.icon}
              </div>
            </div>
            <p className="text-lg font-normal text-lightBGText">{item.title}</p>
          </div>
        ))}
      </div>
      <p className="text-base md:text-base font-normal text-justify text-lightBGText">
        {renderData.para2}
      </p>
    </section>
  );
};

export default CyberSecurityPartners;