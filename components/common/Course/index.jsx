
const Course = ({ renderedData, numberOfCard = 3 }) => {
    const numberOfCards = {
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4'
    }

    return (
        <section className="max-w-[1200px] mx-3 md:mx-auto">
            <h3 className="text-3xl text-center font-bold text-lightBGText mb-8">{renderedData?.title ? renderedData.title : null}</h3>
            <p className="text-base text-center max-w-[1040px] mx-auto mb-20">{renderedData?.description}</p>
            <div className={`grid grid-cols-1 md:grid-cols-2  gap-5 ${numberOfCards[numberOfCard]}`}>
                {renderedData?.course.map((item, index) => (
                    <div className="pt-20 px-10 pb-10 w-full bg-white border-t-4 border-secondary relative" key={index}>
                        <div className="absolute bg-secondary/20 -top-12 left-1/2 -translate-x-1/2  w-[92px] h-[92px] rounded-full flex items-center justify-center">
                            <div className="bg-secondary  w-[78px] h-[78px]  rounded-full flex items-center justify-center">
                                {item?.icon}
                            </div>
                        </div>
                        <h4 className="text-2xl font-bold mb-[18px] text-center">{item?.title}</h4>
                        <ul className="space-y-[18px] list-outside list-disc">
                            {item?.content?.map((content, index) => (
                                <li className="text-lightBGBodyText text-base font-normal" key={index}>{content}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Course;