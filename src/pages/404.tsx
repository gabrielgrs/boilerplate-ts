import styled from 'styled-components'

const Container = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

export default function Page404() {
  return <Container>404 - Page not found</Container>
}
