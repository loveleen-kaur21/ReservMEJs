import styles from '../styles/Forms.module.css'
import { useState } from 'react'
import SubmitInfoButton from './SubmitInfoButton'
import {rooms} from '../data'

// Save form
const save = (form, id) => {
    const filtered = rooms.filter((room) => (room.available && room.name === id)).shift()
    filtered.guestInfo['fullName'] = `${form.fName} ${form.lName}`;
    filtered.guestInfo['address'] = `${form.street}, ${form.city}`
    filtered.guestInfo['zipcode'] = `${form.zipCode}`;
    filtered.guestInfo['email'] = `${form.email}`;
    filtered.guestInfo['state'] = `${form.state}`;
    filtered.guestInfo['phoneNumber'] = `${form.phoneNumber}`
    filtered.payment['cardCompany'] = `${form.cardCompany}`
    filtered.payment['cardNumber'] = `${form.cardNumber}`
    filtered.payment['csv'] = `${form.csv}`
    filtered.payment['expirationDate'] = `${form.expiration}`
    filtered.payment['cardholderName'] = `${form.cardHolderName}`
}

const FormInfo = ({id}) => {
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cardCompany, setCardCompany] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [csv, setCsv] = useState('')
    const [expiration, setExpiration] = useState('')
    const [cardHolderName, setCardHolderName] = useState('')



    const onSubmit = (e) => {
        e.preventDefault()
        if (!fName) {
            alert('Please add First Name')
            return
        } else if (!lName) {
            alert('Please add Last Name')
            return
        } else if (!street) {
            alert('Please add Street Address')
            return
        } else if (!city) {
            alert('Please enter the city.')
            return
        } else if (!state) {
            alert('Please enter the state.')
            return
        } else if (!zipCode) {
            alert('Please enter the zip code.')
            return
        } else if (!email) {
            alert('Please enter the email.')
            return
        } else if (!phone) {
            alert('Please enter your phone number.')
            return
        } else if (!cardCompany) {
            alert('Please enter your Card Company.')
        } else if (!cardNumber) {
            alert('Please enter your Card Number.')
        } else if (!csv) {
            alert('Please enter your CSV number.')
        } else if (!expiration) {
            alert("Please enter your card's expiration date.")
        } else if (!cardHolderName) {
            alert("Please enter the card holder's name.")
        } else {
            save({ fName, lName, street, city, state, zipCode, email, phone, cardCompany, cardNumber, csv, expiration, cardHolderName }, id)
        }
    }


    return (
        <form className={styles.addForm} onSubmit={onSubmit}>
            <div id="guestInfo">
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
            </div>


            <div id="paymentInfo">
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
            <SubmitInfoButton color='green' text='Reserve me now!' />
            </div>        
            </form>
            )
        }
    
export default FormInfo

