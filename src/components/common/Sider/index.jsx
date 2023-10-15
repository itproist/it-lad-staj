import React from 'react';
import styles from './Sider.module.scss';
import { FaTh, FaBars, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sider = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const categories = [
    {
      path: '/test1',
      name: 'Поздразделение',
      icon: <FaTh />,
    },
    {
      path: 'members',
      name: 'Cписок сотрудников',
      icon: <FaUserAlt />,
    },
  ];

  return (
    <div style={{ width: isOpen ? '250px' : '50px' }} className={styles.aside}>
      <ul>
        {categories.map((posts, index) => (
          <NavLink key={index} className={styles.link} to={posts.path}>
            <div className={styles.icon}>{posts.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }}> {posts.name}</div>
          </NavLink>
        ))}
      </ul>
      <div className={styles.toggle}>
        <FaBars onClick={toggle} />
        <div style={{ display: isOpen ? 'block' : 'none' }}>Свернуть</div>
      </div>
    </div>
  );
};
export default Sider;
