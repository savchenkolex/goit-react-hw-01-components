import PropTypes, {shape} from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
            <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
        )}
      )}
    </ul>
      );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    shape({
      id: PropTypes.number
    })
)};
