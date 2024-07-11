"use client";
import Content from "@/components/common/Content";
import { act, useEffect, useState } from "react";
import Image from "next/image";
import cn from "@/utils/helper/cn";
import findUSHeroImg from "@/asset/find-us/find-us.webp";
import { Toaster, toast } from 'sonner'
import bdFlag from '@/public/Images/regional-office/bd.png'
// import indFlag from '@/public/Images/regional-office/india.png'
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


  // useEffect(() => {
  //   if (isForm && contactForm) {
  //     // Hide all existing forms
  //     const existingForms = document.querySelectorAll('.b24-form-wrapper');
  //     existingForms.forEach(form => {
  //       form.style.display = 'none';
  //     });
  //     // Wait for the new form to be injected
  //     const checkForNewForm = setInterval(() => {
  //       const newForms = document.querySelectorAll('.b24-form-wrapper');
  //       if (newForms.length > existingForms.length) {
  //         clearInterval(checkForNewForm);
  //         // Show only the latest form
  //         newForms[newForms.length - 1].style.display = 'block';
  //       }
  //     }, 100);
  //     // Clean up
  //     return () => clearInterval(checkForNewForm);
  //   }
  // }, [isForm, contactForm]);

  console.log(contactForm?.script_url)
  return (
    <>
      <Toaster position="top-right" richColors />
      <section className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10">
        <CompanyHero
          className={'h-[250px] md:h-[600px]'}
          logoClasses={"h-[60px] mt-12 w-[70px]"}
          titleMiddleLine={"Find Us"}
          titleLowerLine={"Worldwide Offices"}
          desc={"We have offices in 6 countries around the world. Find the nearest office to you."}
          textColorVariant={'secondary'}
          bgImage={findUSHeroImg?.src}
          backDropUse={'true'}
        />
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
          {/* worldwide offices */}
          <div className="flex flex-col gap-10 -mt-10 md:mt-0">
            <h4 className='text-primary text-center text-xl md:text-4xl font-bold capitalize'>Worldwide Offices</h4>
            <div className='flex md:flex-row flex-col-reverse justify-between gap-10'>
              <div className='md:w-6/12 w-full rounded-md overflow-hidden'>
                {findUs[active].location}
              </div>
              <div className='p-2 md:w-6/12 w-full bg-lightWhite rounded-md flex flex-col items-center justify-center gap-10'>
                <div className='flex flex-col items-center gap-4'>
                  <IoLocationSharp className="text-8xl text-primary animate-bounce" />
                  <p className='text-center text-lightBGText text-lg'>
                    {findUs[active].address.split('\n').map((item, index) => (
                      <span key={index}>{item}<br /></span>
                    ))}
                  </p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-y-4 gap-x-3 text-lightBGText'>
                  {['USA', 'UK', 'CANADA', 'TURKEY', 'BD'].map((country, index) => (
                    <div key={index}
                      className={cn("flex items-center gap-2 rounded-md bg-white py-2 px-4 cursor-pointer shadow-sm text-lightBGText hover:scale-105 translate-transform duration-700 ease-out", {
                        "bg-primary text-white": country === active
                      })}
                      onClick={() => setActive(country)}>
                      <Image src={findUs[country].flag} alt={country} width={40} height={40} className="w-[40px] h-[40px] rounded-full object-contain" />
                      <Content className="text-inherit">{country}</Content>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Page;


const findUs = {
  USA: {
    address: '96 west 15th, Suite 205,\nHolland, Michigan, 49423, USA',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23425.814784432114!2d-86.111313!3d42.783554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819f2b92bbfffff%3A0x16aff07fc6a6ad22!2s96%20W%2015th%20St%20Suite%20205%2C%20Holland%2C%20MI%2049423%2C%20USA!5e0!3m2!1sen!2sbd!4v1691491758595!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    flag: usaFlag
  },
  UK: {
    address: '71–75 Shelton Street, Covent Garden,\nLondon, WC2H 9JQ, United Kingdom',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21465.692383576486!2d12.508828!3d47.73855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca66e312795%3A0x7ffd0edc82aa7573!2sCS24!5e0!3m2!1sen!2sbd!4v1691491801378!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    flag: ukFlag
  },
  CANADA: {
    address: 'University Avenue, Suite 2200,\nToronto, Ontario, Canada, M5H 3M7',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23095.58908103613!2d-79.385359!3d43.649237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2063fffff%3A0x6ade89c37141d35d!2s181%20University%20Ave%20%232200%2C%20Toronto%2C%20ON%20M5H%203M7%2C%20Canada!5e0!3m2!1sen!2sbd!4v1691492229793!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    flag: canadaFlag
  },
  TURKEY: {
    address: 'Kampyolu Caddesi, Kartal,\nIstanbul, Turkey',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24123.69051686111!2d29.159671000000003!3d40.90563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac366f23bf157%3A0x8e4dea29bace64e5!2sTechForing%20Ltd.!5e0!3m2!1sen!2sbd!4v1691491932902!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    flag: turkeyFlag
  },
  // IND: {
  //   address: 'DLF Two Horizon Centre, 5th Floor, DLF Phase V , Sector 43,\nGolf course Road, Gurgaon, Haryana 122009, India',
  //   location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112254.38789502511!2d77.096281!3d28.450935000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b58a137a1b%3A0x769c85e8414cd673!2sCorporatedge%20Two%20Horizon%20Centre!5e0!3m2!1sen!2sbd!4v1691492264219!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
  //   flag: indFlag
  // },
  BD: {
    address: 'Lane 1, Building 149, Suite 04,\nBaridhara DOHS, Dhaka',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.097265171372!2d90.41050707413875!3d23.815140086290118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c164817819b3%3A0x6056fe3699c5fd4e!2sTechForing%20Limited!5e0!3m2!1sen!2sbd!4v1691489212336!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    flag: bdFlag
  },
}

