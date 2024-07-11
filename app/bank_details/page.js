'use client'
import { Button } from "@/components/common";
import Subtitle from "@/components/common/SubTitle";
import { getBankDetails } from "@/utils/helper/globalFunctions";
import { useState } from "react";
import { GoAlertFill } from "react-icons/go";

const Page = () => {
    const [currency, setCurrency] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [error, setError] = useState({ currency: "", companyName: "" });
    const [data, setData] = useState(null);

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        if (name === "currency") {
            setCurrency(value);
            setError({ ...error, currency: "" });
        } else if (name === "companyName") {
            setCompanyName(value);
            setError({ ...error, companyName: "" });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        if (!currency) {
            setError((prevError) => ({ ...prevError, currency: "Please select a currency." }));
            isValid = false;
        }
        if (!companyName) {
            setError((prevError) => ({ ...prevError, companyName: "Please select a company name." }));
            isValid = false;
        }
        if (isValid) {
            event.target.reset();
            const bankdetails = getBankDetails(currency, companyName); 
            setData(bankdetails);
        }

    };
    return (
        <div className="max-w-[1200px] my-20 mx-3 md:mx-auto flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <GoAlertFill className="size-16 text-yellowTwo" />
                <Subtitle className="text-center">VERIFY TECHFORING OFFICIALS BANK ACCOUNT DETAILS</Subtitle>
            </div>
            <p className="text-sm text-red font-medium italic max-w-[800px] mx-auto text-center">
                Please do not send money to any individual bank accounts or via crypto, even if any of our representatives send you that.
                TechForing accepts wire transfer only in the Company Bank Accounts.
            </p>
            <form onSubmit={handleSubmit} className="max-w-[800px] w-full mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-3">
            <div className="flex-1 w-full">
                <select 
                    name="currency" 
                    className="w-full border-2 outline-none border-gray-300 rounded-md shadow-sm hover:border-primary focus:border-primary p-2" 
                    onChange={handleSelectChange}
                    value={currency}
                >
                    <option value="" disabled>Select Currency</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EURO (€)</option>
                    <option value="POUND">POUND (£)</option>
                </select>
                {error.currency && <div className="text-red text-sm px-1 mt-1">{error.currency}</div>}
            </div>
            <div className="flex-1 w-full">
                <select 
                    name="companyName" 
                    className="w-full border-2 outline-none border-gray-300 rounded-md shadow-sm hover:border-primary focus:border-primary p-2"
                    onChange={handleSelectChange}
                    value={companyName}
                >
                    <option value="" disabled>Select Company Name</option>
                    <option value="tfltd">Techforing Ltd</option>
                    <option value="tfllc">TechForing LLC</option>
                </select>
                {error.companyName && <div className="text-red px-1 text-sm mt-1">{error.companyName}</div>}
            </div>
            <div className="flex-1 w-full">
                <Button 
                    type="submit" 
                    variant="contained" 
                    size='small' 
                    className="w-full hover:bg-secondary hover:text-white"
                >
                    Search
                </Button>
            </div>
            </div>
            </form>
            {
                data && 
                    <div className="flex flex-col gap-1 py-5">
                    {
                        data?.length > 0 &&  <p className="px-1 text-center md:text-right text-deepGreen text-xs font-medium italic">If account matches first/last digits and belongs to Techforing Ltd or Techforing LLC, consider processing the invoice</p>
                    }   
                    <div className="container mx-auto">
                   
                        <div className="overflow-x-auto">
                        <div className="min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                <th
                                    className="px-5 py-3 border-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Account Holder
                                </th>
                                <th
                                    className="px-5 py-3 border-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Account Number / IBAN
                                </th>
                                </tr>
                            </thead>
                            <tbody> 
                            {data?.length === 0 ? (
                            <tr>
                                <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                                colSpan="3"
                                >
                                <p className="text-gray-900 whitespace-no-wrap">We apologize, Your search did not yield any results. For assistance, please reach out to our support team at  <a href="mailto:smile@techforing.com" className="text-blue-500 hover:underline">smile@techforing.com </a>. Thank you for your understanding.</p>
                                </td>
                            </tr>
                            ) : (
                            data?.map((item, index) => (
                                <tr key={index}>
                                <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-center">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.accHolder}</p>
                                </td>
                                <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-center">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.accNumber}</p>
                                </td>
                                </tr>
                            ))
                            )}
                            </tbody>
                            </table>
                        </div>
                        </div>
                        </div>
                    </div>
            }  
        </div>
    );
}

export default Page;
