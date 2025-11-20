import React from 'react';
import Link from 'next/link'

const menu: {title: string; link: string}[] = [
    {
        title: 'About',
        link: '/about',
    },
    {
        title: 'Inclusion Numerique',
        link: '/EPNM',
    },
    {
        title: 'Ecole de Devoir',
        link: '/EDD',
    },
    {
        title: 'Titres Services',
        link: '/titres-service',
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
            <Link href='/contact'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer hover:scale-[101%] transition-all duration-100 ease-in">
                    Contactez-nous
                </button>
            </Link>
        </section>
    );
};

export default Navbar;