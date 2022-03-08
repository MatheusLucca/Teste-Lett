import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <MainRoutes />
    </BrowserRouter>

  );
}

