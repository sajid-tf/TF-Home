import React from 'react';
import UpperNav from './upperNav/UpperNav';
import MainNav from './mainNav/MainNav';
import Notice from './Notice';

const Header = () => {
    return (
        <section className='sticky top-0 z-[999]'>
            <UpperNav />
            <MainNav />
            <Notice />
        </section>
    );
};

export default Header;