import styles from '../styles/Rooms.module.css'

const RoomForms = ({rooms}) => {
    return (
        <div>
            <div className={styles.roomCard}>
                <h2>Studio</h2>
            </div>
            <div className={styles.roomCard}>
                <h2>1 Bedroom</h2>
            </div>
            <div className={styles.roomCard}>
                <h2>2 Bedroom</h2>
            </div>
            <div className={styles.roomCard}>
                <h2>Premium Suite</h2>
            </div>
            <div className={styles.roomCard}>
                <h2>Presidential</h2>
            </div>
        </div>
    )
}

export default RoomForms
