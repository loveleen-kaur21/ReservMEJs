import ToggleButton from '../components/ToggleButton'
import styles from '../styles/Rooms.module.css'

const RoomForms = ({rooms}) => {
    return (
        <div>
            <div className={styles.roomCard}>
                <h2>Studio</h2>
                <ToggleButton />
            </div>
            <div className={styles.roomCard}>
                <h2>1 Bedroom</h2>
                <ToggleButton />
            </div>
            <div className={styles.roomCard}>
                <h2>2 Bedroom</h2>
                <ToggleButton />
            </div>
            <div className={styles.roomCard}>
                <h2>Premium Suite</h2>
                <ToggleButton />
            </div>
            <div className={styles.roomCard}>
                <h2>Presidential</h2>
                <ToggleButton />
            </div>
        </div>
    )
}

export default RoomForms
