import GuestInfo from '../components/GuestInfo'
import PaymentInfo from '../components/PaymentInfo'
import SubmitInfoButton from '../components/SubmitInfoButton'


export default function Forms({guestinfo, paymentinfo}) {
    return (
      <div>

        <GuestInfo />
        <PaymentInfo />
        <SubmitInfoButton color='green' text='Reserve me now!' />
      </div>
    )
  }