import * as S from './styles'
import { BsInstagram } from 'react-icons/bs'

const Info = () => {
  return (
    <>
      <S.InfBlock>
        <S.InfInsta>
          <p>@conviteinterativo</p>
          <span>
            <a href="https://www.instagram.com/conviteinterativoo/" target="_blank">
              <BsInstagram />
            </a>
          </span>
        </S.InfInsta>
        <S.InfDetails>
          <p>CONVITE PRÁTICO E DIGITAL</p>
          <p>@suelenoliveeira | seg à sex</p>
          <p>Casamentos | Aniversários | Eventos | Empresas</p>
        </S.InfDetails>
        {/* <div>
          <span>
            <p>CONVITE PRÁTICO E DIGITAL</p>
            <p>@suelenoliveeira | seg à sex</p>
            <p>Casamentos | Aniversários | Eventos | Empresas</p>
          </span>
        </div> */}
      </S.InfBlock>
    </>
  )
}

export default Info
