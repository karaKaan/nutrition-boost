import React from 'react'

import styles from "./Weight.module.css"

export default function Weight() {
    return (
        <div>
            <div className={styles.weightWrapper}>
                <div className={styles.leftSection}>
                    <h1>Get your Stuff</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, quisquam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, quisquam.
                    </p>
                </div>
                <div className={styles.rightSection}>
                    <h1>123132133</h1>
                </div>
            </div>
                <div className={styles.calculationForm}>
                    <div className={styles.calculationName}>
                        <p>Age</p>
                        <input type="number"/>
                        <p>Height in cm</p>
                        <input type="number"/>
                        <p>Weight in kg</p>
                        <input type="number"/>
                    </div>

                </div>
        </div>
    )
}
