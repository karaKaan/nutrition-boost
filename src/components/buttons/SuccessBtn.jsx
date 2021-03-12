import React from 'react'
import styles from './Button.module.css'

export default function SuccessBtn(props) {
    return (
        <ul className={styles.successBtnWrapper}>
            <li className={styles.successBtn}>{props.btnName}</li>
        </ul>
    )
}
