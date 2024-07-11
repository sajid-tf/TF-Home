import Content from "@/components/common/Content";
import Subtitle from "@/components/common/SubTitle";
import { GoAlertFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
    const scamLists = [
        'https://techforing.space',
        'https://tech-foring.com/',
        'http://refund-services.one',
        'http://techforing.yolasite.com',
        'https://techforing.zsc8899.com',
        'https://tech-foring.com/recovery-form?log=fanpage&sub_id_13=15',
        'https://www.facebook.com/profile.php?id=61552095466628',
    ];

    return (
        <div className="max-w-[800px] my-10 mx-3 md:mx-auto flex flex-col gap-2 md:gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <GoAlertFill className="size-16 text-yellowTwo" />
                <Subtitle>URGENT SCAM ALERT</Subtitle>
            </div>
            <Content>
                Due to our company's success, scammers and copycats are trying to impersonate us. Be cautious of unauthorized transactions and verify the authenticity of any communication.
            </Content>
            <Content className="text-base md:text-lg font-semibold">
                Always remember, the genuine Techforing Limited will only operate under the following criteria:
            </Content>
            <ul className="pl-2 md:pl-5 space-y-2 list-none">
                <li className="flex flex-row gap-2 items-center">
                    <FaCheck className="text-green" /> Company invoices issued by "Techforing LLC" or "Techforing LTD"
                </li>
                <li className="flex flex-row gap-2 items-center">
                    <FaCheck className="text-green" /> Official company bank accounts linked to Techforing Ltd.
                </li>
                <li className="flex flex-row gap-2 items-center">
                    <FaCheck className="text-green" /> Domains or subdomains ending with ".techforing.com"
                </li>
            </ul>
            <p className="text-sm text-red font-medium italic">
                Do NOT make any payments or communicate with individuals claiming to represent Techforing Limited unless they meet the above criteria.
            </p>
            <Content className="text-base md:text-lg font-semibold">
                We have identified the following websites as confirmed scams. Be cautious of the following fraudulent sites:
            </Content>
            <ul className="list-disc pl-6 space-y-2 text-blue-500">
                {scamLists.map((url, index) => (
                    <li key={index}>
                        <a href={url} className="underline" target="_blank" rel="noopener noreferrer">
                            {url}
                        </a>
                    </li>
                ))}
            </ul>
            <Content>
                If you proceed with transactions from any unverified sources falsely claiming to be Techforing Limited, you do so at your own risk. Techforing Limited will NOT be responsible for any losses incurred from dealings with scammers or unauthorized entities.
            </Content>
            <p className="text-base md:text-lg font-semibold text-lightBGText">
                Verify Techforing Officials Bank Account Details
                <Link
                    href="/bank_details"
                    target="_blank"
                    className="ml-2 text-base md:text-lg font-semibold text-blue-500 underline hover:text-blue-700"
                >
                    Click Here
                </Link>
            </p>
        </div>
    );
}
export default Page;