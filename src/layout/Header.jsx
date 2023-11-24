import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Login } from "../assets/login.svg";
import { ReactComponent as Favorite } from "../assets/favorite.svg";
import { ReactComponent as Card } from "../assets/card.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Options>
        <OptionsBlock>
          <Login />
          <div>Войти</div>
        </OptionsBlock>
        <OptionsBlock>
          <Favorite />
          <div>Избранные</div>
        </OptionsBlock>
        <OptionsBlock>
          <Card />
          <div>Корзина</div>
        </OptionsBlock>
      </Options>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  display: flex;
  justify-content: space-between;
  height: 64px;
`;

const Options = styled("div")`
  display: flex;
  align-items: center;
`;

const OptionsBlock = styled("div")`
  margin-right: 20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
