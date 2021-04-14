import styles from '../styles/Forms.module.css'
import { useState } from 'react'

const GuestInfo = () => {
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <form className={styles.addForm}>
            <h3>Guest Information</h3>
            <div className={styles.formControl}>
                <label>First Name</label>
                <input type="text" 
                placeholder="First Name"
                value={fName}
                onChange={(e) => setFname(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
                <label>Last Name</label>
                <input type="text" 
                placeholder="Last Name"
                value={lName}
                onChange={(e) => setLname(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
                <label>Street Address</label>
                <input type="text" 
                placeholder="Street Address"
                value={street}
                onChange={(e) => setStreet(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
                <label>City</label>
                <input type="text" 
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
                <label>State</label>
                <input type="text"
                 placeholder="State"
                 value={state}
                onChange={(e) => setState(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
                <label>Zip Code</label>
                <input type="text" 
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
                <label>Email</label>
                <input type="text" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className={styles.formControl}>
                <label>Phone Number</label>
                <input type="text" 
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}></input>
            </div>
                
               

                
            </form>
            )
        }
    
export default GuestInfo

