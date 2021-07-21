import { Button as SButton } from './styles'
import { TButton } from './types'

function Button({ children }: TButton) {
  return <SButton>{children}</SButton>
}

export default Button
