import Header from '../Header';
import styles from './PageWrapper.module.scss';
import { Outlet } from 'react-router-dom';
import Sider from '../Sider';
import Aside from '../Aside';

const PageWrapper = () => {
  return (
    <div className={styles.page}>
      <Header />

      <Sider />
      <main className={styles.main}>
        <Outlet />
      </main>

      <Aside />
    </div>
  );
};

export default PageWrapper;
