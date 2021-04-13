import ToggleButton from '../components/ToggleButton'
import StudioDesc from '../components/StudioDesc'
import { useState, useEffect } from 'react'
import styles from '../styles/Rooms.module.css'

const RoomForms = ({rooms}) => {
    const [showStudioDesc, setShowStudio] = useState(false)
    const [showOneBedDesc, setShowOneBed] = useState(false)
    const [showTwoBedDesc, setShowTwoBed] = useState(false)
    const [showPremiumDesc, setShowPremium] = useState(false)
    const [showPresidentialDesc, setShowPresidential] = useState(false)
    return (
        <div>
            <div className={styles.roomCard}>
                <h2>Studio</h2>
                <ToggleButton onClick={() => setShowStudio(!showStudioDesc)} btnColor={showStudioDesc ? "pink" : "blue"} text={showStudioDesc ? "Hide" : "Show more"} textColor={showStudioDesc ? "black" : "white"} />
                {showStudioDesc && <StudioDesc />}
                
            </div>
            <div className={styles.roomCard}>
                <h2>1 Bedroom</h2>
                {/* <ToggleButton onClick={toggleButton} /> */}
            </div>
            <div className={styles.roomCard}>
                <h2>2 Bedroom</h2>
                {/* <ToggleButton onClick={toggleButton} /> */}
            </div>
            <div className={styles.roomCard}>
                <h2>Premium Suite</h2>
                {/* <ToggleButton onClick={toggleButton} /> */}
            </div>
            <div className={styles.roomCard}>
                <h2>Presidential</h2>
                {/* <ToggleButton onClick={toggleButton} /> */}
            </div>
        </div>
    )
}

export default RoomForms
