import styles from '../styles/Button.module.css'

const ToggleButton = ({onClick, btnColor, textColor, text}) => {
    return (
        <button onClick={onClick} className={styles.btn} style={{backgroundColor: btnColor, color: textColor}}>{text}</button>
    )
}

export default ToggleButton
