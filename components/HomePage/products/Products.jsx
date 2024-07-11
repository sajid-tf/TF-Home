import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React from 'react';
import ProductCards from './ProductCards';
// import ProductClientSays from './ProductClientSays';

const Products = () => {
    return (
        <section className='flex flex-col item-center justify-center  px-5 md:px-0 '>
            <div className='container'>
                <h2 className='text-2xl lg:text-5xl text-primary font-tertiary font-bold text-center'><span className='text-secondary'>Our</span> Products</h2>
                <div className='w-full flex flex-col justify-center lg:flex-row gap-5 lg:gap-0 my-8 px-3 lg:px-0'>
                    <div className='w-fit flex items-center justify-end'>
                        <div className='productLogo flex items-end justify-center gap-4'>
                            <div className='w-[65px] h-[65px] lg:w-[85px] lg:h-[85px]'>
                                <Image src={JSON.parse(JSON.stringify(globalImages?.logoPartFive))} alt='logo' className='h-full w-full' />
                            </div>
                            <div className='productLogoTxt'>
                                <h6 className='text-sm text-primary'>TechForing</h6>
                                <h3 className='text-2xl lg:text-4xl uppercase text-primary font-bold'>Growth</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 productDesc'>
                        <p>
                            Take your business to new heights with TechForing Growth -  our cutting-edge business solutions. Harness the power of automation, AI, and insightful analytics to revolutionize your HR  management, recruitment process, and financial operations - with our all-in-one, innovative business management solution.
                        </p>
                    </div>
                </div>

                {/* Product Cards Component */}
                <ProductCards />
                {/* Product Client Says */}
                {/* <ProductClientSays /> */}
            </div>
        </section>
    );
};

export default Products;