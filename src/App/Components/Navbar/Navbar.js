import React from 'react';
import { navbar } from './../../../App/Helper';
import { useSelector, useDispatch } from 'react-redux'; 
import { setActive } from '../../../Store/Main/main.action';
import './navbar-styles.css';


export default function Index() {

    const dispatch = useDispatch();

    const _setActive = (v) => {
        dispatch(setActive(v))
    }

    return (
        <div className="navbar-container">
            <div className="side-left">
                {navbar.menu.map((v, i) => 
                    <div key={i} className="menu" onClick={() => _setActive(v.action)}>
                        <span>{v.label}</span>
                    </div>
                )}
            </div>
            <div className="side-right">
            
            </div>
        </div>
    )
}
