import Link from 'next/link'
import styles from '../styles/Rooms.module.css'

const PremiumDesc = () => {
    return (
        <div>
            <p>Offering the same experience as our popular one-bedroom suites, Premium Suites include additional upgrades of Premium WiFi, a Keurig coffee brewer, plus snacks and drinks which are replenished daily.      $324</p>
            <Link href="/guestpaymentinfo" >
                <button className={styles.selectLink}>Select</button>
            </Link>
        </div>
    )
}

export default PremiumDesc
