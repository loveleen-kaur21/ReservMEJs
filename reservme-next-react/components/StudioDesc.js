import Link from "next/link"
import styles from '../styles/Rooms.module.css'

const StudioDesc = () => {
    return (
        <div>
            <p>Featuring a plush bed and living space with extra seating, a sleeper sofa, and a TV that can be seen from every angle of the suite. Each studio suite includes a workstation, a wet bar, a refrigerator, and a microwave.      $149</p>
            <Link href="/checkout/studio" >
                <button className={styles.selectLink}>Select</button>
            </Link>
        </div>
    )
}

export default StudioDesc
