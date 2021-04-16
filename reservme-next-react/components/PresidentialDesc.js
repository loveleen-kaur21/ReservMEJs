import Link from 'next/link'
import styles from '../styles/Rooms.module.css'


const PresidentialDesc = () => {
    return (
        <div>
            <p>Experience even more space and comfort in our Presidential Suite. Some hotels’ Presidential Suites feature an espresso machine, fireplace, a luxury bathroom feature like whirlpool tubs, or a conference table with seating for up to eight.      $259</p>
            <Link href="/checkout/Presidential" >
                <button className={styles.selectLink}>Select</button>
            </Link>
        </div>
    )
}

export default PresidentialDesc