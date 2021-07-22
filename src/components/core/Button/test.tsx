import { render, screen } from 'utils/test'

import Button from './index'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>I am a Button</Button>)

    expect(screen.getByRole('button', { name: /I am a Button/i })).toHaveStyle({
      backgroundColor: '#0f0f0f',
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
