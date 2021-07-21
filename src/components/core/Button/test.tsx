import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import * as theme from 'styles/theme'

import Button from './index'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button>I am a Button</Button>
      </ThemeProvider>
    )

    expect(screen.getByRole('button', { name: /I am a Button/i })).toHaveStyle({
      backgroundColor: '#0f0f0f',
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
