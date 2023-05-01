import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <li className={css.item} key={id}>
            <div className={isOnline ? css.online : css.offline}></div>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
