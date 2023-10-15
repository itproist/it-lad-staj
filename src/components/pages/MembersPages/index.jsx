import Users from 'components/common/Users';
import { useAppSelector } from 'hook/hooks';

const MembersPages = () => {
  const users = useAppSelector((state) => state.auth.data);

  return (
    <div>
      Cписок людей
      {Array.isArray(users) &&
        users.map((el, obj) => {
          <Users key={el} {...obj} />;
        })}
    </div>
  );
};

export default MembersPages;
