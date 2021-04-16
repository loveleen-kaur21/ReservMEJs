import Link from "next/link"
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <Link href="/">
            <a><h1 className={styles.title}>ReservME</h1></a>
            </Link>
            <p className={styles.description}>Where you reserve for a ME!</p>
        </div>
    )
}

export default Header
