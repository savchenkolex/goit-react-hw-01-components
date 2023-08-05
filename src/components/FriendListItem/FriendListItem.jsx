import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
      <li className={css.item}>
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
}

FriendListItem.propTypes = {
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
};
