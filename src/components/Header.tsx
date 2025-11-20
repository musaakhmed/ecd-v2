import React from 'react';
import Navbar from '@/components/Navbar'

const Header = () => {
    return (
        <header className='h-16 bg-white top-0 left-0 sticky flex items-center justify-center'>
            <section  className='flex items-center justify-between container mx-auto'>
                <div className='font-semibold'>ECD</div>
                <div className='flex items-center justify-between'>
                    <Navbar />
                </div>
            </section>
        </header>
    );
};

export default Header;