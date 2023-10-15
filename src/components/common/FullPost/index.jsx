/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
import { Post } from '../Post';
import axios from '../../../api/index';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'https://esm.sh/react-markdown@7?bundle';
import styles from './FullPost.module.scss';

export const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получение статьи');
      });
  }, [id]);

  if (isLoading) {
    return <Post isLoading={isLoading} />;
  }

  return (
    <div className={styles.postik}>
      <h1>Cтатья</h1>
      <button className={styles.button} onClick={goBack}>
        Назад
      </button>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={`http://localhost:5000/${data.imageUrl}`}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        tags={data.tags}
      >
        {/* <ReactMarkdown className={styles.text} children={data.text} /> */}
        <ReactMarkdown className={styles.text} children={data.text} />
      </Post>
    </div>
  );
};
