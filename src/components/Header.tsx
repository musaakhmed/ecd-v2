import React from 'react';
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='h-16 bg-white top-0 left-0 sticky flex items-center justify-center'>
            <section  className='flex items-center justify-between container mx-auto'>
                <Link href='/'>
                    <div className='font-semibold'>ECD</div>
                </Link>
                <div className='flex items-center justify-between'>
                    <Navbar />
                </div>
            </section>
        </header>
    );
};

export default Header;