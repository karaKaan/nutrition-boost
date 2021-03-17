import React from 'react'
import { Link } from 'react-router-dom'


import styles from './Footer.module.css'

export default function Footer(props) {
    return (
        <div className={styles.footerWrapper}>

            <div className={styles.footerLinks}>
                <ul>
                    <Link to={props.footerLink1}>
                        <li>{props.footerText1}</li>
                    </Link>
                    <Link to={props.footerLink2}>
                        <li>{props.footerText2}</li>
                    </Link>
                    <Link to={props.footerLink3}>
                        <li>{props.footerText3}</li>
                    </Link>
                    <Link to={props.footerLink4}>
                        <li>{props.footerText4}</li>
                    </Link>
                </ul>
            </div>
            <hr/>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2021 Nutrition-Boost</p>
            </div>
        </div>
    )
}
