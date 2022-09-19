import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const navList = [
        { content: 'Main', href: '/' },
        { content: 'CardList', href: 'cardList' },
        { content: 'Notice', href: 'notice' },
        { content: 'Event', href: 'event' },
        { content: 'EventToggle', href: 'eventToggle' },
    ]
    return (
        <div id='nav'>
            <h2 className='blind'>메인 메뉴</h2>
            <ul>
                {
                    navList.map((element, index) => {
                        return (
                            <li key={index}><NavLink to={element.href} className={({ isActive }) => isActive ? 'navList on' : 'navList'}>{element.content}</NavLink></li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Nav;