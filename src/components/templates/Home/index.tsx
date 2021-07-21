import { Container } from './styles'
import { THomeTemplate } from './types'

function HomeTemplate({ title }: THomeTemplate) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export default HomeTemplate
