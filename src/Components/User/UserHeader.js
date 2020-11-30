import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/conta') setTitle('Feed');
    else if (pathname === '/conta/estatisticas') setTitle('Estatisticas');
    else if (pathname === '/conta/postar') setTitle('Poste sua Foto');
    else setTitle('Minha Conta');
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
