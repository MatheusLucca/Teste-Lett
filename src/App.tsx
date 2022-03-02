import React from 'react';
import { Header } from './components/Header';
import { RepositoryList } from './components/RepositoryList';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <RepositoryList />
      <GlobalStyle />
    </>

  );
}

