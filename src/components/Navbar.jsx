import React from 'react'

import styles from './Navbar.module.css'


export default function Navbar(props) {
    return (
        
            <nav className={styles.nav}>
                {props.isLogo === true ? (
                    <img src={props.logoUrl} alt="Companies logo" width="100px" height="100px"/>
                ):("")}

                <ul className={styles.navbar}>
                    <li>{props.navList1}</li>
                    <li>{props.navList2}</li>
                    <li>{props.navList3}</li>
                    <li>{props.navList4}</li>
                    {props.isLogin === true ? (
                        <li>{props.navListLogin}</li>
                    ):("")}
                </ul>
            </nav>


        )
}
