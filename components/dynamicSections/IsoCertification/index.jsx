import Content from "@/components/common/Content";
import ExpertImage from "@/components/common/ExpertImage";
import PlayList from "@/components/common/PlayList";
import Title from "@/components/common/Title";
import cn from "@/utils/helper/cn";
import { globalImages } from "@/utils/images/globaIImages";
import Link from "next/link";

const IsoCertification = ({ color, data, img }) => {
    const borderVariant = {
        'primary': 'border-primary',
        'redThree': 'border-redThree',
        'sky': 'border-sky',
        'yellow': 'border-yellow',
        'secondary': 'border-secondary',
        'skyFour': 'border-skyFour',
    }
    const bgVariant = {
        'primary': 'bg-primary/10',
        'redThree': 'bg-redThree/10',
        'sky': 'bg-sky/10',
        'yellow': 'bg-yellow/10',
        'secondary': 'bg-secondary/10',
        'skyFour': 'bg-skyFour/10',
    }
    return (
        <section className='max-w-[1200px] mx-3 md:mx-auto flex flex-col gap-5'>
            <Title className="text-start">{data.title}</Title>
            <Content>{data.content.label}</Content>
            <div className={cn(`border-x-[20px] p-5 flex flex-wrap items-center justify-evenly gap-3 md:gap-y-0 ${borderVariant[color]}`)}>
                {data.content.organizationTypes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className={cn(`size-8 shrink-0 rounded-full flex items-center justify-center ${bgVariant[color]}`)}>
                            <div className={cn(`size-3 rounded-full border ${borderVariant[color]}`)}>
                            </div>
                        </div>
                        <Content>{item}</Content>
                    </div>
                ))}
                <div className="flex gap-10"></div>
            </div>
            <Content className="my-3">{data.content.listLabel}</Content>
            <div className="w-full flex flex-col-reverse md:flex-row gap-10">
                <div className='w-full md:w-7/12 flex flex-col gap-3 md:gap-[22px]'>
                    {data.content.list.map((option, index) => (
                        <PlayList key={index} color={color}>
                            {option}
                        </PlayList>
                    ))}
                </div>
                <div className='w-full md:w-5/12 h-fit'>
                    <ExpertImage color={color} imageSrc={img ? img : globalImages.expert} altText="expert" />
                </div>
            </div>
            <div>
                <p className="text-sm md:text-base text-lightBGBodyText">
                    If your company is still not compliant with GDPR, feel free to take the help of our <span><Link href="/gdpr_compliance" className="text-blue-600 underline underline-offset-4">GDPR compliance consultancy.</Link></span>
                </p>
            </div>

        </section>
    );
};

export default IsoCertification;