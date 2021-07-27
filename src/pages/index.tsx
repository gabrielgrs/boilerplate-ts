import { Fragment } from 'react'

import VercelSVG from 'svgs/vercel.svg'
import { i18n } from 'translate/i18n'

import HomeTemplate from 'components/templates/Home'

function Home() {
  return (
    <Fragment>
      <VercelSVG />
      <HomeTemplate title={i18n.t('home.title')} />
      <HomeTemplate
        title={i18n.t('home.interpolation', { value: 'Interpolation Value' })}
      />
    </Fragment>
  )
}

export default Home
