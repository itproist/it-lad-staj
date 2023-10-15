import Player from 'components/common/Player';
import { useAppSelector } from 'hook/hooks';
import styles from './ProfilePages.module.scss';

const ProfilePages = () => {
  const { fullName, email, avatarUrl } = useAppSelector((state) => state.auth.data);
  return (
    <div>
      <h1>Профиль</h1>
      <div className={styles.testtest}>
        <Player fullName={fullName} email={email} avatarUrl={avatarUrl} />
      </div>
    </div>
  );
};

export default ProfilePages;
