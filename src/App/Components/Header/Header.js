import React from 'react';
import { useSelector } from 'react-redux';
import './header-styles.css';

export default function Header(props) {

    const title = useSelector(state => state.Main.menu_active)

    return (
        <div>
            <div >
                <span className="header-tag">{title.label}</span>
            </div>
            <div className="title-container">
                <span className="title">{title.title}</span>
            </div>
        </div>
    )
}
