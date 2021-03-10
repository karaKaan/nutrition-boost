import React from 'react'
import BigCards from '../../components/bigCards/BigCards'

import zenVideo from '../../video/zen.mp4'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <BigCards videoSrc={zenVideo} width="1920px"  />
            
        </div>
    )
}
