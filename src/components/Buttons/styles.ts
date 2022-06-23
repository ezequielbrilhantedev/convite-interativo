import styled from "styled-components";
import media from "styled-media-query";

export const SectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.lessThan("medium")`
    margin-top: 70px;
  `}
`;

export const Link = styled.a`
  border: solid 2px #fff;
  width: 130px;
  text-align: center;
  padding: 30px 223px;
  border-radius: 50px;
  color: #fff;
  margin-top: 5%;
  text-decoration: none;
  cursor: pointer;

  ${media.lessThan("medium")`
    width: 155px;
    padding: 25px 200px;
  `}

  ${media.lessThan("small")`
    padding: 25px 100px;
  `}

  :hover {
    background-color: rgb(251, 158, 0, 0.733);
    transition-duration: 1s;
  }

  span {
    color: #fff;
    font-size: 18px;
    font-family: "Quicksand", sans-serif;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 500px) {
      font-weight: normal;
      font-size: 14px;
    }
  }
`;
