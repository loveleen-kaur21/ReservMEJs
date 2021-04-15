import Link from 'next/link'
import styles from '../styles/Rooms.module.css'

const OneBedDesc = () => {
    return (
        <div>
            <p>Including a separate living room with sleeper sofa and a bedroom with a TV in both spaces. Each one-bedroom suite features a workstation, a wet bar, a refrigerator, and a microwave.      $99</p>
            <Link href="/guestpaymentinfo" >
                <button className={styles.selectLink}>Select</button>
            </Link>
        </div>
    )
}

export default OneBedDesc
