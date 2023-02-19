import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/Components/NavBar'
import pic from "../../public/images/gary.jpg";
import Footer from '@/Components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Gary Stroup Developer</title>
        <meta name="description" content="Gary Stroup web development portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <Image
          className='profilepic'
          src={pic}
          alt="gary stroup profile picture"
        />
        <div>
          <p className={styles.introduction}>Hi! I'm Gary</p>
          <p className={styles.details}>I am a self-taught web developer </p>
          <div className={styles.details}>
            <p>I enjoy writing code to build statuc websites and dynamic web applications</p>
            <p>You can find my blogs on Medium, where I share my knowledge of web development</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
