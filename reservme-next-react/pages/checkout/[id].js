import FormInfo from '../../components/FormInfo'
import {useRouter} from 'next/router'
import {rooms} from '../../data'

export default function handler() {
    const router = useRouter()
    const {id} = router.query
    return (
    <div>
        <FormInfo id={id}/>
        <h3>This is a {id} suite</h3>
    </div>
    )
}