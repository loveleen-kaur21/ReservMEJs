import { withRouter } from 'next/router';
import Receipt from '../components/Receipt'

const receipt = ({router: {query}}) => {
    const reservation = JSON.parse(query.object)
    return (
        <div>
            <Receipt reservation={reservation} />
        </div>
    )
}

export default withRouter(receipt)
