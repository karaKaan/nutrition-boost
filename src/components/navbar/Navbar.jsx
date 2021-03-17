import React from 'react'
import { Link } from 'react-router-dom'


import styles from './Navbar.module.css'


export default function Navbar(props) {
    return (
            <div className={styles.navbarWrapper}>
                <nav className={styles.nav}>
                    {props.isLogo === true ? (
                        <Link to="/">
                            <img className={styles.logo} src={props.logoUrl} alt="Companies logo" width="100px" height="100px"/>
                        </Link>
                    ):("")}

                    <ul className={styles.navbar}>
                        <Link to={props.link1}>
                            <li>{props.navList1}</li>
                        </Link>
                        <Link to={props.link2}>
                            <li>{props.navList2}</li>
                        </Link>
                        <Link to={props.link3}>
                            <li>{props.navList3}</li>
                        </Link>
                        <Link to={props.link4}>
                        <li>{props.navList4}</li>
                        </Link>
                        {props.isLogin === true ? (
                            <Link to={props.linkRegister}>
                                <li className={styles.register}>{props.navListLogin}</li>
                            </Link>
                        ):("")}
                    </ul>
                </nav>
            </div>


        )
}
