import FormInfo from '../../components/FormInfo'
import SubmitInfoButton from '../../components/SubmitInfoButton'
import {useRouter} from 'next/router'

export default function handler() {
    const router = useRouter()
    console.log(router)
    const {id} = router.query
    console.log(id)
    // Save form
    const save = (form) => {
    console.log(form)
    }
    return (
    <div>
        <FormInfo id={id}/>
        <h3>This is a {id} suite</h3>
        <SubmitInfoButton color='green' text='Reserve me now!' onSave={save} />
    </div>
    )
}