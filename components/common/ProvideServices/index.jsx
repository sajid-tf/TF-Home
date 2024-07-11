
import cn from '@/utils/helper/cn';
import Image from 'next/image';
import Title from '@/components/common/Title';
import Content from '@/components/common/Content';
import Subtitle from '@/components/common/SubTitle';
import { IoPlaySharp } from 'react-icons/io5';
const ProvideServices = ({ renderData, color = "yellow", bulletPoint = false }) => {
  return (
    <section className='max-w-[1200px] mx-auto'>
      <Title className="mb-12 text-center">{renderData?.header}</Title>
      {
        renderData?.subTitle && <p className="mb-12 text-center md:w-4/6 m-auto w-full">{renderData?.subTitle}</p>
      }
      <div className="flex flex-col gap-10">
        {
          renderData?.services.map((item) => (
            <div key={item?.id} className={cn("relative flex flex-col md:flex-row gap-[18px] border-t-4 md:border-t-0 md:border-l-4 bg-white  p-4 md:p-10",
              {
                "border-yellow": color === "yellow",
                "border-sky": color === "sky",
                "border-primary": color === "primary",
                "border-secondary": color === "secondary",
                "border-redThree": color === "redThree",
                "border-yellowThree": color === "yellowThree",
              })}>
              <div className={cn("absolute -top-12 left-1/2 -translate-x-1/2 md:-left-0 md:top-1/2 md:-translate-y-1/2  w-[92px] h-[92px] rounded-full flex items-center justify-center", {
                "bg-secondary/20": color === "secondary",
                "bg-redThree/20": color === "redThree",
                "bg-primary/20": color === "primary",
                "bg-sky/20": color === "sky",
                "bg-yellow/20": color === "yellow",
                "bg-yellowThree/20": color === "yellowThree",
              })}>
                <div className={cn("bg-secondary w-[78px] h-[78px]  rounded-full flex items-center justify-center", {
                  "bg-secondary": color === "secondary",
                  "bg-redThree": color === "redThree",
                  "bg-primary": color === "primary",
                  "bg-sky": color === "sky",
                  "bg-yellow": color === "yellow",
                  "bg-yellowThree": color === "yellowThree",
                })}>
                  {item?.icon}
                </div>
              </div>
              <Image src={JSON.parse(JSON.stringify(item?.img))} alt={item.title} width={400} height={250} className='object-contain object-center' />
              <div>
                <Subtitle className="mb-[18px]"> {item?.title}</Subtitle>
                {
                  !bulletPoint && <Content>{item.desc}</Content>
                }
                <div className='flex flex-col gap-5'>
                  {
                    bulletPoint && item?.points?.map(point => (
                      <div className={`flex gap-5 items-center`}>
                        <IoPlaySharp className={cn('size-6 shrink-0', {
                          'text-redThree': color === 'redThree',
                          'text-primary': color === 'primary',
                          'text-secondary': color === 'secondary',
                          'text-yellowTwo': color === 'yellowTwo',
                          'text-sky': color === 'sky',
                          'text-purpleTwo': color === 'purpleTwo',
                          'text-yellowThree': color === 'yellowThree'
                        })} />
                        <div className='text-lightBGText text-sm md:text-base'>{point}</div>
                      </div>
                    ))
                  }
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </section>

  );
};

export default ProvideServices;