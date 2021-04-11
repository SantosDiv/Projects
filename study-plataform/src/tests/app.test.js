import React from 'react';
import { screen } from '@testing-library/react';
// import renderWithRouter from './helpers/renderWithRouter';
import renderWithRouterRedux from './helpers/renderWithRouterRedux';
import App from '../App';

describe('Testa a tela inicial do app', () => {
  it('Se existe uma imagem com data-testid com "ilustracao-img"', () => {
    renderWithRouterRedux(<App />);
    expect(screen.getByTestId('ilustracao-img')).toBeInTheDocument()
  });

  it('Se existe um Título "Login Study" na página', () => {
    renderWithRouterRedux(<App />);
    const title = screen.getByRole('heading', {
      level: 2,
      name: 'Study login',
    });

    expect(title).toBeInTheDocument();
  });

  it('Se existe os campos de username e password', () => {
    renderWithRouterRedux(<App />);

    expect(screen.getByTestId('field-username')).toBeInTheDocument();
    expect(screen.getByTestId('field-password')).toBeInTheDocument();
  });

  it('Se existe um botão de submit', () => {
    renderWithRouterRedux(<App />);
    expect(screen.getByTestId('button-submit')).toBeInTheDocument();
  });
});