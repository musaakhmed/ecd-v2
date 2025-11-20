import React from 'react';
import Navbar from '@/components/Navbar'

const Header = () => {
    return (
        <header className='h-16 flex items-center justify-between container mx-auto'>
            <div>ECD</div>
            <div className='flex items-center justify-between'>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;