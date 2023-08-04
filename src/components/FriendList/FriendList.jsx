import PropTypes from "prop-types";
import css from './FriendList.module.css';

export default function FriendList ({friends}) {
    
    const list = friends.map(({id,isOnline,avatar,name}) => {
        return (<li key={id} className={css.item}>
                <span className={ isOnline ? 
                    `${css.status} ${css.online}` : `${css.status} ${css.offline}`
                    }>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
               </li>
        )
    });
    const base = (
        <ul className={css["friend-list"]}>
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