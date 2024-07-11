'use client';
import React, { useState } from 'react';
import Accordion from '@/components/common/Faq/Accordion';
import cn from '@/utils/helper/cn';

const FaqWrapper = ({ children, className }) => {
  return <div className={className}>{children}</div>;

}
const Faq = ({ title, questions, color = 'primary', leftSubtitle }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggle = (index) => {
    if (index === activeAccordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:gap-4">
      {title && <h1 className="text-4xl mb-4 text-lightBGText text-center font-tertiary font-bold">{title}</h1>}
      {leftSubtitle &&
        <>
          <h4 className={cn('text-lightBGText text-xl md:text-2xl font-normal py-3 md:py-6 px-5 md:px-10 border-l-[30px]', {
            'border-sky': color === 'sky',
            'border-secondary': color === 'secondary',
            'border-redThree': color === 'red',
            'border-yellow': color === 'yellow',
            'border-yellowThree': color === 'yellowThree',
            'border-primary': color === 'primary',
            'border-secondaryTwo': color === 'secondaryTwo',
            'border-purpleTwo': color === 'purpleTwo',
            'border-purple': color === 'purple',
            'border-green': color === "green",
            'border-yellowTwo': color === 'yellowTwo',
          })}>{leftSubtitle}</h4>
          <FaqWrapper className="md:mx-[30px] gap-4 flex flex-col">
            {questions?.map((faqItem, index) => (
              <Accordion
                color={color}
                key={faqItem.title}
                {...faqItem}
                isActive={index === activeAccordion}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </FaqWrapper>
        </>
      }
      {
        !leftSubtitle &&
        <>
          {questions.map((faqItem, index) => (
            <Accordion
              color={color}
              key={faqItem.title}
              {...faqItem}
              isActive={index === activeAccordion}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </>
      }


    </div>
  );
};

export default Faq;
