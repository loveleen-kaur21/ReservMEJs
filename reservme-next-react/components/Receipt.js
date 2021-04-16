import {rooms} from '../data'
import styles from '../styles/Receipt.module.css'

const Receipt = ({reservation}) => {
    const price = (id) => {
        const filtered = rooms.filter((room) => (room.available && room.name === id)).shift()
        if (filtered) {
            return filtered.price
        }
    }
    return (
        <div className={styles.receiptContainer}>
            <div>
                <h3>Guest Information</h3>
                <p>Name: {reservation.fName} {reservation.lName}</p>
                <p>Address: {reservation.street} {reservation.city}, {reservation.state} {reservation.zipCode} </p>
                <p>Email: {reservation.email}</p>
                <p>Phone: {reservation.phone}</p>
            </div>
            <div>
                <h3>Payment Information</h3>
                <p>Card Company: {reservation.cardCompany}</p>
                <p>Card Number: ****-****-****-{reservation.cardNumber.slice(-4)}</p>
                <p>Card Holder Name: {reservation.cardHolderName}</p>
            </div>
            <div>
                <h3>Transaction Summary</h3>
                <p>Total Cost: ${price(reservation.id)}</p>
                <p>Suite Type: {reservation.id}</p>
            </div>
        </div>
    )
}

export default Receipt
