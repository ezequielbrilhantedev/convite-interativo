import styled from 'styled-components';
import media from 'styled-media-query';

export const SectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.lessThan('medium')`
    margin-top: 70px;
  `}

  ${media.lessThan('small')`
    margin-top: 1rem;
  `}
`;

export const Link = styled.a`
  border: solid 2px #fff;
  width: 130px;
  text-align: center;
  padding: 30px 223px;
  border-radius: 50px;
  color: #fff;
  margin-top: 3rem;
  text-decoration: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    width: 155px;
    padding: 25px 200px;
    `}

  ${media.lessThan('small')`
    margin-top: 1rem;
    padding: 25px 85px;
  `}

  :hover {
    color: #8100cc;
    background-color: rgb(252, 220, 0);
    transition-duration: 1s;
  }

  span {
    color: #fff;
    font-size: 18px;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;

    :hover {
    }

    @media (max-width: 500px) {
      font-weight: normal;
      font-size: 14px;
    }
  }
`;
