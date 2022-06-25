import styled from 'styled-components'
import media from 'styled-media-query'

export const ImgLogo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2%;

  img {
    width: 12%;
    border-radius: 100%;

    ${media.lessThan('medium')`
      width: 100px;
    `}
  }
`
