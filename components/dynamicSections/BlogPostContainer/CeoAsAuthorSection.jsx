import React from 'react';
import Image from 'next/image';
const CeoAsAuthorSection = ({ ceoAsAuthor }) => {
  return (
   <div className='w-full md:w-[1000px]'>
     <section className="mt-[30px]">
      <div className="posts-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 items-center mt-6 md:mt-10">
        {ceoAsAuthor?.map((item, index) => (
          <div
            onClick={() => window.open(item.post_url, '_blank')}
            key={index}
            className="flex items-center justify-between gap-4 md:gap-5 flex-shrink-0 rounded-md bg-white hover:border-r-4 border-secondary cursor-pointer"
          >
            <Image
              className="h-20 w-20 md:h-20 overflow-hidden rounded-l-md"
              src={item.post_image}
              alt="image"
              width={1000}
              height={1000}
              quality={100}
            />
            <h6 className="text-sm md:text-base font-medium text-primary truncate w-[200px]">
              {item.post_title}
            </h6>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
};

export default CeoAsAuthorSection;