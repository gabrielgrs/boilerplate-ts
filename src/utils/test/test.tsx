import { render, screen } from './index'

describe('Test util', () => {
  it('Render is working', () => {
    render(<button>Button</button>)

    const element = screen.getByText(/Button/i)
    expect(element).toBeInTheDocument()
  })
})
