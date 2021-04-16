const Receipt = ({reservation}) => {
    return (
        <div>
            <div>
                <h3>Guest Information</h3>
                <p>Name: {reservation.fName}</p>
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
        </div>
    )
}

export default Receipt
