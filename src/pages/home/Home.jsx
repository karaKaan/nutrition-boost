import React from 'react'
import BigCards from '../../components/bigCards/BigCards'
import SuccessBtn from '../../components/buttons/SuccessBtn'

import zenVideo from '../../video/zen.mp4'
import cookingVid from '../../video/cooking.mp4'
import pills from '../../video/pills.mp4'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <BigCards videoSrc={zenVideo} width="1920px"  />
            <div className={styles.homeContent}>
                <video src={cookingVid} autoPlay loop muted/>
                <div className={styles.vidContent}>
                    <h1>GET YOUR NUTRITION THE RIGHT WAY</h1>
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
            <div className={styles.homeContent}>
                <div id={styles.pillsVidContent} className={styles.vidContent}>
                    <h1>NO NEED FOR VITAMINE PILLS</h1>
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
                <video id={styles.pillsVid} src={pills} autoPlay loop muted/>
            </div>

            <div className={styles.endContent}>
                <h1> READY TO CHANGE YOUR LIFE</h1>
                <SuccessBtn btnName="Get Started" />
            </div>

        </div>
    )
}
