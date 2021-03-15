import React from 'react'

import styles from './Footer.module.css'

export default function Footer(props) {
    return (
        <div className={styles.footerWrapper}>

            <div className={styles.footerLinks}>
                <ul>
                    <li>{props.footerLink1}</li>
                    <li>{props.footerLink2}</li>
                    <li>{props.footerLink3}</li>
                    <li>{props.footerLink4}</li>
                </ul>
            </div>
            <hr/>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2021 Nutrition-Boost</p>
            </div>
        </div>
    )
}
