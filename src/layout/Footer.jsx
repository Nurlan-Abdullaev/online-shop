import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <InfoContainer>
          <h2>BRANDNAME</h2>
          <InfoBlock>
            <p>О нас </p>
            <p>Контакты </p>
          </InfoBlock>
          <InfoBlock>
            <p>Способы оплаты </p>
            <p>Условия доставки </p>
          </InfoBlock>
          <InfoBlock>
            <p>Пользовательское соглашение </p>
            <p>Политика конфиденциальности</p>
          </InfoBlock>
        </InfoContainer>
      </Wrapper>
      <p>brandname.com 2023 Все права защищены</p>
      <LogoBox>
        <FirstBlock>
          <Logo>Onlineshop</Logo>
          <Logo>Onlineshop</Logo>
        </FirstBlock>
        <SecondBlock>
          <Logo>Onlineshop</Logo>
          <Logo>Onlineshop</Logo>
          <Logo>Onlineshop</Logo>
        </SecondBlock>
      </LogoBox>
    </FooterStyled>
  );
};

const FooterStyled = styled("footer")`
  text-align: center;
`;

const Wrapper = styled("div")`
  height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid #2e2e2e;
`;

const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  margin-right: 120px;
  margin-left: 120px;
`;

const InfoBlock = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  & :first-child {
    margin-bottom: 16px;
  }
`;

const LogoBox = styled("div")`
  border-top: 4px solid #2e2e2e;
  display: flex;
  margin-top: 20px;
  background-color: red;
  height: 82px;
`;

const FirstBlock = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  padding-left: 40px;
  background-color: #f2ed72;
  border-right: 2px solid #2e2e2e;
`;

const SecondBlock = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  padding-left: 50px;
  background-color: #30723f;
  border-left: 2px solid #2e2e2e;
`;

const Logo = styled("span")`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
`;
