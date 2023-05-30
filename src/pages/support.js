import NextLink from "next/link";
import Head from 'next/head';
import { NextPage } from "next";
import styles from '../styles/Home.module.css';
import Header from '../components/header.js';

export default function About(props) {
  return (
    <div className={styles.background}>
      <Head>
        <title>Support | Bits & Bobs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <Header/>

        <div className={styles.column}>
          
          <div className={styles.desc}>

            <div className={styles.box}>
              <img className={styles.smalllogo} src="/Bits&Bobs Icon.png"/>
              <p className={styles.smalltitle}>bits & bobs</p>
            </div>

            <h1 className={styles.title2}>Support</h1>
            
            <br/>
            <p className={styles.headline}>You can contact us directly via email at any time for support, feedback, or bug reports. We'll try our best to get back to you within a few hours or so.</p>

            <br/>
            <h3 className={styles.headline}><a href="mailto:rupertusapps@gmail.com"><b>Email Contact:<br/><u>rupertusapps@gmail.com</u></b></a></h3>
            <br/>

            <p className={styles.desc}>If you are contacting us about an issue in the app, please include the following details in your submission:</p>
            <h3 className={styles.headline}>Bits & Bobs version • device you are using • iOS version</h3>
            <p className={styles.desc}>This makes it faster for us to resolve any issues you may be facing.</p>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        
        <br/><br/><br/><br/><br/><br/>
      </main>
    </div>
  )
}
