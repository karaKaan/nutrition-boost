import React from 'react'
import { NavLink } from 'react-router-dom'


import styles from './Navbar.module.css'


export default function Navbar(props) {
    return (
            <div className={styles.navbarWrapper}>
                <nav className={styles.nav}>
                    {props.isLogo === true ? (
                        <NavLink to="/">
                            <img className={styles.logo} src={props.logoUrl} alt="Companies logo" width="100px" height="100px"/>
                        </NavLink>
                    ):("")}

                    <ul className={styles.navbar}>
                        <NavLink to={props.link1} activeClassName="selected">
                            <li>{props.navList1}</li>
                        </NavLink>
                        <NavLink to={props.link2} activeClassName="selected">
                            <li>{props.navList2}</li>
                        </NavLink>
                        <NavLink to={props.link3} activeClassName="selected">
                            <li>{props.navList3}</li>
                        </NavLink>
                        <NavLink to={props.link4} activeClassName="selected">
                        <li>{props.navList4}</li>
                        </NavLink>
                        {props.isLogin === true ? (
                            <NavLink to={props.linkRegister}>
                                <li className={styles.register}>{props.navListLogin}</li>
                            </NavLink>
                        ):("")}
                    </ul>
                </nav>
            </div>


        )
}
