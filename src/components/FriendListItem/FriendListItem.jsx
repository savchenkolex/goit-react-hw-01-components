import PropTypes, { shape } from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friends }) {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <li key={id} className={css.item}>
        <span
          className={
            isOnline
              ? `${css.status} ${css.online}`
              : `${css.status} ${css.offline}`
          }
        >
          {isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
