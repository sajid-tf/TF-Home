"use client";
import Content from "@/components/common/Content";
import { act, useEffect, useState } from "react";
import Image from "next/image";
import cn from "@/utils/helper/cn";
import { Toaster, toast } from 'sonner'
import bdFlag from '@/public/Images/regional-office/bd.png'

import turkeyFlag from '@/public/Images/regional-office/turkey.png'
import canadaFlag from "@/public/Images/regional-office/canada.png"
import ukFlag from '@/public/Images/regional-office/uk.png'
import usaFlag from '@/public/Images/regional-office/usa.png'
import CompanyHero from "@/components/dynamicSections/HeroVariants/CompanyHero";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaCalendarCheck, FaHandPointUp } from "react-icons/fa";
import { InlineWidget } from "react-calendly";
import { Bitrix24Form } from 'react-bitrix24-form';
import { BsHandIndex } from "react-icons/bs";


const BGColor = {
  BCS: "bg-skyThree/10",
  PCS: "bg-green/10",
  TFG: "bg-primary/10",
}
const activeBGColor = {
  BCS: "bg-skyThree",
  PCS: "bg-green",
  TFG: "bg-primary",
}
const textColor = {
  BCS: "text-skyThree",
  PCS: "text-green",
  TFG: "text-primary",
}

const formOptions = [
  {
    slug: "BCS",
    label: "Business Cybersecurity"
  },
  {
    slug: "PCS",
    label: "Personal Cybersecurity"
  },
  {
    slug: "TFG",
    label: "TechForing Growth"
  }
]

const Page = () => {
  const baseURL = "https://cmsadmin.techforing.com/api/v1/blog"
  const [active, setActive] = useState('USA')
  const [activeFormItem, setActiveFormItem] = useState(formOptions[0].slug)
  const [countryList, setCountryList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [countryName, setCountryName] = useState('')
  const [serviceName, setServiceName] = useState('')
  const [isForm, setIsForm] = useState(false);
  const [contactForm, setContactForm] = useState(null);
  const [tabName, setTabName] = useState("call")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'country') {
      setCountryName(value);
    } else if (name === 'service_name') {
      setServiceName(value);
    }
  };

  const fetchList = async (url, setState) => {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchList(`${baseURL}/country/list/`, setCountryList);
    fetchList(`${baseURL}/service/list/`, setServiceList);
  }, []);

  useEffect(() => {
    if (countryList.length > 0) {
      setCountryName(countryList[0]?.default_iso_alpha)
    }
  }, [countryList]);

  useEffect(() => {
    if (countryName && serviceName) {
      getContactForm();
    }
  }, [serviceName]);

  const getContactForm = async () => {
    setIsForm(false);
    setContactForm(null);
    const url = `${baseURL}/contactus/form/?service_name=${serviceName}&country=${countryName}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        response.status === 500 && toast.error('Internal Server Error!');
        response.status === 404 && toast.error('NO Services Found!');
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setContactForm(data);
      setIsForm(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <Toaster position="top-right" richColors />
      <section className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10 py-4">
        <div className="w-full lg:max-w-[1200px] mx-auto flex flex-col gap-24">
          <div className="w-full mx-auto flex flex-col md:flex-row gap-10 bg-lightWhite p-3 rounded-md">
            <div className="w-full lg:py-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                {formOptions?.map((item, index) => (
                  <button key={index} className={`py-2 px-4 text-2xl rounded-md ${activeFormItem === item?.slug ? activeBGColor[item?.slug] : BGColor[item?.slug]} ${activeFormItem === item?.slug ? "text-strongWhite w-[90%] md:w-full" : textColor[item?.slug]} translate-transform duration-700 ease-in-out w-[80%] mx-auto md:w-full hover:scale-105 cursor-pointer`}
                    onClick={() => {
                      setActiveFormItem(item.slug);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex md:flex-row flex-col items-center justify-evenly gap-5 px-6 md:px-24 py-2">
                <select
                  name='country'
                  value={countryName}
                  onChange={handleInputChange}
                  className="w-full py-2 px-2 text-lg rounded-md bg-white text-lightBGText border animate-blinkShadowSlowly">
                  {countryList?.map((option, index) => (
                    <option key={index} value={option.ISO_alpha}>
                      {option?.countryName}
                    </option>
                  ))}
                </select>
                <select
                  name='service_name'
                  onChange={handleInputChange}
                  defaultValue='' className="w-full py-2 px-2 text-lg rounded-md bg-white text-lightBGText border animate-blinkShadow ">
                  <option value='' disabled>Select Service Name</option>
                  {serviceList?.map((option, index) => (
                    <option key={index} value={option?.value}>
                      {option?.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* DeskTop Views */}
              <div className="w-full hidden md:flex flex-col md:flex-row items-start justify-between px-1 gap-4">
                {/* left section */}
                <div className="left w-full">
                  <div className="flex items-center justify-center flex-col gap-2 text-center py-4">
                    <div className="py-1">
                      <h2 className="font-bold text-[30px]" >Want To Get In Touch?</h2>
                      <p>Share your queries in the form below, and your request will be directed to the right person.</p>

                    </div>
                  </div>
                  {
                    activeFormItem === "PCS" &&
                    isForm && (
                      <div>
                        <Bitrix24Form
                          src={contactForm?.script_url ? contactForm?.script_url : "https://cdn.bitrix24.com/b15773863/crm/form/loader_596.js"}
                          data={contactForm?.data_b24_form ? contactForm?.data_b24_form : "inline/596/t7wx11"}
                        />
                      </div>
                    )
                  }
                  {activeFormItem === "BCS" &&
                    <div>
                      <Bitrix24Form
                        src="https://cdn.bitrix24.com/b15773863/crm/form/loader_122.js"
                        data="inline/122/9ojlac"
                      />
                    </div>}
                  {activeFormItem === "TFG" &&
                    <div>
                      <Bitrix24Form
                        src='https://cdn.bitrix24.com/b15773863/crm/form/loader_596.js'
                        data="inline/596/t7wx11"
                      />
                    </div>
                  }
                </div>
                {/* right section */}
                <div className="right w-full">
                  <div className="flex items-center justify-center flex-col gap-2 text-center py-4">
                    <div className="py-1">
                      <h2 className="font-bold text-[30px]">Interested in a Meeting?</h2>
                      <p className="px-1">We are here to help. Pick a date, schedule a meeting. Let's connect and discuss how we can assist you.</p>
                    </div>
                  </div>
                  {
                    activeFormItem === "BCS" && <InlineWidget url={"https://calendly.com/techforing/appointment?hide_gdpr_banner=1"} />
                  }

                  {
                    activeFormItem === "PCS" && isForm && <InlineWidget url={contactForm?.calendly_url ? contactForm?.calendly_url : "https://calendly.com/techforing/appointment?hide_gdpr_banner=1"} />
                  }

                  {
                    activeFormItem === "TFG" && <InlineWidget url={"https://calendly.com/techforing/appointment?hide_gdpr_banner=1"} />
                  }
                </div>
              </div>

              {/* Responsive Views */}
              <div className="block md:hidden">

                {/* Tabs */}
                <div className=" flex justify-center my-2 pt-3 border-b">
                  <div
                    className={` w-1/2  py-2 flex items-center justify-center gap-1  rounded-se-[28px] cursor-pointer 
                  ${tabName === "call" ? `${activeFormItem === "BCS" ? BGColor["BCS"] : activeFormItem === "PCS" ? BGColor["PCS"] : BGColor["TFG"]} ${activeFormItem === "BCS" ? textColor["BCS"] : activeFormItem === "PCS" ? textColor["PCS"] : textColor["TFG"]}` : 'bg-cardBg text-lightBlack'}
                    cursor-pointer translate-transform duration-700 ease-in-out`
                    }
                    onClick={() => setTabName("call")}
                  >
                    <IoCallSharp className="text-xl" />
                    <h6 className="text-base">Request A Call Back </h6>
                  </div>
                  <div
                    className={` w-1/2 py-2 flex  items-center justify-center gap-1 rounded-ss-[28px] cursor-pointer  
                     ${tabName === "meeting" ? `${activeFormItem === "BCS" ? BGColor["BCS"] : activeFormItem === "PCS" ? BGColor["PCS"] : BGColor["TFG"]} ${activeFormItem === "BCS" ? textColor["BCS"] : activeFormItem === "PCS" ? textColor["PCS"] : textColor["TFG"]}` : 'bg-cardBg text-lightBlack'} 
                     cursor-pointer translate-transform duration-700 ease-in-out`
                    }
                    onClick={() => setTabName("meeting")}
                  >
                    <FaCalendarCheck className="text-xl " />
                    <h6 className="text-base">Schedule A Meeting</h6>
                  </div>
                </div>
                {/* Service Form Form */}
                {
                  tabName === "call" ?
                    <div className="w-full">
                      <div className="flex items-center justify-center flex-col gap-2 text-center pb-4">
                        <div className="py-1">
                          <h2 className="font-bold text-[30px]" >Want To Get In Touch?</h2>
                          <p>Share your queries in the form below, and your request will be directed to the right person.</p>

                        </div>
                      </div>
                      {
                        activeFormItem === "PCS" &&
                        isForm && (
                          <div>
                            <Bitrix24Form
                              src={contactForm?.script_url ? contactForm?.script_url : "https://cdn.bitrix24.com/b15773863/crm/form/loader_596.js"}
                              data={contactForm?.data_b24_form ? contactForm?.data_b24_form : "inline/596/t7wx11"}
                            />
                          </div>
                        )
                      }
                      {activeFormItem === "BCS" &&
                        <div>
                          <Bitrix24Form
                            src="https://cdn.bitrix24.com/b15773863/crm/form/loader_122.js"
                            data="inline/122/9ojlac"
                          />
                        </div>}
                      {activeFormItem === "TFG" &&
                        <div>
                          <Bitrix24Form
                            src='https://cdn.bitrix24.com/b15773863/crm/form/loader_596.js'
                            data="inline/596/t7wx11"
                          />
                        </div>
                      }
                    </div>
                    : <div className="right w-full">
                      <div className="flex items-center justify-center flex-col gap-2 text-center pb-4">
                        <div className="py-1">
                          <h2 className="font-bold text-[30px]">Interested in a Meeting?</h2>
                          <p className="px-1">We are here to help. Pick a date, schedule a meeting. Let's connect and discuss how we can assist you.</p>
                        </div>
                      </div>
                      {
                        activeFormItem === "BCS" && <InlineWidget url={"https://calendly.com/techforing/appointment?hide_gdpr_banner=1"} />
                      }

                      {
                        activeFormItem === "PCS" && isForm && <InlineWidget url={contactForm?.calendly_url ? contactForm?.calendly_url : "https://calendly.com/techforing/appointment?hide_gdpr_banner=1"} />
                      }

                      {
                        activeFormItem === "TFG" && <InlineWidget url={"https://calendly.com/techforing/appointment?hide_gdpr_banner=1"} />
                      }
                    </div>
                }
              </div>
              {
                activeFormItem === "PCS" && !isForm && <p className="border flex mx-auto text-secondary md:w-1/2 w-full flex-col text-center p-2 border-secondary border-dashed mt-2 rounded-md">
                  <FaHandPointUp className="animate-bounce flex mx-auto text-xl" />
                  Select your country and choose a service to receive the appropriate service form and a link to schedule a meeting with us via Calendly!</p>
              }
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Page;




