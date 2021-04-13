const RoomForms = ({rooms}) => {
    return (
        <div>
            {rooms.map((room) => (
                room.id
            ))}
        </div>
    )
}

export default RoomForms
