import styled from 'styled-components'

export const InfBlock = styled.div`
  display: grid;
`
export const InfInsta = styled.div`
  text-align: center;
  color: rgb(252, 220, 0);
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 18px;

  span {
    cursor: pointer;

    a {
      color: rgb(252, 220, 0);

      svg {
        width: 50%;
      }
    }
  }
`

export const InfDetails = styled.div`
  margin-top: 5%;
  text-align: center;

  p {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
`
