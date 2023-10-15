import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContainer from 'containers/AuthContainer';
import PageWrapper from 'components/common/PageWrapper';
import MainContainer from 'containers/MainContainer';
import { FullPost } from 'components/common/FullPost';
import { fetchAuthMe } from 'store/slice/users';
import { AddPost } from 'components/pages/AddPages';
import { useAppDispatch } from 'hook/hooks';
import ProfileContainer from 'containers/ProfileContainer';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<MainContainer />} />
          <Route path="posts/:id" element={<FullPost />} />
          <Route path="posts/:id/edit" element={<AddPost />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="auth/me/:id" element={<ProfileContainer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
