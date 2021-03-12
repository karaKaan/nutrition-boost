import React from 'react'

import styles from './BigCards.module.css'

export default function BigCards(props) {
    return (
        <div className={styles.bigCardsWrapper}>
            <div className={styles.videoWrapper}>
                <video loop="true" autoplay="true" src={props.videoSrc}  width={props.width}></video>
            </div>
            <div className={styles.bigCardsOverlay}></div>

            <div className={styles.videoContent}>
                <h1>FIND YOUR <br/>INNER PEACE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Sequi laborum est veritatis natus voluptatibus inventore maxime rem cum animi nobis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Sequi laborum est veritatis natus voluptatibus inventore maxime rem cum animi nobis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Sequi laborum est veritatis natus voluptatibus inventore maxime rem cum animi nobis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Sequi laborum est veritatis natus voluptatibus inventore maxime rem cum animi nobis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Sequi laborum est veritatis natus voluptatibus inventore maxime rem cum animi nobis.
                </p>
            </div>
        </div>
    )
}
