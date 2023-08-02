export default function FriendList ({friends}) {
    console.dir(friends);
    const list = friends.map((friend) => {
        return (<li class="item">
                <span class="status">{friend.isOnline}</span>
                <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p class="name">{friend.name}</p>
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