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
                        <label>
                        <input type="number" aria-label="123"/>
                            
                        </label>
                        <p>Height in cm</p>
                        <label>
                        <input type="number"/>
                        cm
                        </label>
                        <p>Weight in kg</p>
                        <label>
                        <input type="number"/>
                        kg
                        </label>
                    </div>

                </div>
        </div>
    )
}
