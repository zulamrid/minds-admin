import React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import { label_en, label_ko } from './../../Helper'

import './styles.css';

const Index = () => {


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
                <div className="sidebar open">
                    <div className="logo-details">
                        <i className='bx bxl-figma icon'></i>
                        <div className="logo_name">{label_en.title} <br /> {label_ko.title}</div>
                        <i className='bx bx-menu' id="btn" onClick={sideBarEvent}></i>
                    </div>

                    <div className="active-title">
                        <span className="active-text">{label_ko.receptionist.main_title}</span>
                    </div>

                    <ul className="nav-list">
                        {label_ko.receptionist.child_label.map((v, i) =>
                            <li key={i}>
                                <NavLink to={v.url}>
                                 
                                    <span className="links_name">{v.label}</span>
                                </NavLink>
                                <span className="tooltip">{v.label}</span>
                            </li>
                        )}
                      
                        {/* <li className="profile">
                            <div className="profile-details">
                                <img src="https://e7.pngegg.com/pngimages/529/336/png-clipart-swat-computer-icons-police-avatar-swat-police-officer-people-thumbnail.png" alt="profileImg" />
                                <div className="name_job">
                                    <div className="name">Administrator</div>
                                    <div className="job"></div>
                                </div>
                            </div>
                            <button><i className='bx bx-log-out' id="log_out" ></i></button>
                        </li> */}
                    </ul>
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