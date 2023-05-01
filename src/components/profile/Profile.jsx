import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css'


export const Profile = ({ username, tag, location, avatar, stats }) => {
    const formatedStatsFolowers = stats.followers.toLocaleString('en-US');
    const formatedStatsViews = stats.views.toLocaleString('en-US');
    const formatedStatsLikes = stats.likes.toLocaleString('en-US');
    return <div className={css.profile}>
        <div className={css.description}>
            <div className={css.avatarCircle}>
                 <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />

            </div>
           
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.statsItem}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{formatedStatsFolowers}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{formatedStatsViews}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{formatedStatsLikes}</span>
            </li>
        </ul>
    </div>
};


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};