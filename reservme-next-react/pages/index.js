import Head from 'next/head'
import RoomForms from '../components/RoomForms'
import styles from '../styles/Header.module.css'

export default function Home({rooms}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReservME</title>
      </Head>

      <RoomForms rooms={rooms} />
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000`)
  const rooms = await res.json()

  return {
    props: {
      rooms,
    },
  }
}