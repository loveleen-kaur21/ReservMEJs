import { rooms } from '../../../data'

export default function handler({ query: { id }}, res) {
    const filtered = rooms.filter(room => room.id === id)

    if(filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Room ${id} not found`})
    }
}