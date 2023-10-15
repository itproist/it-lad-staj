import { Link } from 'react-router-dom';
import styles from './Popup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserData } from 'store/slice/users';
import useOutsideAlerter from 'hook';

const Popup = () => {
  const { ref, isShow, setIsShow } = useOutsideAlerter(false);

  const { _id, fullName, avatarUrl } = useSelector((state: any) => state.auth.data);

  const dispatch = useDispatch();

  const onClickUserLogout = () => {
    if (window.confirm('Вый действительно хотите выйти? ')) {
      dispatch(clearUserData());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className={styles.popup}>
      <div ref={ref}>
        <div>
          <p className={styles.popup_name} onClick={() => setIsShow(!isShow)}>
            <div>
              <img className={styles.images} src={avatarUrl} alt="1" />
            </div>
          </p>
        </div>
        {isShow && (
          <div className={styles.popup_open}>
            <nav>
              <div className={styles.popup_fullName}>{fullName}</div>

              <div className={styles.popup_settings}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  version="1.1"
                >
                  <path
                    color="#000"
                    d="m1 1v4h4v-4h-4zm5 1v2h8v-2h-8zm-5 4v4h4v-4h-4zm5 1v2h8v-2h-8zm-5 4v4h4v-4h-4zm1 1h2v2h-2v-2zm4 0v2h8v-2h-8z"
                  />
                </svg>
                <span className={styles.popup_mr}>
                  <Link to={`/auth/me/${_id}`}>Настройки</Link>
                </span>
              </div>

              <div className={styles.popup_logout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <g stroke="#000" fill="none">
                    <path d="m10.75 3.9862a5.5 5.5 0 0 1 2.563 6.1868 5.5 5.5 0 0 1 -5.3131 4.077 5.5 5.5 0 0 1 -5.3127 -4.077 5.5 5.5 0 0 1 2.5627 -6.1867" />
                    <path d="m8 1.7637v5.972" />
                  </g>
                </svg>
                <span onClick={onClickUserLogout} className={styles.popup_mr}>
                  Выйти
                </span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
