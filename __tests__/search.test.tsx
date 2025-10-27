import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from '@/app/components/SearchBox';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

describe('SearchBox', () => {
  it('envia para rota do usuário ao submeter', async () => {
    const user = userEvent.setup();
    render(<SearchBox />);
    const input = screen.getByPlaceholderText(/Digite um username/i);
    await user.type(input, 'vercel');
    await user.click(screen.getByRole('button', { name: /Buscar/i }));
  });
});
