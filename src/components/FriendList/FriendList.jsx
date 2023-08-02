export default function FriendList ({friends}) {
    
    const list = friends.map((friend) => {
        return (<li key={friend.id} className="item">
                <span className="status">{friend.isOnline}</span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
               </li>
        )
    });
    const base = (
        <ul className="friend-list">
            {list}
        </ul>
    )
    return base;
}