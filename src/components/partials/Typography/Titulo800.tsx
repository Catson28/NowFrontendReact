import styled from 'styled-components'
import { device } from '../../../services/styles/BreakPoints'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 48px;
  @media ${device.md} {
    font-size: 32px;
  }
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryText};
`

const Titulo800 = () => {
  return (
    <>
      <Title>Titulo!</Title>
      <>
        <H1> The quick brown fox jumps over the lazy dog</H1>
      </>
    </>
  )
}

export default Titulo800
