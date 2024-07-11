"use client";
import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ServiceItems from './Items/ServiceItems';
import ProductItems from './Items/ProductItems';
import ResourceItems from './Items/ResourceItems';
import MoreItems from './Items/MoreItems';
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { mainNavItems, moreNavItems, productNavItems, serviceNavItems } from '@/utils/mock/dummyData';
import { Button } from '@/components/common';
import { FaSignInAlt } from 'react-icons/fa';
import ukFlag from '@/assets/nav/uk.png';
import usaFlag from '@/assets/nav/usa.png';
import whatsapp from '@/assets/nav/whatsapp.png';
import { extractDomain } from '@/utils/helper/globalFunctions';

const MainNav = () => {
  const [openNav, setOpenNav] = useState({ itemName: "", open: false });
  const [open, setOpen] = useState(false);
  const init = { item: '', subItem: '', subItemLink: '', redirect: false }
  const [subItem, setSubItem] = useState(init);
  const [collapsedItems, setCollapsedItems] = useState([]);
  const handleCollapse = (item) => {
    if (collapsedItems.includes(item)) {
      setCollapsedItems(collapsedItems.filter(i => i !== item));
    } else {
      setCollapsedItems([...collapsedItems, item]);
    }
  };
  const baseURL = "https://cmsadmin.techforing.com/api/v1";
  const [categories, setCategories] = useState([]);
  const [siteInfo, setSiteInfo] = useState([]);
  const domainName = "https://www.techforing.com/";
  const [matchedSite, setMatchedSite] = useState(null);

  const fetchSiteName = async () => {
    const response = await fetch(`${baseURL}/blog/site/name/list/?page_size=10&page=1`);
    const data = await response.json();
    setSiteInfo(data?.data?.results);
  };

  const fetchCategories = async () => {
    if (matchedSite) {
      const response = await fetch(`${baseURL}/blog/post/for/all/landingPage/?site=${matchedSite}`);
      const data = await response.json();
      setCategories(data?.all_categories);
    }
  };

  useEffect(() => {
    fetchSiteName();
  }, []);

  useEffect(() => {
    if (siteInfo.length > 0) {
      const domainToMatch = extractDomain(domainName);
      const matched = siteInfo.find(site => extractDomain(site.site_url) === domainToMatch);
      if (matched) {
        setMatchedSite(matched.posted_site);
      }
    }
  }, [domainName, siteInfo]);

  useEffect(() => {
    fetchCategories();
  }, [matchedSite]);


  const handleResponsiveNav = (isOpen) => {
    setOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setTimeout(() => {
        setCollapsedItems([]);
      }, 500);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <section>
      <div className='hidden md:block bg-white'>
        <div className='flex items-center justify-center shadow-sm relative'>
          <nav className='mainNav flex items-center justify-between px-20'>
            <Link href={"/"} className='logo'>
              <Image src={JSON.parse(JSON.stringify(globalImages?.logo))} alt="logo" />
            </Link>
            <ul className='navItems flex items-center gap-6'>
              {["Home", "Services", "Products", "Resources", "More"].map((item, index) => (
                <li key={index} className={`common-btn hover:bg-lightWhite ${openNav?.itemName === item ? 'bg-lightWhite' : ''}`}
                  onMouseEnter={() => setOpenNav({
                    itemName: item,
                    open: openNav?.itemName === item ? !openNav?.open : true,
                  })}>
                  {
                    item === "Home" ?
                      <Link href="/">{item}</Link>
                      :
                      item === "Resources" ?
                        <Link href="/resources">{item}</Link>
                        :
                        <span>{item}</span>
                  }
                </li>
              ))}
            </ul>
            <div className='flex items-center gap-3.5'>
              <Button asChild size="small" variant="contained" color="secondary" startIcon={<FaSignInAlt className='size-4' />}>
                <Link href={"https://customer.techforing.com/login"} >Customer Login</Link>
              </Button>
              <Button asChild size="small" variant="outlined" color="secondary" >
                <Link href={"/findus"} >Contact Us</Link>
              </Button>
            </div>
          </nav>
        </div>
        {openNav?.itemName !== "Home" && openNav?.open &&
          <div
            onMouseLeave={() => setOpenNav({ itemName: "", open: false })}
            className='absolute top-[138px] left-0 right-0 mx-auto bg-strongWhite shadow-lg z-[9999]'
            style={{ width: 'auto', maxWidth: '1200px' }}
          >
            {openNav?.itemName === "Services" ? <ServiceItems /> :
              openNav?.itemName === "Products" ? <ProductItems /> :
                openNav?.itemName === "Resources" ? <ResourceItems /> : <MoreItems />}
          </div>
        }
      </div>
      {/* responsive */}
      <div className={`md:hidden bg-white transition-all duration-300`}>
        {/* <div className='flex items-center gap-3 bg-primary text-white px-4 py-1'>
          <div className='flex items-center gap-1'>
            <TbAlertTriangle className='text-yellow text-2xl' />
            <span className='text-sm'>Notice</span>
          </div>
          <marquee
            className="marquee"
            behavior="scroll"
            direction="left"
            scrollamount="3"
          >
            <span className="marquee_text text-sm">Please be aware of copycats and scammers who are pretending to be TechForing.</span>
          </marquee>
          <span>
            <Link
              href="/scammer_list/"
              className='text-yellow text-nowrap hover:underline text-sm'
            >
              Details Here
            </Link>
          </span>
        </div> */}
        <div className='px-4 py-1 res_nav'>
          <div className='flex justify-between items-center'>
            <Link href={"/"} className='logo'>
              <Image className='w-[80px]' src={JSON.parse(JSON.stringify(globalImages?.logo))} alt="logo" />
            </Link>
            <div className='flex items-center gap-3 justify-end'>
              <div className="contact_icon dropdown">
                <img className="wts_icon dropdown-toggle" data-toggle="dropdown" src={whatsapp.src} alt="whatsapp number" />
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="https://wa.me/+16162718544" target="_blank">
                    <img className="flag_icon" src={usaFlag.src} alt="phone" /> +16162718544
                  </Link>
                  <Link className="dropdown-item" href="https://wa.me/+442038147566" target="_blank">
                    <img className="flag_icon" src={ukFlag.src} alt="phone" /> +442038147566
                  </Link>
                </div>
              </div>
              <div className='flex items-center gap-3.5'>
                <button className='common-btn bg-secondary text-white'>Client Log In</button>
              </div>
              {
                open ?
                  <IoCloseSharp className='md:text-[35px] text-2xl opacity-90 cursor-pointer' onClick={() => {
                    setTimeout(() => {
                      setSubItem(init)
                    }, 500);
                    handleResponsiveNav(false);
                  }} />
                  :
                  <BiMenu className='md:text-[35px] text-2xl opacity-90 cursor-pointer' onClick={() => handleResponsiveNav(true)} />
              }
            </div>
          </div>
        </div>
        <div className={`w-screen overflow-x-hidden transition-all duration-500 absolute top-[44.9px] z-[9999] overflow-y-scroll ${open ? 'h-[calc(100vh-44.9px)]' : 'h-0'}`}>
          <div className={`flex w-full h-full bg-white transition-all duration-500 ${subItem.item ? '-translate-x-full' : 'translate-x-0'}`}>
            <div className='p-4 min-w-full'>
              {
                mainNavItems.map((nav, index) => {
                  const list = nav.name === 'Services' ?
                    serviceNavItems.map(item => ({ id: item.id, name: item.serviceName, link: item?.link || '', redirect: false }))
                    : nav.name === 'Products' ?
                      productNavItems.map(item => ({ id: item.id, name: item.name, link: item?.link || '', redirect: true }))
                      :
                      nav.name === 'Resources' ?
                        categories?.map(item => ({ id: item.id, name: item, link: '/resources', redirect: true }))
                        :
                        nav.name === 'More' ?
                          moreNavItems.map(item => ({ id: item.id, name: item.category, link: item?.link || '', redirect: false }))
                          :
                          [];
                  return (
                    <div key={index}>
                      <div className='flex items-center justify-between py-2'>
                        {
                          nav.link ?
                            <Link onClick={() => handleResponsiveNav(false)} href={nav.link} className='hover:translate-x-1 duration-300'>
                              <span className='font-medium text-secondary'>{nav.name}</span>
                            </Link>
                            :
                            <span onClick={() => handleCollapse(nav.name)} className='font-medium cursor-pointer text-secondary'>{nav.name}</span>
                        }
                        {
                          nav.name !== 'Home' &&
                          <MdKeyboardArrowDown onClick={() => handleCollapse(nav.name)} className={`text-secondary text-2xl transition-all duration-300 ${collapsedItems?.includes(nav.name) ? 'rotate-180' : 'rotate-0'}`} />
                        }
                      </div>

                      {
                        list?.length > 0 &&
                        <div className={`bg-lightWhite transition-all duration-300 px-3 ${collapsedItems?.includes(nav.name) ? 'py-1' : 'h-0 py-0 px-0 overflow-hidden'}`}>
                          <ul className='flex flex-col'>
                            {list.map((singleItem, index) => (
                              singleItem.link && singleItem.redirect ?
                                <Link onClick={() => handleResponsiveNav(false)} href={singleItem.link} key={index} className='hover:translate-x-1 duration-300'>
                                  <li className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all flex justify-between items-center'>
                                    <span>{singleItem.name}</span><MdKeyboardArrowDown className={`text-primary/70 text-2xl transition-all duration-300 -rotate-90`} />
                                  </li>
                                </Link>
                                :
                                <li
                                  onClick={() => setSubItem({
                                    item: nav.name,
                                    subItem: singleItem.name,
                                    link: singleItem.link,
                                    redirect: singleItem.redirect
                                  })}
                                  className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all flex justify-between items-center'
                                  key={index}
                                >
                                  <span>{singleItem.name}</span><MdKeyboardArrowDown className={`text-primary/70  text-2xl transition-all duration-300 -rotate-90`} />
                                </li>
                            ))}
                          </ul>
                        </div>
                      }
                    </div>
                  )
                })
              }
              <div className="border-t-[0.5px] border-dotted border-secondary my-4">
                <div className='flex items-center justify-center mx-auto w-full gap-3.5 pt-4'>
                  <Button onClick={()=> handleResponsiveNav(false)} asChild size="small" variant="outlined" color="secondary" >
                    <Link href={"/get_start"} >Schedule A Meeting</Link>
                  </Button>
                  <Button onClick={()=> handleResponsiveNav(false)} asChild size="small" variant="outlined" color="secondary" >
                    <Link href={"/findus"} >Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className='min-w-full bg-white'>
              <div className='bg-lightWhite px-4'>
                <div
                  className='flex items-center justify-between py-2'
                  onClick={() => setSubItem(init)}
                >
                  <span className='font-medium text-secondary'>Back</span>
                  <MdKeyboardArrowDown className='text-secondary text-2xl rotate-90' />
                </div>
                <div className='pb-2'>
                  {
                    subItem?.link ?
                      <Link onClick={() => handleResponsiveNav(false)} className='block hover:translate-x-1 hover:text-secondary  duration-300' href={subItem?.link}>{subItem?.subItem}</Link>
                      :
                      <span className='hover:text-secondary  duration-300'>{subItem?.subItem}</span>
                  }
                </div>
              </div>
              <div className='p-4 bg-inherit'>
                {
                  subItem.subItem &&
                    subItem?.item === 'Services' ?
                    serviceNavItems.find(serviceNavItem => serviceNavItem.serviceName === subItem?.subItem)?.data?.map((item, index) => (
                      <div key={index}>
                        <div className='flex items-center justify-between py-2'>
                          {
                            item?.link ?
                              <Link onClick={() => handleResponsiveNav(false)} href={item?.link} className='hover:translate-x-1 duration-300'>
                                <span className='font-medium text-secondary'>{item.itemName}</span>
                              </Link>
                              :
                              <span className='font-medium text-secondary'>{item.itemName}</span>
                          }
                          {
                            item.childItems &&
                            <MdKeyboardArrowDown onClick={() => handleCollapse(item.itemName)} className={`text-secondary text-2xl transition-all duration-300 ${collapsedItems?.includes(item.itemName) ? 'rotate-180' : 'rotate-0'}`} />
                          }
                        </div>
                        {
                          item?.childItems?.length > 0 &&
                          <div className={`bg-lightWhite transition-all duration-300 px-3 ${collapsedItems?.includes(item.itemName) ? 'py-1' : 'h-0 py-0 px-0 overflow-hidden'}`}>
                            <ul className='flex flex-col'>
                              {item.childItems.map((singleItem, index) => {
                                return (
                                  <div>
                                    {
                                      singleItem.link ?
                                        <Link onClick={() => handleResponsiveNav(false)} href={singleItem.link} key={index} className='hover:translate-x-1 duration-300'>
                                          <li className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all'>
                                            {singleItem.name}
                                          </li>
                                        </Link>
                                        :
                                        <li
                                          className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all'
                                          key={index}
                                        >
                                          {singleItem?.childItems}
                                        </li>
                                    }
                                    <div className='ml-2'>
                                      {singleItem?.data?.length > 0 &&
                                        singleItem.data.map((subChildren, index) =>
                                          <Link onClick={() => handleResponsiveNav(false)} href={subChildren.link} key={index} className='hover:translate-x-1 duration-300'>
                                            <li className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all'>
                                              {subChildren.name}
                                            </li>
                                          </Link>
                                        )
                                      }
                                    </div>
                                  </div>
                                )
                              })}
                            </ul>
                          </div>
                        }
                      </div>
                    ))
                    :
                    subItem?.item === 'More' &&
                    <div className='bg-lightWhite px-3 py-1'>
                      <ul className='flex flex-col'>
                        {moreNavItems.find(moreNavItem => moreNavItem.category === subItem?.subItem)?.items?.map((moreItem, index) => (
                          moreItem.link ?
                            <Link onClick={() => handleResponsiveNav(false)} href={moreItem.link} key={index} className='hover:translate-x-1 duration-300'>
                              <li className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all'>
                                {moreItem.itemName}
                              </li>
                            </Link>
                            :
                            <li
                              className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all'
                              key={index}
                            >
                              {moreItem.itemName}
                            </li>
                        ))}
                      </ul>
                    </div>
                }
                <div className="border-t-[0.5px] border-dotted border-secondary my-4">
                  <div className='flex items-center justify-center mx-auto w-full gap-3.5 pt-4'>
                    <Button onClick={()=> handleResponsiveNav(false)} asChild size="small" variant="outlined" color="secondary" >
                      <Link href={"/get_start"} >Schedule A Meeting</Link>
                    </Button>
                    <Button onClick={()=> handleResponsiveNav(false)} asChild size="small" variant="outlined" color="secondary" >
                      <Link href={"/findus"} >Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNav;