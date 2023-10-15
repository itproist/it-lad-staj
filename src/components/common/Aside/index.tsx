import styles from './Aside.module.scss';
import rek from '../../../assets/hEXqat5XmjQ-fotor-bg-remover-202305032344.png';

const Aside: React.FC = () => {
  return (
    <aside className={styles.sider}>
      <img className={styles.img} src={rek} alt="" />
    </aside>
  );
};

export default Aside;
