import ToggleButton from '../components/ToggleButton'
import StudioDesc from '../components/StudioDesc'
import OneBedDesc from '../components/OneBedDesc'
import TwoBedDesc from '../components/TwoBedDesc'
import PremiumDesc from '../components/PremiumDesc'
import PresidentialDesc from '../components/PresidentialDesc'
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
                <ToggleButton onClick={() => setShowOneBed(!showOneBedDesc)} btnColor={showOneBedDesc ? "pink": "blue"} text={showOneBedDesc ? "Hide" : "Show more"} textColor={showOneBedDesc ? "black" : "white"}/>
                {showOneBedDesc && <OneBedDesc />}
            </div>
            <div className={styles.roomCard}>
                <h2>2 Bedroom</h2>
                <ToggleButton onClick={() => setShowTwoBed(!showTwoBedDesc)} btnColor={showTwoBedDesc ? "pink": "blue"} text={showTwoBedDesc ? "Hide" : "Show more"} textColor={showTwoBedDesc ? "black" : "white"} />
                {showTwoBedDesc && <TwoBedDesc />}
            </div>
            <div className={styles.roomCard}>
                <h2>Premium Suite</h2>
                <ToggleButton onClick={() => setShowPremium(!showPremiumDesc)} btnColor={showPremiumDesc ? "pink": "blue"} text={showPremiumDesc ? "Hide" : "Show more"} textColor={showPremiumDesc ? "black" : "white"} />
                {showPremiumDesc && <PremiumDesc />}
            </div>
            <div className={styles.roomCard}>
                <h2>Presidential</h2>
                <ToggleButton onClick={() => setShowPresidential(!showPresidentialDesc)} btnColor={showPresidentialDesc ? "pink": "blue"} text={showPresidentialDesc ? "Hide" : "Show more"} textColor={showPresidentialDesc ? "black" : "white"} />
                {showPresidentialDesc && <PresidentialDesc />}
            </div>
        </div>
    )
}

export default RoomForms
