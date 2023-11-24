import { styled } from "@mui/material";
import { ReactComponent as EditIcon } from "../../assets/edit-icon.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove-icon.svg";

export const AdminCard = ({ product, onDelete, onEdit }) => {
  return (
    <Container>
      <Header>
        <HeadTitle>{product.title}</HeadTitle>
        <IconContainer>
          <StyledEditIcon onClick={() => onEdit(product.id)} />
          <StyledDeleteIcon onClick={onDelete} />
        </IconContainer>
      </Header>
      <Content>
        <FirstBlock>
          <div>
            <Image src={product.image} />
          </div>
          <div>
            <Paragraph>Цвета в наличии</Paragraph>
            <Paragraph>Размеры в наличии</Paragraph>
          </div>
          <div>
            <Paragraph>{product.color}</Paragraph>
            <Paragraph>{product.sizes}</Paragraph>
          </div>
        </FirstBlock>

        <div>
          <Title>{product.available}</Title>
          <Paragraph>Запас</Paragraph>
        </div>
        <div>
          <Title>{product.price} Сом</Title>
          <Paragraph>Цена</Paragraph>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled("div")`
  margin-bottom: 20px;
`;

const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54.241px;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 5px;
  padding: 0px 20px 0px 20px;
`;

const IconContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90px;
`;

const Content = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 170px;
  border-radius: 10px;
  background: #fff;
  padding: 20px;
`;

const Image = styled("img")`
  width: 108px;
  height: 136px;
  border-radius: 10px;
`;

const FirstBlock = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const Paragraph = styled("p")`
  text-align: left;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin-bottom: 26px;
`;

const Title = styled("h3")`
  color: #242833;
  font-family: Avenir Next;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const HeadTitle = styled("h1")`
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.3px;
`;

const StyledEditIcon = styled(EditIcon)`
  cursor: pointer;
`;

const StyledDeleteIcon = styled(RemoveIcon)`
  cursor: pointer;
`;
