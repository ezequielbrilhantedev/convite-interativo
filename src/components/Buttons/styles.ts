import styled from 'styled-components'
import media from 'styled-media-query'

export const SectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Link = styled.a`
  border: solid 2px #fff;
  width: 130px;
  text-align: center;
  padding: 30px 223px;
  border-radius: 50px;
  color: #fff;
  margin-top: 5%;
  text-decoration: auto;
  cursor: pointer;

  ${media.lessThan('medium')`
    width: 80px;
    padding: 30px 200px;
  `}

  ${media.lessThan('small')`
    width: 30px;
    padding: 30px 100px;
  `}

  :hover {
    background-color: rgb(251, 158, 0, 0.733);
    transition-duration: 1s;
  }

  span {
    color: #fff;
    font-size: 18px;
    font-family: sans-serif;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;
  }
`
