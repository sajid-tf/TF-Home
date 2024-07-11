// TableOfContents.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TableOfContents = ({ tableOfContents, handleContentClick, className, activeIndex }) => {
  return (
    <div className={`bg-white py-2 shadow-sm md:sticky md:w-[330px] w-full md:top-[138px] md:h-[calc(100dvh-1px)] h-[30dvh] overflow-y-auto custom-scrollbar-style toc ${className}`}>
      <p className="px-4 py-3 rounded-[5px] bg-primary/10 font-semibold m-2 shadow-sm">
        TABLE OF CONTENT :
      </p>
      <ol>
        {tableOfContents?.map((data, index) => (
          <li className={`p-2 flex items-center justify-start gap-4 font-semibold ${activeIndex === index ? 'text-secondary' : 'text-black'}`} key={index}>
            <div className="w-[10%]">
              <div style={{ width: 40, height: 40 }}>
                <CircularProgressbar
                  value={activeIndex === index ? 100 : 0}
                  text={index + 1}
                  styles={buildStyles({
                    textColor: activeIndex === index ? '#5BBC2E' : '#000',
                    textSize: '36px',
                    pathColor: '#5BBC2E',
                    trailColor: '#d6d6d6',
                  })}
                />
              </div>
            </div>
            <a href="#"
              onClick={(event) => {
              event.preventDefault();
              handleContentClick(data?.title, index);
            }}>
              <p>{data?.title}</p>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContents;
