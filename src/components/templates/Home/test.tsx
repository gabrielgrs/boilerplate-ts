import { render, screen } from '@testing-library/react'

import HomeTemplate from './index'

describe('<HomeTemplate />', () => {
  it('should render home template', () => {
    render(<HomeTemplate title="Boilerplate TS" />)

    const result = screen.getByRole('heading', {
      name: /Boilerplate TS/i,
    })

    expect(result).toBeInTheDocument()
  })
})
