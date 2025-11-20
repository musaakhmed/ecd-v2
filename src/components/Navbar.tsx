import React from 'react';
import Link from 'next/link'

const menu: {title: string; link: string}[] = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'About',
        link: '/about',
    },
    {
        title: 'Projects',
        link: '/projects',
    },
    {
        title: 'Titres Services',
        link: '/services',
    },
]

const Navbar = () => {
    return (
        <section className='flex items-center justify-between space-x-6'>
            <nav className='flex items-center justify-between space-x-4'>
            {
                menu.map(({title, link}) => (
                        <Link key={link} href={link}>{title}</Link>
                ))
            }
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Contactez-nous
            </button>
        </section>
    );
};

export default Navbar;