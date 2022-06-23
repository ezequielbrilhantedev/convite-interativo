import Buttons from "../Buttons";
import Info from "../Info";
import Logo from "../Logo";
import styled from "styled-components";
import media from "styled-media-query";

const Tela = styled.section`
  ${media.lessThan("medium")`
    padding: 5%;
  `}
`;

const Home = () => {
  return (
    <>
      <Tela>
        <Logo />
        <Info />
        <Buttons />
      </Tela>
    </>
  );
};

export default Home;
