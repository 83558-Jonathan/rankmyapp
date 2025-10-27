import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renderiza textos básicos e input de busca', () => {
    render(<HomePage />);
    expect(screen.getByText(/Digite um username do GitHub/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite um username do GitHub/i)).toBeInTheDocument();
  });
});
