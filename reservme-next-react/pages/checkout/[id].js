import FormInfo from '../../components/FormInfo'
import {useRouter} from 'next/router'

export default function handler() {
    const router = useRouter()
    const {id} = router.query
    // Save form
    const save = (form) => {
    console.log(form)
    }
    return (
    <div>
        <FormInfo id={id}/>
        <h3>This is a {id} suite</h3>
    </div>
    )
}