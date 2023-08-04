import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
