import FormInfo from '../components/GuestandPaymentForm'
import SubmitInfoButton from '../components/SubmitInfoButton'

// Save form
const save = (form) => {
  console.log(form)
}

export default function Forms({guestinfo, paymentinfo}) {
    return (
      <div>

        <FormInfo />
        <SubmitInfoButton color='green' text='Reserve me now!' onSave={save} />
      </div>
    )
  }