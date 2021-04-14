import styles from '../styles/Button.module.css'

export const SubmitInfoButton = ({ color, text }) => {
    return (<button style={{ backgroundColor: color }} className={styles.btn}>{ text }</button>
    )
}

export default SubmitInfoButton