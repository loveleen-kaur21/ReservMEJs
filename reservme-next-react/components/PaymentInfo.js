import styles from '../styles/Forms.module.css'
import { useState } from 'react'

const PaymentInfo = () => {
    const[cardCompany, setCardCompany] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [csv, setCsv] = useState('')
    const [expiration, setExpiration] = useState('')
    const [cardHolderName, setCardHolderName] = useState('')
    return (
        <form className={styles.addForm}>
            <h3>Payment Information</h3>
            <div className={styles.formControl}>
                <label>Card Company</label>
                <input type="text" 
                placeholder="Card Company"
                value={cardCompany}
                onChange={(e) => setCardCompany(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
            <label>Card Number</label>
                <input type="text" 
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
            <label>CSV</label>
                <input type="text"
                placeholder="CSV"
                value={csv}
                onChange={(e) => setCsv(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
            <label>Expiration Date (MM/YY)</label>
                <input type="text" 
                placeholder="Expiration Date (MM/YY)"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
            <label>Card Holder Name</label>
                <input type="text" 
                placeholder="Card Holder Name"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}></input>
            </div>


            </form>
            )
        }
    
export default PaymentInfo
