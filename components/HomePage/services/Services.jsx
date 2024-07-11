import React from 'react';
import ServiceLayout from './ServiceLayout';
import Organization from './trustedOrganization/Organization';
import ClientSays from './clientSays/ClientSays';
import { organizationData } from '@/utils/mock/dummyData';

const Services = () => {
    return (
        <section className='flex items-center justify-center mt-16 md:mt-0'>
            <div className='serviceContainer container'>
                <h2><span className='text-secondary'>Our</span> Cybersecurity Services</h2>
                <p className='text-base'>TechForing’s cutting-edge cybersecurity services offer unwavering protection, rapid incident response, and swift recovery, protecting businesses and individuals from relentless, evolving cyber threats.</p>
                <ServiceLayout />
                <div className='pt-12'>
                    <Organization
                        title={<h4 className={`text-primary text-[20px] md:text-5xl font-medium text-center py-3 md:py-10`}>Trusted By <span className='text-secondary'>WORLD’S</span> Top Organizations</h4>}
                        renderedData={organizationData}
                    />
                    <ClientSays />
                </div>
            </div>
        </section>
    );
};

export default Services;