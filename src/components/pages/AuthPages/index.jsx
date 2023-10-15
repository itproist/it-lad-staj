import React from 'react';
import { Paper, TextField, Typography } from '@mui/material';
import styles from './AuthPages.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from 'store/slice/users';
import { Navigate } from 'react-router-dom';
import lockeyes from '../../../assets/lockeyes.png';
import blockeyes from '../../../assets/blockeyes.png';
import logo from '../../../assets/gaz.png';

const AuthPages = () => {
  const [type, setType] = React.useState(`password`);

  const showPassword = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (value) => {
    const data = await dispatch(fetchAuth(value));

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.auth}>
      <div className={styles.auth_auth}>
        <img className={styles.auth_img} src={logo} alt="" />
      </div>
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Вход в аккаунт
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            label="E-Mail"
            type="email"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register('email', { required: 'Укажите почту' })}
            fullWidth
          />

          <div className={styles.passwordrl}>
            <TextField
              className={styles.field}
              label="Пароль"
              type={type}
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register('password', { required: 'Укажите пароль' })}
              fullWidth
            />
            <div className={styles.passwordab}>
              <button type="button" className={styles.password} onClick={showPassword}>
                {type === 'text' ? <img src={lockeyes} alt="" /> : <img src={blockeyes} alt="" />}
              </button>
            </div>
          </div>

          <button type="submit" className={styles.button} disabled={!isValid}>
            Войти
          </button>
        </form>
      </Paper>
    </div>
  );
};

export default AuthPages;
