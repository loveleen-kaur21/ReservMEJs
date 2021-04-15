import FormInfo from '../../components/FormInfo'
import {useRouter} from 'next/router'

export default function handler() {
    const router = useRouter()
    console.log(router)
    const {id} = router.query
    console.log(id)
   
    return (
    <div>
        <FormInfo id={id}/>
        <h3>This is a {id} suite</h3>
    </div>
    )
}