import Link from 'next/link'
import styles from '../styles/Rooms.module.css'

const TwoBedDesc = () => {
    return (
        <div>
            <p>Spread out in the separate living room with sleeper sofa and two bedrooms with a TV in all three spaces. Each two-bedroom suite includes a workstation, a wet bar, a refrigerator, and a microwave.      $154</p>
            <Link href="/checkout/Twobed" >
                <button className={styles.selectLink}>Select</button>
            </Link>
        </div>
    )
}

export default TwoBedDesc
