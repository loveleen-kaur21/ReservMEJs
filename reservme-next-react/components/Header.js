import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>ReservME</h1>
            <p className={styles.description}>Where you reserve for a ME!</p>
        </div>
    )
}

export default Header
