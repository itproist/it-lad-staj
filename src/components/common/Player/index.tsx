import styles from './Player.module.scss';

interface User {
  fullName: string;
  email: string;
  avatarUrl: string;
}

const Player: React.FC<User> = ({ fullName, email, avatarUrl }) => {
  return (
    <div className={styles.player}>
      <div>
        <img className={styles.img} src={avatarUrl} alt="111" />
      </div>

      <div className={styles.test}>
        <p>Имя: {fullName}</p>
        <p className={styles.testtestefd}>Почта: {email}</p>
      </div>
    </div>
  );
};

export default Player;
