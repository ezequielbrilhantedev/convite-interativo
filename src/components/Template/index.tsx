import Buttons from '../Buttons'
import Info from '../Info'
import Logo from '../Logo'
import styled from 'styled-components'
import media from 'styled-media-query'

const Tela = styled.section`
  ${media.lessThan('medium')`
    padding: 3rem;
  `}

  ${media.lessThan('small')`
    padding: 0rem
  `}
`

const Home = () => {
  return (
    <>
      <Tela>
        <Logo />
        <Info />
        <Buttons />
      </Tela>
    </>
  )
}

export default Home
