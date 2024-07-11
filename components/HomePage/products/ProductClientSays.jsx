import React from 'react';
import productBG from '@/assets/products/product-bg.png';
import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import ProductSaysSlider from './ProductSaysSlider';

const ProductClientSays = () => {
    return (
        <div className='relative md:pb-20'>
            <div className='mx-auto relative' style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <div className=''>
                    <div className='relative w-fit m-auto mb-6 md:mb-11'>
                        <h2 className='text-base lg:text-2xl text-lightBlack text-center whitespace-nowrap'>What Our <span className='text-primary'>Clients</span> Says About Our <span className='text-secondary'>Products</span></h2>
                        <Image src={JSON.parse(JSON.stringify(globalImages?.productTxtLogo))} alt='colorful-logo' className='absolute top-3 -right-6 w-[40px] h-[20px] md:w-[70px] md:h-[40px]' />
                    </div>
                </div>
                <div className=''>
                    <ProductSaysSlider />
                </div>
                <Image width={600} height={600} src={JSON.parse(JSON.stringify(productBG?.src))} alt='products-bg' className='-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
        </div>
    );
};

export default ProductClientSays;