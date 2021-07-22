import * as theme from './index'

describe('theme', () => {
  it('Theme should match snapshot', () => {
    expect(theme).toMatchSnapshot()
  })
})
