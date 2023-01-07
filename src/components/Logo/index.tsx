import * as S from './styles';
import ImgLogo from '../../assets/images/LogoConviteInterativo.jpeg';

const Logo = () => {
  return (
    <S.ImgLogo>
      <img src={ImgLogo} alt="" />
    </S.ImgLogo>
  );
};

export default Logo;
