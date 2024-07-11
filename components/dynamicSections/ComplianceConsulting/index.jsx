import Content from "@/components/common/Content";
import Title from "@/components/common/Title";
import cn from "@/utils/helper/cn";
import { IoPlaySharp } from "react-icons/io5";

const ComplianceConsulting = ({ color, data }) => {
    const iconColor = {
        primary: 'text-primary',
        redThree: 'text-redThree',
        sky: 'text-sky',
        yellow: 'text-yellow',
        secondary: 'text-secondary',
        skyFour: 'text-skyFour',
    }
    return (
        <section className='max-w-[1200px] mx-3 md:mx-auto'>
            <Title className="mb-5">{data.title}</Title>
            <div className={cn("md:border-x-[20px] md:p-5 flex flex-col gap-5", {
                'border-primary/20': color === 'primary',
                'border-redThree/20': color === 'redThree',
                'border-sky/20': color === 'sky',
                'border-yellow/20': color === 'yellow',
                'border-secondary/20': color === 'secondary',
                'border-skyFour/20': color === 'skyFour',
            })}>
                <Content className="text-justify">{data.content.desc}</Content>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-between">
                    {
                        data.content.list.map((item, index) => (
                            <div key={index} className="flex gap-[14px] items-center">
                                <div className={cn("size-8 shrink-0 rounded-full flex items-center justify-center", {
                                    'bg-primary/10': color === 'primary',
                                    'bg-redThree/10': color === 'redThree',
                                    'bg-sky/10': color === 'sky',
                                    'bg-yellow/10': color === 'yellow',
                                    'bg-secondary/10': color === 'secondary',
                                    'bg-skyFour/10': color === 'skyFour',
                                })}>
                                    <div className={cn("size-3 rounded-full border", {
                                        'border-primary': color === 'primary',
                                        'border-redThree': color === 'redThree',
                                        'border-sky': color === 'sky',
                                        'border-yellow': color === 'yellow',
                                        'border-secondary': color === 'secondary',
                                        'border-skyFour': color === 'skyFour',
                                    },
                                        {

                                            'bg-primary/20': color === 'primary',
                                            'bg-redThree/20': color === 'redThree',
                                            'bg-sky/20': color === 'sky',
                                            'bg-yellow/20': color === 'yellow',
                                            'bg-secondary/20': color === 'secondary',
                                            'bg-skyFour/20': color === 'skyFour',
                                        })}>
                                    </div>
                                </div>
                                <Content>{item}</Content>
                            </div>
                        ))
                    }
                </div>
                <Content className="text-justify">{data.content.desc2}</Content>
                <div className="grid md:grid-cols-2 gap-10 items-start justify-between">
                    {
                        data.content.list2.map((item, index) => (
                            <div key={index} className="flex gap-[14px] items-start">
                                <div className={cn("shrink-0 w-11 h-8 rounded-full flex items-center justify-center", {
                                    "bg-primary/10": color === 'primary',
                                    "bg-secondary/10": color === 'secondary',
                                    "bg-redThree/10": color === 'redThree',
                                    "bg-sky/10": color === 'sky',
                                    "bg-yellow/10": color === 'yellow',
                                    "bg-skyFour/10": color === 'skyFour',
                                })}>
                                    <div className={cn("w-6 h-3 flex items-center justify-center rounded-full", {
                                        "bg-primary/20": color === 'primary',
                                        "bg-secondary/20": color === 'secondary',
                                        "bg-redThree/20": color === 'redThree',
                                        "bg-sky/20": color === 'sky',
                                        "bg-yellow/20": color === 'yellow',
                                        "bg-purpleTwo/20": color === 'purpleTwo',
                                        "bg-skyFour/20": color === 'skyFour',
                                    })}>

                                        <IoPlaySharp className={`size-6 ${iconColor[color]}`} />
                                    </div>
                                </div>
                                <Content className="text-justify">{item}</Content>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ComplianceConsulting;