import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/Components/NavBar'



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
        
      </main>
    </>
  )
}
