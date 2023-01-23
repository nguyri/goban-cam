import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Detection() {
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
        </Head>
    </div>
    
  )
}
