
import CircleWrapper from './CircleWrapper';

const index = () => {
    return (
        <section className='flex flex-col items-center bg-white'>
            <h5 className='text-secondary text-lg font-medium mb-3'>Process</h5>
            <h3 className='text-lightBGText text-4xl font-bold mb-14'>How Fatal Human Error Can Be For Cybersecurity</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <CircleWrapper>
                    <h3 className='text-4xl font-bold text-lightBGText'>25%</h3>
                    <p className='text-base font-normal text-lightBGText'>of data breaches are caused by Human Error</p>
                </CircleWrapper>
                <CircleWrapper>
                    <h3 className='text-4xl font-bold text-lightBGText'>$3.5</h3>
                    <p className='text-base font-normal text-lightBGText'>average total cause to remediate breach caused by human error</p>
                </CircleWrapper>
                <CircleWrapper>
                    <h3 className='text-4xl font-bold text-lightBGText'>$133</h3>
                    <p className='text-base font-normal text-lightBGText'>average per record cost of a breach caused by Human Error</p>
                </CircleWrapper>
                <CircleWrapper>
                    <h3 className='text-4xl font-bold text-lightBGText'>242</h3>
                    <p className='text-base font-normal text-lightBGText'>days average time to identify and resolve a Data Breach</p>
                </CircleWrapper>
            </div>
           

        </section>
    );
};

export default index;