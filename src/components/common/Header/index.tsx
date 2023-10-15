import styles from './Header.module.scss';
import logo from '../../../assets/gaz.png';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Popup from '../Popup';
import { selectIsAuth } from 'store/slice/users';
import { Button } from '@mui/material';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header className={styles.header}>
      {isAuth ? (
        <>
          <Link to="/">
            <img className={styles.igegege} src={logo} alt="" />
          </Link>
          <div className={styles.button}>
            <Link to="/add-post">
              <Button variant="contained">Написать статью</Button>
            </Link>
          </div>
          <div className={styles.popup_heh}>
            <Popup />
          </div>
        </>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </header>
  );
};

export default Header;
