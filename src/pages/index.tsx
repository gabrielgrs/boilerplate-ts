import { Fragment } from 'react'

import VercelSVG from 'svgs/vercel.svg'

import HomeTemplate from 'components/templates/Home'

function Home() {
  return (
    <Fragment>
      <VercelSVG />
      <HomeTemplate title="Boilerplate TS" />
    </Fragment>
  )
}

export default Home
