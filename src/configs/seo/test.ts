import seoConfigs from './index'

describe('SEO configs', () => {
  it('Seo configs should match snapshot', () => {
    expect(seoConfigs).toMatchSnapshot()
  })
})
