import React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import { sidebar_en, sidebar_ko } from './../../Helper';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../../Components/Navbar/Navbar';
import { ReactSVG } from 'react-svg';

import './styles.css';
import { setActive, setMenuActive } from '../../../Store/Main/main.action';

const Index = () => {

    const Main = useSelector(state => state.Main)
    const menu_content = Main.active === 'admin' ? sidebar_ko.admin : sidebar_ko.receptionist
    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log(Main.menu_active)
    }, [Main.active, Main.menu_active])

    const sideBarEvent = () => {
        document.querySelector(".sidebar").classList.toggle('open')
        menuBtnChange()
    }

    const menuBtnChange = () => {
        if (document.querySelector(".sidebar").classList.contains("open")) {
            document.querySelector("#btn").classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        } else {
            document.querySelector("#btn").classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
    }


    return (
        <HashRouter>
            <div>
                <Navbar />
                <div className="sidebar open">
                    <div className="logo-details">
                        <i className='bx bxl-figma icon'></i>
                        <div className="logo_name">{sidebar_en.title} <br /> {sidebar_ko.title}</div>
                        <i className='bx bx-menu' id="btn" onClick={sideBarEvent}></i>
                    </div>

                    <div className="active-title">
                        <img src={menu_content.logo_url} /> 
                        <span className="active-text">{menu_content.main_title}</span>
                    </div>

                    <ul className="nav-list">
                        {menu_content.child_label.map((v, i) =>
                            <li key={i} onClick={() => dispatch(setMenuActive(v.id))} >
                                <NavLink to={v.url} className={Main.menu_active === v.id ? "active-menu" : "" }>
                                    <span className="links_name">{v.label}</span>
                                </NavLink>
                                <span className="tooltip">{v.label}</span>
                            </li>
                        )}

                    </ul>
                    {Main.active !== 'admin' ?
                        <div className="button-admin" onClick={() => dispatch(setActive('admin'))}>
                            <img src={sidebar_ko.admin.logo_purple} />
                            <span className="active-text">Admin</span>
                        </div>
                        :
                        <>
                        </>}
                </div>
                <section className="home-section">
                    {/* <Route exact path="/" component={Trigatra} />
                        <Route path="/pancagatra" component={Pancagatra} />
                        <Route path="/kalender" component={Kalender} />
                        <Route path="/covid" component={Covid} />
                        <Route path="/user" component={User} />
                        <Route path="/admin" component={Admin} /> */}
                </section>
            </div>

            {/* <Route exact path="/" component={Login} /> */}

        </HashRouter>
    )
}

export default Index;