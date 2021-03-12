import React from 'react'
import BigCards from '../../components/bigCards/BigCards'

import zenVideo from '../../video/zen.mp4'
import cookingVid from '../../video/cooking.mp4'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <BigCards videoSrc={zenVideo} width="1920px"  />
            <div className={styles.homeContent}>
                <video src={cookingVid} autoPlay loop muted/>
                <div className={styles.vidContent}>
                    <h1>Nutrition</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime incidunt aliquid asperiores natus praesentium totam odit nihil at optio, non fugiat quis fugit animi, 
                        veritatis doloribus laborum vitae explicabo illum.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime incidunt aliquid asperiores natus praesentium totam odit nihil at optio, non fugiat quis fugit animi, 
                        veritatis doloribus laborum vitae explicabo illum.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime incidunt aliquid asperiores natus praesentium totam odit nihil at optio, non fugiat quis fugit animi, 
                        veritatis doloribus laborum vitae explicabo illum.
                        </p>
                </div>
            </div>
        </div>
    )
}
