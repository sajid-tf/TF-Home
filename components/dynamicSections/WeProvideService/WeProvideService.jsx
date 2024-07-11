import { Button } from "@/components/common";
import Content from "@/components/common/Content";
import Title from "@/components/common/Title";
import cn from "@/utils/helper/cn";
import Image from 'next/image'
import Link from 'next/link';

const WeProvideService = ({ color, renderData }) => {
  return (
    <section className="max-w-[1200px] mx-3 md:mx-auto">
      <Title>{renderData.header}</Title>
      <div className="grid md:grid-cols-2 mt-10 gap-10">
        {renderData?.content?.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center relative pt-[200px]">
            <div className="absolute top-0">
              <div className="relative">
                <div className={cn('size-[280px] md:size-[356px] rounded-full flex items-center justify-center', {
                  "bg-secondary/[0.08]": color === "secondary",
                  "bg-redThree/[0.08]": color === "redThree",
                  "bg-primary/[0.08]": color === "primary",
                  "bg-sky/[0.08]": color === "sky",
                  "bg-yellow/[0.08]": color === "yellow",
                  "bg-purpleTwo/[0.08]": color === "purpleTwo",
                  "bg-skyFour/[0.08]": color === "skyFour"
                })}>
                  <div
                    className={cn(
                      "size-[200px] md:size-[276px] rounded-full flex items-center justify-center",
                      {
                        "bg-secondary/[0.16]": color === "secondary",
                        "bg-redThree/[0.16]": color === "redThree",
                        "bg-primary/[0.16]": color === "primary",
                        "bg-sky/[0.16]": color === "sky",
                        "bg-yellow/[0.16]": color === "yellow",
                        "bg-purpleTwo/[0.16]": color === "purpleTwo",
                        "bg-skyFour/[0.16]": color === "skyFour"
                      }
                    )}
                  >
                    <div
                      className={cn(
                        "size-[160px] md:size-[236px] rounded-full flex items-center justify-center",
                        {
                          "bg-secondary/[0.28]": color === "secondary",
                          "bg-redThree/[0.28]": color === "redThree",
                          "bg-primary/[0.28]": color === "primary",
                          "bg-sky/[0.28]": color === "sky",
                          "bg-yellow/[0.28]": color === "yellow",
                          "bg-purpleTwo/[0.28]": color === "purpleTwo",
                          "bg-skyFour/[0.28]": color === "skyFour"
                        }
                      )}
                    />

                  </div>
                </div>
                <div className="absolute z-10 top-[80px] md:top-[68px] left-1/2 -translate-x-1/2">
                  <Image src={item?.image?.src} alt={item?.image?.alt} width={220} height={220} />
                </div>
              </div>
            </div>
            <div
              className={cn(
                "flex flex-col gap-5 py-5 px-4 md:px-10 border-x-2 bg-strongWhite z-50",
                {
                  "border-x-purpleTwo": color === "purpleTwo",
                  "border-x-redThree": color === "redThree",
                  "border-x-sky": color === "sky",
                  "border-x-skyThree": color === "skyThree",
                  "border-x-secondary": color === "secondary",
                  "border-x-primary": color === "primary",
                  "border-x-yellow": color === "yellow",
                  "border-x-skyFour": color === "skyFour",
                }
              )}
            >
              <p className="text-sm md:text-base text-lightBGBodyText text-justify">{item?.desc}</p>
              <Button variant="borderLeft" className="w-full md:w-fit !text-strongWhite" color={color} asChild>
                <Link href={item?.btn?.url}>
                  {item?.btn?.text}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeProvideService;