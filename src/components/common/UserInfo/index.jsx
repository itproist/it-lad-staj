/* eslint-disable jsx-a11y/alt-text */
import styles from './UserInfo.module.scss';

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} />
      <div className={styles.userDetails}>
        <div className={styles.userName}>{fullName}</div>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
