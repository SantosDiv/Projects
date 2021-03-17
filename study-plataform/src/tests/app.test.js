import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Teste das rotas da aplicação', () => {
  it('Deve renderizar o componente login na rota home', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Study Login/i)).toBeInTheDocument();
  });

  it('Se ao clicar em Logar, leva para rota Dashboard', async () => {
    const dataUser = {
      name: 'diogenes',
      pass: '1234',
    }

    const { history } =  renderWithRouter(<App />);

    userEvent.type(screen.getByTestId('field-username'), dataUser.name);
    userEvent.type(screen.getByTestId('field-password'), dataUser.pass);
    userEvent.click(screen.getByTestId('button-submit'));
    await waitFor(() => {
      const { pathname } = history.location;
      expect(pathname).toBe(`/dashboard/${dataUser.name}`);
    });
  });

  it('Deve renderizar a página NotFound para rotas inexistentes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    expect(screen.getByText(/página não encontrada/i)).toBeInTheDocument();
  });
});