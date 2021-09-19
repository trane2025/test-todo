import React from 'react'
import Navigation from '../components/Navigation';


const links = [
    { title: 'Главная', href: '/', exact: true },
    { title: 'Redux-form', href: '/redux-form', exact: false },
    { title: 'Final-form', href: '/final-form', exact: false },
    { title: 'Рекурсивный список', href: '/rec-list', exact: false },
]

function Layout({ children }) {
    return (
        <>
            <Navigation links={links} />
            {children}
        </>
    )
}

export default Layout;


