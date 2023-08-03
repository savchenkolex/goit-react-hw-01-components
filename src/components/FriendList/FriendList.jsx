import PropTypes from "prop-types";

export default function FriendList ({friends}) {
    
    const list = friends.map(({id,isOnline,avatar,name}) => {
        return (<li key={id} className="item">
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
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

FriendList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}