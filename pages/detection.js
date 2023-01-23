import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { OpenCvProvider, useOpenCv } from 'opencv-react';
import {useEffect} from 'react';

export default function Detection() {
  const onLoaded = (cv) => {
    console.log('opencv loaded', cv)
  }

  return (
    <div className={styles.container}>
        <Head >
            <title>
                Detection
            </title>

            <main>
                <h1 className={styles.title}>
                Detect a go board
                </h1>
            </main>
            <OpenCvProvider onLoad={onLoaded} openCvPath='../opencv/opencv.js'>
              <MyComponent />
            </OpenCvProvider>
        </Head>
    </div>
    
  )
}

function MyComponent() {
  const { loaded, cv } = useOpenCv();

  useEffect(() => {
    if (cv) {
    }
  }, [cv])

  return <p>OpenCv React test</p>
}
